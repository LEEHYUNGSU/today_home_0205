"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getHomeByCursor(cursor?: string | null){
  try {
    const HomeData = await prisma.homeData.findMany({
      take: 5,
      skip: cursor ? 1 : 0,
      cursor: cursor? {id:cursor} : undefined,
      orderBy: {createdAt: 'desc'},
      include: {
        user: {
          select: {userImg: true, userTitle: true}
        },
        chatArr: {
          select: {username: true, like: true, content: true},
        }
      }
    });

    if(!HomeData){
      console.log('Home not found');
      return;
    }

    return HomeData;
  } catch (error){
    console.error('Error', error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function getHome(){
  try {
    const HomeData = await prisma.homeData.findMany({
      // take: 1,
      orderBy: {createdAt: 'desc'},
      include: {
        user: {
          select: {userImg: true, userTitle: true}
        },
        chatArr: {
          select: {username: true, like: true, content: true},
        }
      }
    });

    if(!HomeData){
      console.log('Home not found');
      return;
    }

    return HomeData;
  } catch (error){
    console.error('Error', error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function homeLikeButtonFunc(HomeId: string){
  try {
    const updatedHomeData = await prisma.homeData.update({
      where: {id: HomeId},
      data: {
        like: {
          increment: 1,
        }
      }
    });

    console.log('Updated');
    return updatedHomeData;
  } catch (error){
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function ChatSubmitButtonFunc(HomeId: string, content: string){
  try {
    const chatUpdated = await prisma.chat.create({
      data: {
        username: "이예의집",
        like: 0,
        content: content,
        homeDataId: HomeId,
      }
    });
    console.log('ChatSubmit Action');

    return chatUpdated;
  } catch (error){
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}