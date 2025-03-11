import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertHome() {
  const HomePostingData = [
    {
      username: "이예의집",
      Image: [
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/oneImage.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/twoImage.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/threeImage.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/fiveImage.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/SixImage.jpg",
      ],
      like: 16,
      bookmark: 58,
      content:
        "깔끔하고 여유로운 주방을 유지하고 싶지만 음식할때마다 언제나 비좁고 복작복작한 주방. 우리집 주방의 숨은 공간을 알차게 이용하고 좁은 조리대를 1.5배 활용할 수 있는 살림템을 소개해드릴게요 :)",
      shared: 0,
    },
    {
      username: "김서울",
      Image: [
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/two/one.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/two/two.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/two/three.jpg",
      ],
      like: 8,
      bookmark: 28,
      shared: 2,
      content:
        "구름 이불이라고 부르고 싶다. 침구교체 사진으로 시작해보는 화요일!",
    },
    {
      username: "min_home_1",
      Image: [
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/one.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/two.jpg",
        "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/three.jpg",
      ],
      like: 81,
      shared: 16,
      bookmark: 85,
      content:
        "청소, 정리 정돈하지 않아도 깔끔해보이는 주방 인테리어! 베이지톤으로 주방가구, 소품, 가전 제품들을 통일시켜 주방을 꾸며보았어요. 이렇게 색감을 맞추니 크게 청소, 정리 정돈을 하지 않아도 항상 깔끔해보이는 로망 담긴 주방이 된 것 같아요.",
    },
  ];

  const homeData2 = [...HomePostingData, ...HomePostingData, ...HomePostingData]

  

  try {
    for (const homeOne of homeData2) {
      const home = await prisma.homeData.create({
        data: {
          username: homeOne.username,
          images: homeOne.Image,
          like: homeOne.like,
          bookmark: homeOne.bookmark,
          shared: homeOne.shared,
          content: homeOne.content,
        },
      });
      console.log("Inserted", home);
    }
  } catch (error) {
    console.error("Error", error);
  } finally {
    await prisma.$disconnect();
  }
}

insertHome();
