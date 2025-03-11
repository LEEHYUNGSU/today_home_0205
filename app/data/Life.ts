import { StaticImageData } from "next/image";
import Img1 from "@/public/lifeIcon/Img1.png"
import Img2 from "@/public/lifeIcon/Img2.png"
import Img3 from "@/public/lifeIcon/Img3.png"
import Img4 from "@/public/lifeIcon/Img4.png"
import Img5 from "@/public/lifeIcon/Img5.png"
import Img6 from "@/public/lifeIcon/Img6.png"
import Img7 from "@/public/lifeIcon/Img7.png"
import Img8 from "@/public/lifeIcon/Img8.png"
import Img9 from "@/public/lifeIcon/Img9.png"
import Img10 from "@/public/lifeIcon/Img10.png"

interface LifeMenuType{
  title: string;
  ImageSrc: StaticImageData;
}

export const LifeMenuArr: LifeMenuType[] = [
  {
    title: "주거시공",
    ImageSrc: Img1
  },
  {
    title: "부분시공",
    ImageSrc: Img2,
  },
  {
    title: "질문/답변",
    ImageSrc: Img3,
  },
  {
    title: "자재랭킹",
    ImageSrc: Img4,
  },
  {
    title: "계약서진단",
    ImageSrc: Img5,
  },
  {
    title: "견적계산기",
    ImageSrc: Img6
  },
  {
    title: "이사",
    ImageSrc: Img7
  },
  {
    title: "입주청소",
    ImageSrc: Img8,
  },
  {
    title: "제품설치",
    ImageSrc: Img9
  },
  {
    title: "전체서비스",
    ImageSrc: Img10,
  }
]
