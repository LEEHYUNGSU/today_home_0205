"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/home/Footer";
import UserHeader from "./UserHeader";
import jwt from "jsonwebtoken";
import { UserTotalType } from "@/prisma/prismaType";
import { getUserFromUserPage } from "@/actions/UserAction";
import Image from "next/image";

interface UserDataTokenType {
  userId: string;
  username: string;
  exp: number;
  iat: number;
}

const UserPage = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState<UserTotalType>();

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const decoded = jwt.decode(tokenData) as UserDataTokenType | null;
        // 타입을 강제로 지정(단언)하여, 타입 검사의 오류 막기
        if (decoded?.userId) {
          setUserId(decoded.userId);
        }
      } catch (error) {
        console.error("Error", error);
      }
    }
  }, []);

  useEffect(() => {
    const userDataFetch = async () => {
      if (userId) {
        const data = await getUserFromUserPage(userId);
        setUserData(data);
      }
    };
    if (userId) {
      userDataFetch();
    }
  }, [userId]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div className="h-screen w-screen  relative">
      <UserHeader />
      <Footer />
      <div className="h-[94vh] pt-[6vh] bg-white overflow-y-auto w-screen flex flex-col">
        <div className="h-[20vh] flex justify-between w-full">
          <div className="w-auto pl-3 flex flex-col h-full justify-center">
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
      </div>
    </div>
  );
};

export default UserPage;
