import { StaticImageData } from "next/image";
import Img1 from "@/public/homeData/one/oneImage.jpg"
import Img2 from "@/public/homeData/one/twoImage.jpg"
import Img3 from "@/public/homeData/one/threeImage.jpg"
import Img4 from "@/public/homeData/one/fourImage.jpg"
import Img5 from "@/public/homeData/one/fiveImage.jpg"
import Img6 from "@/public/homeData/one/SixImage.jpg"
import Img2_1 from "@/public/homeData/two/one.jpg"
import Img2_2 from "@/public/homeData/two/two.jpg"
import Img2_3 from "@/public/homeData/two/three.jpg"
import Img3_1 from "@/public/homeData/three/one.jpg"
import Img3_2 from "@/public/homeData/three/two.jpg"
import Img3_3 from "@/public/homeData/three/three.jpg"
import Img4_1 from "@/public/homeData/four/one.jpg"
import Img4_2 from "@/public/homeData/four/two.jpg"
import Img4_3 from "@/public/homeData/four/three.jpg"
import Img5_1 from "@/public/homeData/five/one.jpg"
import Img5_2 from "@/public/homeData/five/two.jpg"
import Img5_3 from "@/public/homeData/five/three.jpg"

export const ImageExportArr = [Img1, Img2, Img3, Img4, Img5, Img6, Img2_1, Img2_2, Img2_3, Img3_1, Img3_2, Img3_3, Img4_1, Img4_2, Img4_3, Img5_1, Img5_2, Img5_3]; 

export interface HomeDataType{
  username: string;
  Image: string[];
  like: number;
  bookmark: number;
  content: string;
  shared: number;
}

interface Chat{
  user: string;
  userImg: StaticImageData;
  createdAt: Date;
  like: number;
  content: string;
}


export const HomePostingData: HomeDataType[] = [
  {
    username: "이예의집",
    Image: ["https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/oneImage.jpg", "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/twoImage.jpg", "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/threeImage.jpg", "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/fiveImage.jpg", "https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/one/SixImage.jpg"],
    like: 16,
    bookmark: 58,
    content: "깔끔하고 여유로운 주방을 유지하고 싶지만 음식할때마다 언제나 비좁고 복작복작한 주방. 우리집 주방의 숨은 공간을 알차게 이용하고 좁은 조리대를 1.5배 활용할 수 있는 살림템을 소개해드릴게요 :)",
    shared: 0,
  },
  {
    username: "김서울",
    Image: ["https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/two/one.jpg","https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/two/two.jpg","https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/two/three.jpg", ],
    like: 8,
    bookmark: 28,
    shared: 2,
    content: "구름 이불이라고 부르고 싶다. 침구교체 사진으로 시작해보는 화요일!",
  },
  {
    username: "min_home_1",
    Image: ["https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/one.jpg","https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/two.jpg","https://twosomeapp0201.s3.ap-northeast-2.amazonaws.com/todayHome/three/three.jpg",],
    like: 81,
    shared: 16,
    bookmark: 85,
    content: "청소, 정리 정돈하지 않아도 깔끔해보이는 주방 인테리어! 베이지톤으로 주방가구, 소품, 가전 제품들을 통일시켜 주방을 꾸며보았어요. 이렇게 색감을 맞추니 크게 청소, 정리 정돈을 하지 않아도 항상 깔끔해보이는 로망 담긴 주방이 된 것 같아요.",

  },
]


