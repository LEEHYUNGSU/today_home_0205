import One from "@/public/homeHeader/one.png"
import Two from "@/public/homeHeader/two.png"
import Three from "@/public/homeHeader/three.png"
import Four from "@/public/homeHeader/four.png"
import Five from "@/public/homeHeader/five.png"
import Six from "@/public/homeHeader/six.png"
import Seven from "@/public/homeHeader/seven.png"
import Eight from "@/public/homeHeader/eight.png"
import Nine from "@/public/homeHeader/nine.png"
import Ten from "@/public/homeHeader/ten.png"
import Eleven from "@/public/homeHeader/eleven.png"
import Twelve from "@/public/homeHeader/twelve.png"
import Thirteen from "@/public/homeHeader/thirteen.png"
import Fourteen from "@/public/homeHeader/fourteen.png"
import Fifteen from "@/public/homeHeader/fiftteen.png"
import Sixteen from "@/public/homeHeader/threeteen.png"
import Seventeen from "@/public/homeHeader/seventeen.png"
import { StaticImageData } from "next/image"

interface HeaderMenuItem{
  title: string;
  icon: StaticImageData;
}

export const HeaderMenu: HeaderMenuItem[] = [
  {
    title: "오!세일",
    icon: One,
  },
  {
    title: "오늘의딜",
    icon: Two,
  },
  {
    title: "셀렉트샵",
    icon: Three,
  },
  {
    title: "집들이",
    icon: Four
  },
  {
    title: "행운출첵",
    icon: Five
  },
  {
    title: "가드닝게임",
    icon: Six,
  },
  {
    title: "챌린지참여",
    icon: Seven,
  },
  {
    title: "취향의발견",
    icon: Eight,
  },
  {
    title: "오마트",
    icon: Nine,
  },
  {
    title: "리모델링",
    icon: Ten
  },
  {
    title: "입주청소",
    icon: Eleven,
  },
  {
    title: "3D방꾸미기",
    icon: Twelve,
  },
  {
    title: "종합시공",
    icon: Thirteen,
  },
  {
    title: "부분시공",
    icon: Fourteen,
  },
  {
    title: "단독상품",
    icon: Fifteen,
  },
  {
    title: "빠른배송",
    icon: Sixteen,
  },
  {
    title: "오!쇼룸",
    icon: Seventeen,
  }
]