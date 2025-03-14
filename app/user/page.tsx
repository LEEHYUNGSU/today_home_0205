"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/home/Footer";
import UserHeader from "./UserHeader";
import jwt from "jsonwebtoken";
import { UserTotalType } from "@/prisma/prismaType";
import { getUserFromUserPage } from "@/actions/UserAction";
import Image from "next/image";
import { CiShare2, CiSquarePlus } from "react-icons/ci";
import ContentTab from "./ContentTab";
import ScrapTab from "./ScrapTab";
import UserPlus from "./UserPlus";

export interface UserDataTokenType {
  userId: string;
  username: string;
  exp: number;
  iat: number;
}

const UserPage = () => {
  const [userId, setUserId] = useState("");
  // userId는 userData에서 필요한 아이디만 찾아오는 상태 정보
  const [userData, setUserData] = useState<UserTotalType>();
  // userData는 useEffect를 통해 저장하는 UserData의 상태정보

  const [userPageState, setUserPageState] = useState<"Content" | "Scrap">(
    "Content"
  );
  // 탭을 나누기 위한 상태정보

  const [uploadState, setUploadState] = useState<boolean>(false);
  // 업로드 여부에 따라 BottomSheet를 띄우기 위한 상태정보

  const handleTabClick = (tab: "Content" | "Scrap") => {
    if (userPageState !== tab) {
      setUserPageState(tab);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const tokenData = localStorage.getItem("token");
      if (!tokenData) return;

      try {
        const decoded = jwt.decode(tokenData) as UserDataTokenType | null;

        if (decoded?.userId) {
          setUserId(decoded.userId);

          const data = await getUserFromUserPage(decoded.userId);
          setUserData(data);
        }
      } catch (error) {
        console.error("Error decoding token", error);
      }
    };

    fetchUserData();
  }, []);

  // 이 부분을 전체 상태 정보로 관리해야 한다.

  return (
    <div className="h-screen w-screen relative">
      <UserHeader />
      <Footer />

      <UserPlus />
      {/* 올리기를 위한 고정 Plus 버튼 */}

      <div className="h-[94vh] pt-[6vh] bg-white overflow-y-scroll w-screen flex flex-col">
        <div className="h-[20vh] flex justify-between w-full shrink-0">
          <div className="w-auto pl-4 flex flex-col h-full justify-center">
            <div className="text-[20px] font-bold">{userId}</div>
            <div className="text-gray-700 text-[18px]">팔로워 2012</div>
          </div>

          <div className="w-auto items-center pr-3 flex flex-col h-full justify-center">
            <div className="w-[100px] h-[100px] rounded-full">
              {userData?.userImg && (
                <Image
                  src={String(userData?.userImg)}
                  width={500}
                  height={500}
                  priority
                  className="object-cover rounded-full w-full h-full"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 w-full pl-4 pr-4 flex items-center h-auto space-x-3">
          <div className="bg-themeBlue text-[14px] rounded-sm text-white flex items-center justify-center w-[37vw] h-10">
            리워드 혜택
          </div>
          <div className="bg-white border text-[14px] rounded-sm border-gray-200 flex items-center justify-center w-[37vw] h-10">
            프로필 수정
          </div>
          <div className="h-10 w-10 flex items-center justify-center border border-gray-200 rounded-sm">
            <CiShare2 />
          </div>
        </div>

        <div className="flex-1 mt-10 flex flex-col">
          <div className="w-full h-10 flex items-center border-b border-gray-200">
            <div
              className={`w-1/2 h-full flex items-center justify-center font-bold pb-3 ${
                userPageState === "Content"
                  ? "border-b-2 border-black"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Content")}
            >
              콘텐츠
            </div>

            <div
              className={`w-1/2 h-full flex items-center justify-center pb-3 font-bold ${
                userPageState !== "Content"
                  ? "border-b border-black"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick("Scrap")}
            >
              스크랩
            </div>
          </div>

          {userPageState === "Content" ? <ContentTab /> : <ScrapTab />}


        </div>
      </div>
    </div>
  );
};

export default UserPage;
