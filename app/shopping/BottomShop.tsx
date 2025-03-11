import Image, { StaticImageData } from "next/image";
import React, { Fragment } from "react";
import { ImageExportArr } from "../data/Home";
import BSOneBox from "./BSOneBox";

const BSTitleArr: string[] = ["추천", "예쁜", "유용한", "귀여운", "오늘의딜"];

export interface BSListType {
  user: string;
  title: string;
  special: boolean;
  price: number;
  sale: number | null;
  free: boolean;
  coupon: number | null;
  review: number;
  star: number;
  today: boolean;
  ImageSrc: StaticImageData;
}

const BSListArr: BSListType[] = [
  {
    user: "헬로우슬립",
    title: "[10%쿠폰+사은품] 부드러운 카스테라 워싱 향균 옥수수 이불",
    special: true,
    sale: 37,
    price: 35900,
    free: false,
    coupon: 10,
    review: 45426,
    star: 4.8,
    today: true,
    ImageSrc: ImageExportArr[0],
  },
  {
    user: "우드레이",
    title: "1+1 가벽 인기조합! 스트라이프+타공판 인테리어 파티션",
    special: true,
    sale: 66,
    price: 98900,
    free: false,
    coupon: null,
    review: 2085,
    star: 4.6,
    today: false,
    ImageSrc: ImageExportArr[1],
  },
  {
    user: "우드레이",
    title: "공간분리 가벽 파티션 인테리어 스트라이프 파티션 4colors 4blacks",
    special: true,
    sale: 43,
    price: 49900,
    free: false,
    coupon: null,
    review: 13122,
    star: 4.6,
    today: false,
    ImageSrc: ImageExportArr[2],
  },
  {
    user: "오브제팜",
    title:
      "[사은품 증정]건조, 물빠짐은 당연, 모루유니무늬로 심플한 가구 디자인",
    special: true,
    sale: 30,
    price: 56000,
    free: true,
    coupon: 10,
    review: 805,
    star: 4.7,
    today: true,
    ImageSrc: ImageExportArr[3],
  },
  {
    user: "라라밤",
    title: "수저통 EVENT! 올스텐 자동 물빠짐 미니 식기건조대 1단 완전 세일중",
    special: true,
    sale: 21,
    price: 36900,
    free: false,
    coupon: 5,
    review: 790,
    star: 4.8,
    today: true,
    ImageSrc: ImageExportArr[4],
  },
  {
    user: "하우스쉴드",
    title: "기름튐 방지! 음식물튐 철벽방어! 투명 인덕션가드 4단",
    special: true,
    sale: 29,
    price: 69500,
    free: true,
    coupon: null,
    review: 749,
    star: 4.6,
    today: false,
    ImageSrc: ImageExportArr[5],
  },
  {
    user: "데오르카",
    title:
      "북유럽 워셔블 대형 먼지없는 장모 사계절 프리미엄 샤기 비단 줄무늬 식탁보",
    special: true,
    sale: 60,
    price: 19900,
    free: true,
    coupon: null,
    review: 518,
    star: 4.9,
    today: true,
    ImageSrc: ImageExportArr[6],
  },
  {
    user: "무타공마켓",
    title:
      "베이지무드 빨아쓰는 규조토 주방매트 주방 부엌 발매트 왕창 할인중입니다",
    special: true,
    sale: 59,
    price: 8900,
    free: false,
    coupon: 13,
    review: 2336,
    star: 4.7,
    today: true,
    ImageSrc: ImageExportArr[7],
  },
];

const BottomShop = () => {
  return (
    <>
      <div className="mt-3 space-x-4 flex items-center h-auto pl-4 pr-4 w-full">
        {BSTitleArr.map((data, idx) => (
          <Fragment key={idx}>
            <span
              className={`py-2 px-3  rounded-2xl flex items-center justify-center text-[15px] ${
                idx === 0 ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              {data}
            </span>
          </Fragment>
        ))}
      </div>

      <div className="mt-5 pl-4 pr-4 w-full flex justify-between items-center">
        <div className="font-bold text-[17px]">몰랐던 취향까지 발견하기</div>
        <span className="py-1 px-2 text-[12px] rounded-lg border border-gray-400">
          AD
        </span>
      </div>

      <div className="w-full pl-3 pr-3 grid grid-cols-2 h-auto gap-2">
        <div className="w-full mt-4 h-auto flex flex-col space-y-1">
          {BSListArr.slice(0, 4).map((data, idx) => (
            <BSOneBox key={idx} data={data} />
          ))}
        </div>

        <div className="w-full mt-4 h-auto flex flex-col space-y-1">
          {BSListArr.slice(4, 8).map((data, idx) => (
            <BSOneBox key={idx} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BottomShop;
