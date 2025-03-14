"use server";

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const JWT_SECRET_KEY = process.env.JWT_SCRET_KEY || "your-secret-key";

// export 할 수 없음. use server에서는 async function만 모듈화해서 export 할 수 있음.

export async function UserRegister(
  username: string,
  userId: string,
  password: string
) {
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { userId }],
      },
    });

    if (existingUser) {
      throw new Error("이미 존재");
    }

    const users = await prisma.user.create({
      data: {
        userId: userId,
        username: username,
        password: password,
        userImg:
          "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/one.jpg",
      },
    });

    return users;
  } catch (error) {
    console.error("Singing Error", error);
    throw new Error("Signing Error");
  }
}

export async function LoginUser(userId: string, password: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { userId },
    });

    if (!user) {
      console.log("User not found From Login Error");
      return;
    }

    const isPasswordValid = user.password === password;

    if (isPasswordValid) {
      const token = jwt.sign(
        { userId: user.userId, username: user.username },
        JWT_SECRET_KEY,
        { expiresIn: "7d" }
      );

      return token;
    } else {
      console.log("Invalid passowrd");
    }
  } catch (error) {
    console.error("Error loggin", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserFromUserPage(userId: string){
  try {
    const user = await prisma.user.findUnique({
      where: {userId},
    });

    if(!user){
      console.log("User not found From UserPage Info Search");
      return;
    }
    console.log(user);
    return user;
  } catch (error){
    console.log("error");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserFromToken(token: string) {
  try {
    if (!token) {
      throw new Error("No token Provided");
    }

    const decoded = jwt.verify(token, JWT_SECRET_KEY) as { userId: string };

    const user = await prisma.user.findUnique({
      where: { userId: decoded.userId },
    });

    if (!user) {
      throw new Error("User not found");
    }

    console.log(user);

    return user;
  } catch (error) {
    throw new Error("Invalid");
  } finally {
    await prisma.$disconnect();
  }
}

export async function decodeToken(token: string) {
  try {
    if (!token) {
      throw new Error("No token Provided");
    }
    const decoded = jwt.verify(token, JWT_SECRET_KEY) as { userId: string };
    console.log(`decoded ${decoded}`);
    return decoded;
  } catch (error) {
    throw new Error("Invalid");
  } finally {
  }
}

// 클라이언트에서는 jwt.decode만 사용: 클라이언트 측에서는 **jwt.decode**를 사용하여 토큰을 디코딩할 수 있지만, 서명을 검증하는 것은 서버에서만 해야 합니다.

// 서버에서 jwt.verify를 사용: 실제 토큰 검증(verify)은 서버에서만 수행해야 합니다. 서버는 비밀 키를 안전하게 보관하고, 이를 사용해 토큰의 무결성을 검증할 수 있습니다
