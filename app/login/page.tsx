"use client";

import { decodeToken, LoginUser, UserRegister } from "@/actions/UserAction";
import React, { useEffect, useState } from "react";
import * as jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key";

const Loginpage = () => {
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState<string | null>("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 방지

    if (!userId || !password) {
      return;
    }
    try {
      const response = await LoginUser(userId, password);
      if (response) {
        localStorage.setItem("token", response);
        console.log("set Token");
        setToken(response);
      }
      console.log("login success");
    } catch (err: any) {
      console.error("Request error:", err); // 에러 로그 출력
    } finally {
      console.log("token", token);
    }
  };

  useEffect(() => {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      try {
        const decoded = jwt.decode(tokenData);
        console.log(decoded);
      } catch (error) {
        console.error("Error", error);
      }
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-hidden justify-center pb-[60px] font-bmjua">
      <div className="w-full h-auto flex items-center justify-center text-[50px] mb-5 font-bmjua">
        오늘의집
      </div>

      <form
        className="w-4/5 flex flex-col items-center justify-center rounded-lg h-auto text-[17px]"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          id="userId"
          placeholder="id를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="username__box w-[90%] mb-2 rounded-md h-[50px] pl-3 bg-[#E5E9ED] focus:outline-themeBlue"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password__box w-[90%] rounded-md mb-2 h-[50px] pl-3 bg-[#E5E9ED] focus:outline-themeBlue"
        />
        <button
          type="submit"
          className="login__btn w-[90%] h-[50px] flex items-center justify-center text-[20px] bg-themeBlue text-white rounded-md mt-1"
          onClick={handleLogin}
        >
          로그인하기
        </button>
      </form>

      <div className="w-full underline justify-center mt-5 flex items-center space-x-4 text-[18px] text-gray-500 underline-offset-4">
        <span onClick={() => router.push("/signUp")}>회원가입</span>
        <span>비밀번호 찾기</span>
      </div>

      <div className="w-full text-[17px] text-gray-400 flex items-center justify-center mt-2">
        로그인에 문제가 있으신가요?
      </div>
    </div>
  );
};

export default Loginpage;
