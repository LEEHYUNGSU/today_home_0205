import Img1 from "@/public/shopIcon/Img1.png"
import Img2 from "@/public/shopIcon/Img2.png"
import Img3 from "@/public/shopIcon/Img3.png"
import Img4 from "@/public/shopIcon/Img4.png"
import Img5 from "@/public/shopIcon/Img5.png"
import Img6 from "@/public/shopIcon/Img6.png"
import Img7 from "@/public/shopIcon/Img7.png"
import Img8 from "@/public/shopIcon/Img8.png"
import { StaticImageData } from "next/image"
import { IconType } from "react-icons"
import { IoMenuSharp } from "react-icons/io5"

interface TCDataType{
  title: string;
  ImageSrc: IconType | StaticImageData;
}

export const ShopMenuData: TCDataType[] = [
  {
    title: "카테고리",
    ImageSrc: IoMenuSharp,
  },
  {
    title: "가구",
    ImageSrc: Img1,
  },
  {
    title: "패브릭",
    ImageSrc: Img2,
  },
  {
    title: "가전/디지털",
    ImageSrc: Img3,
  },
  {
    title: "주방용품",
    ImageSrc: Img4,
  },
  {
    title: "식품",
    ImageSrc: Img5,
  },
  {
    title: "데코/식물",
    ImageSrc: Img6,
  },
  {
    title: "조명",
    ImageSrc: Img7,
  },
  {
    title: "수납/정리",
    ImageSrc: Img8,
  }
]