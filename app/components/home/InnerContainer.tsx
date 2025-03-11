"use client";
import { HeaderMenu } from "@/app/data/List";
import Image from "next/image";
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import HomePostItem from "./HomePostItem";
import { HomeType } from "@/prisma/prismaType";
import { getHome, getHomeByCursor } from "@/actions/HomeAction";

const InnerContainer = () => {
  const [postData, setPostData] = useState<HomeType[] | []>([]);
  const [index, setIndex] = useState(3);
  const divRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [updateState, setUpdateState] = useState<boolean>(false);
  const [postLoading, setPostLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [cursor, setCursor] = useState<string | null>(null);


  useEffect(() => {
    const dataFunc = async () => {
      const data = await getHome();
      console.log(data);
      if(data){
        setPostData(data);
      }
    }
    if(postData.length > 0){
      dataFunc();
    }
  }, [updateState]);

  useEffect(() => {
    fetchHomeData();
  }, []);

  useEffect(() => {
    console.log('post data length', postData.length);
  }, [postData]);



  const fetchHomeData = async () => {
    if(postLoading || !hasMore) return;

    setPostLoading(true);

    try {
      const newData = await getHomeByCursor(cursor);

      if(newData && newData.length === 0){
        setHasMore(false);
      } else if(newData!== undefined) {
        setPostData((prev) => [...prev, ...newData]);
        setCursor(newData[newData.length - 1].id);
      }
    } catch (error){
      console.error('error');
    } finally {
      setPostLoading(false);
      console.log('fecthBy Cursor')
    }
  };



  useEffect(() => {
    if(postLoading) return;

    if(observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if(entries[0].isIntersecting){
          fetchHomeData();
        }
      },
      {threshold: 0.5}
    );

    if(divRef.current){
      observerRef.current.observe(divRef.current);
    }

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    }
  }, [fetchHomeData, postLoading]);


  if(postData.length === 0){
    return null;
  }

  return (
    <div className="h-[92vh] pt-[12vh] overflow-y-auto overflow-x-hidden w-full">
      <div className="h-auto w-full flex flex-col">
        <div className="h-[12vh] w-full overflow-x-auto mt-4">
          <div className="w-auto h-full pl-2 pr-2 flex items-center space-x-2">
            {HeaderMenu.map((data, idx) => (
              <Fragment key={idx}>
                <div className="flex shrink-0 flex-col w-[70px] h-[100px] items-center space-y-2">
                  <div className="flex items-center justify-center bg-gray-200 w-[55px] h-[55px] rounded-xl">
                    <Image
                      src={data.icon}
                      alt=""
                      className="w-[40px] h-[40px] object-cover"
                    />
                  </div>
                  <div className="text-[13px]">{data.title}</div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>

        {postData.map((data: HomeType, idx) => (
          <HomePostItem data={data} key={idx} updateState={updateState} setUpdateState={setUpdateState} />
        ))}

        <div ref={divRef} className="h-10">

        </div>
      </div>


    </div>
  );
};

export default InnerContainer;
