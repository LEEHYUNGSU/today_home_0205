"use client";

import { decodeToken, LoginUser } from "@/actions/UserAction";
import React, { useEffect, useState } from "react";
import * as jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key";

interface JWTPayloadType{
  userId : string;
  username: string;
  iat: number;
  axp: number;
}

const Loginpage = () => {
  const [password, setPassword] = useState("");
  // 패스워드 Input 입력 상태
  const [userId, setUserId] = useState("");
  // 아이디 Input 입력 상태
  const [token, setToken] = useState<string | null>("");
  // 토큰을 불러와서 저장하는 상태
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
        setToken(response);
      }
    } catch (err: any) {
      console.error("Request error:", err); // 에러 로그 출력
    } finally {
      router.push("/user");
    }
    // 모든 작업이 완료되면, 유저 상세 정보 페이지로 이동하기
    // 이미 토큰이 존재한다면, 토큰이 존재한다고 하고, 10초 뒤에 유저 페이지로 이동시키기
  };

  // useEffect(() => {
  //   const tokenData = localStorage.getItem("token");
  //   if (tokenData) {
  //     try {
  //       const decoded = jwt.decode(tokenData) as JWTPayloadType;
  //       if(decoded.userId){
  //         setDecodedId(decoded.userId);
  //       }
  //     } catch (error) {
  //       console.error("Error", error);
  //     }
  //   }
  // }, [token]);

  // 로그인해서 토큰을 받아오면, 먼저 토큰을 디코드해서, decode한 Id를 출력하는 Side Effect

  // useEffect(() => {
  //   const tokenData = localStorage.getItem("token");
  //   if(tokenData){
  //     try {
  //       const decoded = jwt.decode(tokenData) as jwt.JwtPayload | null;
  //       // 이 함수를 변수화시켜서 여러 곳에서 사용할 수 있어야 함. 또는 전체 상태로 관리되어야 함. ***
  //       // JWT Payload의 Type은 exp?:number, iat?:number, [key:string]:any
  //       if(decoded?.exp){
  //         const currentTime = Math.floor(Date.now() / 1000);
  //         if(decoded.exp > currentTime){
  //           setTokenIsValid(true);
  //         } else {
  //           setTokenIsValid(false);
  //         }
  //       }
  //     } catch (error){
  //       console.error("Token Error");
  //       setTokenIsValid(false);
  //     }
  //   }
  // }, [token]);

  // // 로그인해서 또는 로컬스토리지에 토큰이 저장되어 있으면, 토큰이 유효한지에 대한 여부를 판단하는 Side Effect
  
  // useEffect(() => {
  //   if(decodedId && tokenIsValid){
  //     alert("이미 로그인되어 있습니다.");
  //     router.push("/user");
  //   }
  // }, [token, tokenIsValid]);

  return (
    <>
      <LoginForm password={password} setPassword={setPassword} userId={userId} setUserId={setUserId} handleLogin={handleLogin}  />
    </>
  );
};

export default Loginpage;
