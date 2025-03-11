import Image, { StaticImageData } from "next/image";
import React, { Fragment } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import { ImageExportArr } from "../data/Home";

interface AlignDataType {
  title: IconType | string;
}

interface ShowHomeListData{
  title: string;
  new: boolean;
  scrap: number;
  read: number;
  imgSrc: StaticImageData
  userImg: StaticImageData;
  user: string;
}

const ShowHomeListData: ShowHomeListData[] = [
  {
    title: "아파트에 다락방+테라스까지?! 로망 실현한 34평 탑층",
    new: true,
    scrap: 23,
    read: 1308,
    imgSrc: ImageExportArr[0],
    userImg: ImageExportArr[0],
    user: "닝홈",
  },
  {
    title: "무채색 모던과 우드, 서로의 취향이 조화롭게 어우러진 집",
    new: true,
    scrap: 15,
    read: 1161,
    imgSrc: ImageExportArr[1],
    userImg: ImageExportArr[1],
    user: "orangeee",
  },
  {
    title: "더욱 넓어보이는 이유? 내추럴 무드가 인상적인 30평대",
    new: true,
    scrap: 11,
    read: 758,
    imgSrc: ImageExportArr[2],
    userImg: ImageExportArr[2],
    user: "(주)톤앤무드",
  },
  {
    title: "방 꾸미기에 남들보다 몇 억배는 진심인 나의 기록",
    new: false,
    scrap: 41,
    read: 3090,
    imgSrc: ImageExportArr[3],
    userImg: ImageExportArr[3],
    user: "곽억배"
  },
  {
    title: "우드+실버+블랙으로, 공간마다 유니크하게 완성된 26명 스윗홈",
    new: false,
    scrap: 112,
    read: 2573,
    imgSrc: ImageExportArr[4],
    userImg: ImageExportArr[4],
    user: "별이별미",
  },
  {
    title: "냥이들도 나른나른~ 코지함 가득한 아이보리톤 신혼집!",
    new: false,
    scrap: 23,
    read: 1310,
    imgSrc: ImageExportArr[5],
    userImg: ImageExportArr[5],
    user: "디자인아토토"
  }
]

const ShowHomeHeaderData: (IconType | string)[] = [
  IoOptionsOutline,
  "정렬",
  "주거형태",
  "평수",
  "예산",
  "가족형태",
  "스타일",
  "컬러",
  "세부공사",
  "분야",
  "작업자",
];

const ShowHome = () => {
  return (
    <div className="h-auto flex flex-col w-full items-center">
      <div className="h-auto mt-2 pl-4 pr-4 w-full space-x-2 flex overflow-x-auto">
        {ShowHomeHeaderData.map((data, idx) => (
          <Fragment key={idx}>
            <span className="py-[6px] px-3 shrink-0 rounded-2xl flex items-center justify-center border space-x-1">
              {typeof data === "string" ? (
                <>
                <span>{data}</span>
                <span className="mt-1">
                  <IoIosArrowDown />
                </span>
                </>
              ) : (
                <span>
                  <IoOptionsOutline className="text-2xl" />
                </span>
              )}
            </span>
          </Fragment>
        ))}
      </div>

      {ShowHomeListData.map((data, idx) => (
        <Fragment key={idx}>
          <div className="flex pl-3 pr-3 h-auto w-full mt-5 flex-col">
            <div className="w-full h-[27vh] flex items-center rounded-md justify-center overflow-hidden">
              <Image src={data.imgSrc} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="h-auto flex w-full truncate">
              {data.new === true && <span className="text-red-500">NEW</span>}
              <span className="truncate">&nbsp;{data.title}</span>
            </div>
            <div className="h-auto flex space-x-3 text-[15px] w-full text-gray-400">
              <span>
                {data.scrap}명 스크랩
              </span>
              <span>
                {data.read.toLocaleString()}명 조회
              </span>
            </div>
            <div className="h-auto flex items-center w-full space-x-2">
              <div className="w-[20px] h-[20px] rounded-full overflow-hidden">
                <Image src={data.userImg} alt="" className="h-full aspect-square object-cover" />
              </div>
              <span className="text-[14px]">
                {data.user}
              </span>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default ShowHome;