// {
//   username: "김서울",
//   userImg: Img2_1,
//   follow: true,
//   Image: [Img2_1, Img2_2, Img2_3],
//   like: 8,
//   chatNumber: 1,
//   bookmark: 28,
//   shared: 2,
//   content: "구름 이불이라고 부르고 싶다. 침구교체 사진으로 시작해보는 화요일!",
//   createdAt: new Date(2024,2,6),
//   chatArr: [{
//     user: "수혀니135",
//     userImg: Img2_1,
//     createdAt: new Date(2024,2,25),
//     like: 0,
//     content: "침대프레임 이거 어디꺼에요?? 링크부탁드려도될까요???"
//   }]
// },
// {
//   user: "min_home_1",
//   userTitle: "수납의 달인 1위 선정, 우수 크리에이터",
//   userImg: Img3_1,
//   follow: true,
//   Image: [Img3_1, Img3_2, Img3_3],
//   createdAt: new Date(2024, 0,22),
//   like: 81,
//   chatNumber: 26,
//   shared: 16,
//   bookmark: 85,
//   content: "청소, 정리 정돈하지 않아도 깔끔해보이는 주방 인테리어! 베이지톤으로 주방가구, 소품, 가전 제품들을 통일시켜 주방을 꾸며보았어요. 이렇게 색감을 맞추니 크게 청소, 정리 정돈을 하지 않아도 항상 깔끔해보이는 로망 담긴 주방이 된 것 같아요.",
//   chatArr: [
//     {
//       user: "소소한만두네",
//       userImg: Img3_1,
//       content: "톤온톤 색감 선택이 정말 센스있네요! 은은한 베이지 덕분에 편안함이 느껴져요! 깔끔함 유지하는 비법 공유 감사합니다.",
//       createdAt: new Date(2024, 0,22),
//       like: 1,
//     },
//     {
//       user: "soo_weet.home",
//       userImg: Img3_2,
//       content: "와아 정말 깔끔하고 밝아서 넘 예쁜 주방이네요",
//       createdAt: new Date(2024, 0,22),
//       like: 1,
//     },
//     {
//       user: "민스토랑",
//       userImg: Img3_3,
//       content: "깔끔하고 예뻐서 자꾸 들어가고 싶은 주방같아요~",
//       createdAt: new Date(2024, 0,23),
//       like: 1,
//     },
//   ]
// },
// {
//   user: "moment_keeper",
//   userImg: Img4_1,
//   userTitle: "완벽하지않은 있는 그대로 집순이",
//   Image: [Img4_1, Img4_2, Img4_3],
//   follow: false,
//   like: 2,
//   chatNumber: 6,
//   shared: 0,
//   bookmark: 0,
//   content: "#우리집고양이삼행시, #우리집주방, #스텐주전자, #스텐냄비, #우리집주방, #우리집, #우리집맘마존",
//   createdAt: new Date(2025, 2,5),
//   chatArr: [
//     {
//       user: "dodam_home",
//       userImg: Img4_1,
//       content: "정말 공감돼요. 추운 날에는 따뜻한 보리차에 만두만큼 좋은게 없죠! 저도 오늘은 집에서 뒹굴뒹굴하면서 맛있는 거나 먹어야겠어요. 편안한 하루 보내세요",
//       like: 1,
//       createdAt: new Date(2025, 2,5),
//     },
//     {
//       user: "소소한 만두네",
//       userImg: Img4_2,
//       content: "따뜻한 보리차에 만두라니, 완벽한 휴식이네요! 오늘 하루도 편안하게 보내세요!",
//       like: 1,
//       createdAt: new Date(2025, 2, 5),
//     }
//   ]
// },
// {
//   user: "맹맹이홈",
//   userImg: Img5_1,
//   userTitle: "더 많은 정보는 맹맹이홈으로 들러주세요",
//   follow: false,
//   Image: [Img5_1, Img5_2, Img5_3],
//   createdAt: new Date(2025, 1, 3),
//   like: 30,
//   chatNumber: 4,
//   shared: 2,
//   bookmark: 33,
//   content: "#주방정착템",
//   chatArr: [
//     {
//       user: "소소한 만두네",
//       userImg: Img5_1,
//       content: "음료 종류별로 꽉 채워 넣은 센스 최고네요! 보기만 해도 시원해지는 기분이네요",
//       createdAt: new Date(2025, 1, 1),
//       like: 1,
//     },
//     {
//       user: "쫌뮈뮈",
//       userImg: Img5_2,
//       content: "혹시 캔음료가 얼진않나요? 저도 같은 냉장고인데 캔음료가 살짝씩 어네요ㅠ",
//       createdAt: new Date(2025, 1, 1),
//       like: 1,
//     },
//   ]
// },
// {
//   user: "밀키홈",
//   userTitle: "모던에 감성 한 스푼 우윳빛깔 우리 집에 놀러오세요",
//   userImg: Img2_1,
//   Image: [Img2_1, Img2_2, Img2_3],
//   follow: false,
//   like: 5,
//   chatNumber: 3,
//   shared: 0,
//   bookmark: 5,
//   content: "새 거치대에 휴대폰 올리고 플레이리스트 듣기, 작은거치대로 재료 다듬을 때, 설거지 할 때, 레시피 볼 때,",
//   createdAt: new Date(2025,1,5),
//   chatArr: [
//     {
//       user: "이글이가사는집",
//       userImg: Img3_3,
//       content: "호옥시 맞팔도 하시나요! 쿄쿄, 예쁜집 스크랩 해뒀던거 쭉 보다가 다시 놀러왔어요~~ 여전히 예뿐집이네요",
//       like: 1,
//       createdAt: new Date(2025,1,5),
//     },
//     {
//       user: "소소한만두네",
//       userImg: Img4_1,
//       content: "센스있는 거치대네요! 요리할 때 레시피 보거나 음악 들을 때도 유용하겠어요",
//       like: 0,
//       createdAt: new Date(2025, 1, 5),
//     },
//   ]
// },
// {
//   user: "쯔녕e._enuuuu",
//   userImg: Img5_1,
//   userTitle: "리모델링 없이 꾸미는 홈 스타일링",
//   follow: true,
//   Image: [Img5_1, Img4_1, Img4_3],
//   like: 159,
//   chatNumber: 4,
//   shared: 21,
//   bookmark: 1203,
//   content: "아치형가벽 더해주니까 이쁨이 말모, 쉽고 이뿌게 공간분리완성",
//   createdAt: new Date(2023, 4, 8),
//   chatArr:  [{
//     user: "이글이가사는집",
//     userImg: Img3_3,
//     content: "호옥시 맞팔도 하시나요! 쿄쿄, 예쁜집 스크랩 해뒀던거 쭉 보다가 다시 놀러왔어요~~ 여전히 예뿐집이네요",
//     like: 1,
//     createdAt: new Date(2025,1,5),
//   },
//   {
//     user: "소소한만두네",
//     userImg: Img4_1,
//     content: "센스있는 거치대네요! 요리할 때 레시피 보거나 음악 들을 때도 유용하겠어요",
//     like: 0,
//     createdAt: new Date(2025, 1, 5),
//   },
// ]
// }