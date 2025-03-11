import React from "react";
import { ImageExportArr } from "../data/Home";
import Image, { StaticImageData } from "next/image";

interface ChallengeType {
  title: string;
  subTitle: string;
  imgSrc: StaticImageData;
  point: number;
  date: string;
  people: number;
}

const ChallengeData: ChallengeType[] = [
  {
    title: "집꾸꿀조합",
    subTitle: "실패 없는 홈 스타일링 꿀 조합!",
    imgSrc: ImageExportArr[0],
    point: 1000,
    date: "D-5",
    people: 804,
  },
  {
    title: "오신기는오집에서",
    subTitle: "살림 히어로 오신기템을 영업해요.",
    imgSrc: ImageExportArr[1],
    point: 1000,
    date: "D-11",
    people: 142,
  },
  {
    title: "겨울의우리집",
    subTitle: "겨울의 가운데에서, 집의 한 장면을 담아요",
    imgSrc: ImageExportArr[2],
    point: 500,
    date: "D-11",
    people: 381,
  },
  {
    title: "우리집5문5답",
    subTitle: "내가 좋아하는 ㅇㅇ은? 다섯 가지 질문에 답해보세요",
    point: 5000,
    date: "D-18",
    people: 241,
    imgSrc: ImageExportArr[3],
  },
];

const Challenge = () => {
  return (
    <div className="w-full text-[16px] overflow-x-auto flex-1 flex pl-4 pr-4 space-x-3 h-auto">
      <div className="w-[90%] h-auto shrink-0 flex flex-col space-y-2 overflow-y-hidden">
        <div className="w-full h-[10vh] flex space-x-4">
          <div className="h-full aspect-square flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={ChallengeData[0].imgSrc}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 h-full space-y-1">
            <div className="font-bold">{ChallengeData[0].title}</div>
            <div className="text-[14px]">{ChallengeData[0].subTitle}</div>
            <div className="flex space-x-2 items-center text-[14px]">
              <span className="border px-1 rounded-lg">
                {ChallengeData[0].point}P
              </span>
              <span className="text-gray-400">
                {ChallengeData[0].people}명 참여
              </span>
              <span className="text-gray-400">{ChallengeData[0].date}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[10vh] flex space-x-4">
          <div className="h-full aspect-square flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={ChallengeData[1].imgSrc}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 h-full space-y-1">
            <div className="font-bold">{ChallengeData[1].title}</div>
            <div className="text-[14px]">{ChallengeData[1].subTitle}</div>
            <div className="flex space-x-2 items-center text-[14px]">
              <span className="border px-1 rounded-lg">
                {ChallengeData[1].point}P
              </span>
              <span className="text-gray-400">
                {ChallengeData[1].people}명 참여
              </span>
              <span className="text-gray-400">{ChallengeData[1].date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] h-auto shrink-0 flex flex-col space-y-2 overflow-y-hidden">
        <div className="w-full h-[10vh] flex space-x-4">
          <div className="h-full aspect-square flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={ChallengeData[2].imgSrc}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 h-full space-y-1">
            <div className="font-bold">{ChallengeData[2].title}</div>
            <div className="text-[14px]">{ChallengeData[2].subTitle}</div>
            <div className="flex space-x-2 items-center text-[14px]">
              <span className="border px-1 rounded-lg">
                {ChallengeData[2].point}P
              </span>
              <span className="text-gray-400">
                {ChallengeData[2].people}명 참여
              </span>
              <span className="text-gray-400">{ChallengeData[2].date}</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[10vh] flex space-x-4">
          <div className="h-full aspect-square flex items-center justify-center overflow-hidden rounded-lg">
            <Image
              src={ChallengeData[3].imgSrc}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 h-full space-y-1">
            <div className="font-bold">{ChallengeData[3].title}</div>
            <div className="text-[14px]">{ChallengeData[3].subTitle}</div>
            <div className="flex space-x-2 items-center text-[14px]">
              <span className="border px-1 rounded-lg">
                {ChallengeData[3].point}P
              </span>
              <span className="text-gray-400">
                {ChallengeData[3].people}명 참여
              </span>
              <span className="text-gray-400">{ChallengeData[3].date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
