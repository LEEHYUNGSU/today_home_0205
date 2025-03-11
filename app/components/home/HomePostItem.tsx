"use client";

import { HomeType } from "@/prisma/prismaType";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";
import { GrFavorite, GrShareOption } from "react-icons/gr";
import { IoChatbubbleOutline } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import { RiChat1Line, RiChat3Line } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { homeLikeButtonFunc } from "@/actions/HomeAction";
import toast from "react-hot-toast";
import ChatPage from "./ChatPage";

interface HomePostProps {
  data: HomeType;
  updateState: boolean;
  setUpdateState: React.Dispatch<React.SetStateAction<boolean>>;
}

function splitByHash(content: string) {
  if (!content.includes("#")) return [content];
  return content.split("#").filter((item) => item.trim() !== "");
}

const HomePostItem = ({ data, updateState, setUpdateState }: HomePostProps) => {
  const [chatState, setChatState] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(data.like);
  const [loading, setLoading] = useState<boolean>(false);
  const dataId = data.id;

  const handleLike = async (id: string) => {
    const previousLikeCount = likeCount;

    setLikeCount(likeCount + 1);

    try {
      setLoading(true);

      const updatedHomeData = await homeLikeButtonFunc(id);

      toast.success("좋아요가 업데이트 되었습니다!");
    } catch (error) {
      console.error("Error", error);

      setLikeCount(previousLikeCount);

      toast.error("Error");
    } finally {
      setLoading(false);
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div className="h-auto flex flex-col w-full bg-white">
      <div className="w-full h-[9vh] flex justify-between pl-4 pr-4">
        <div className="flex items-center space-x-2 h-auto w-auto">
          <div className="w-[45px] aspect-square rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src={data.user.userImg}
              alt=""
              className="w-full h-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="font-bold">{data.username}</div>
        </div>
        <div className="w-auto h-full flex items-center space-x-4">
          {/* {data.follow ? <span className=''>팔로잉</span>:<span className='text-themeBlue'>팔로우</span>}
          <MdMoreHoriz size={24} /> */}
        </div>
      </div>

      <div className="w-full h-[55vh] flex items-center justify-center relative">
        <Swiper className="w-full h-full">
          {data.images.map((item, idx) => (
            <Fragment key={idx}>
              <SwiperSlide key={idx} className="relative">
                <Image
                  src={item}
                  alt=""
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority
                />
                <div className="w-[50px] h-[35px] rounded-xl flex items-center absolute top-4 right-4 justify-center bg-black bg-opacity-40 text-white z-50">
                  {idx + 1} / {data.images.length}
                </div>
              </SwiperSlide>
            </Fragment>
          ))}
        </Swiper>
      </div>

      <div className="h-[7vh] w-full mt-5 items-center flex justify-between pl-4 pr-4">
        <div className="flex w-auto space-x-2 h-[90%]">
          {data.images.slice(0, 4).map((data, idx) => (
            <Fragment key={idx}>
              <div className="h-full aspect-square overflow-hidden rounded-md relative">
                <Image
                  src={data}
                  alt=""
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </Fragment>
          ))}
        </div>
        <div className="flex space-x-1 text-[15px] font-bold">
          <span>상품 더보기</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="flex justify-between items-center pl-4 pr-4 w-full h-[5vh] mt-4">
        <div className="flex space-x-4 items-center h-auto">
          <div className="flex space-x-1" onClick={() => handleLike(data.id)}>
            <GrFavorite size={28} />
            <span>{String(likeCount)}</span>
          </div>
          <div className="flex pb-[2px] space-x-1">
            <RiChat1Line size={28} />
            <span>{data.chatArr.length}</span>
          </div>
          <div className="flex space-x-1 pb-[2px]">
            <GrShareOption size={28} />
          </div>
        </div>
        <div className="flex space-x-1 pb-[4px] items-center">
          <FaRegBookmark size={24} />
          <span>{data.bookmark.toLocaleString()}</span>
        </div>
      </div>

      <div className="mt-4 h-auto flex flex-col w-full pl-4 pr-4 text-[17px]">
        <div className="h-[3vh] truncate">
          {splitByHash(data.content).length === 1 && (
            <span>{data.content}</span>
          )}
          {splitByHash(data.content).length > 1 && (
            <>
              {splitByHash(data.content).map((data, idx) => (
                <span key={idx} className="text-themeBlue">
                  #{data}
                </span>
              ))}
            </>
          )}
        </div>
        <div
          className="h-auto text-gray-500 text-[15px] font-bold"
          onClick={() => setChatState(!chatState)}
        >
          댓글 {data.chatArr.length}개 모두 보기
        </div>

        <div className="h-auto w-full mt-4">
          <span className="font-bold mr-2">{data.chatArr[0]?.username}</span>
          <span className="">{data.chatArr[0]?.content}</span>
        </div>
        <div className="h-auto w-full flex mt-2 text-gray-500 text-[15px] tracking-tighter">
          {data.createdAt.toLocaleDateString()}
        </div>
      </div>

      {chatState && (
        <ChatPage chatArr={data.chatArr} setChatState={setChatState} updateState={updateState} setUpdateState={setUpdateState} dataId={dataId} />
      )}
    </div>
  );
};

export default HomePostItem;
