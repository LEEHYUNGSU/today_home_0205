import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UserType{
  userId: string;
  username: string;
  userImg: string;
  userTitle?: string;
  password: string;
}

async function insertUsers(){
  const users = [
    {
      userId: 'user1',
      username: "이예의집",
      userImg: "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/catchTable/Img1.jpg",
      userTitle: '수납의 달인 1위 선정, 우수 크리에이터',
      password: 'password1',
    },
    {
      userId: 'user2',
      username: "김서울",
      userImg: "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/catchTable/Img1.jpg",
      userTitle: '수납의 달인 1위 선정, 우수 크리에이터',
      password: 'password2',
    },
    {
      userId: 'user3',
      username: "min_home_1",
      userImg: "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/catchTable/Img1.jpg",
      userTitle: '수납의 달인 1위 선정, 우수 크리에이터',
      password: 'password2',
    },
  ];

  try {
    for (const userData of users){
      const user = await prisma.user.create({
        data: {
          userId: userData.userId,
          username: userData.username,
          password: userData.password,
          userImg: userData.userImg,
          userTitle: userData.userTitle,
        },
      });

      console.log('Inserted', user);
    }
  } catch (error){
    console.error('Error', error);
  } finally {
    await prisma.$disconnect();
  }
}

insertUsers();