import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function chatInsert(){
  const chatArr = [
    {
      username: "이예의집",
      content: "톤온톤 색감 선택이 정말 센스있네요! 은은한 베이지 덕분에 편안함이 느껴져요! 깔끔함 유지하는 비법 공유 감사합니다.",
      like: 1,
      homeDataId: "67ad806b2078280690c4b1b0",
    },
    {
      username: "이예의집",
      content: "와아 정말 깔끔하고 밝아서 넘 예쁜 주방이네요",
      like: 5,
      homeDataId: "67ad806b2078280690c4b1b0",
    },
    {
      username: "이예의집",
      content: "깔끔하고 예뻐서 자꾸 들어가고 싶은 주방같아요~",
      like: 3,
      homeDataId: "67ad806b2078280690c4b1b0",
    },
  ]

  try {
    for (const chatData of chatArr){
      const chat = await prisma.chat.create({
        data: {
          username: chatData.username,
          content: chatData.content,
          like: chatData.like,
          homeDataId: chatData.homeDataId,
        },
      });

      console.log('Inserted', chat);
    }
  } catch (error){
    console.error('Error', error);
  } finally {
    await prisma.$disconnect();
  }
}

chatInsert();
