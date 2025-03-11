import Image, { StaticImageData } from "next/image";
import React, { Fragment } from "react";
import { IconType } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import { ImageExportArr } from "../data/Home";
import { AiOutlineHeart } from "react-icons/ai";

const HomePictureHeaderData: (IconType | string)[] = [
  IoOptionsOutline,
  "정렬",
  "동영상",
  "주거형태",
  "공간",
  "평수",
  "스타일",
  "컬러",
  "셀프/전문",
  "인테리어 자재",
  "상품정보",
];

interface HomePictureData {
  title: string;
  ImgSrc: StaticImageData;
  like: number;
  user: string;
}

const HomePictureDataArr: HomePictureData[] = [
  {
    title: "종량제봉투 보관팁 쿨이너프스튜디오 멀티행거",
    ImgSrc: ImageExportArr[10],
    like: 912,
    user: "맹맹이홈",
  },
  {
    title: "생활이 편해지는 생활꿀템 바로 소개합니다",
    ImgSrc: ImageExportArr[11],
    like: 1123,
    user: "살림로그_살림백서",
  },
  {
    title: "#수납의달인 오늘은 주방 살림살이들 정보를 전해드립니다",
    ImgSrc: ImageExportArr[12],
    like: 462,
    user: "햇살의화양연화",
  },
  {
    title: "#오감리뷰 프로그램을 통해 제품을 제공받아 직접 사용하는",
    ImgSrc: ImageExportArr[13],
    like: 2,
    user: "hum_jeje",
  },
  {
    title: "주방엔 숨은 틈새 공간이 정말 많은데요~~~~",
    ImgSrc: ImageExportArr[14],
    like: 2403,
    user: "집구석구석꿀팁제공",
  },
  {
    title: "저상형 침대의 단점을 커버해 주는 높은 침대로 바꿨어요",
    ImgSrc: ImageExportArr[15],
    like: 192,
    user: "HANONI",
  },
  {
    title: "여러분에게 마음에 평안을 주는 공간은 어디인가요? 넓게 보면",
    ImgSrc: ImageExportArr[16],
    like: 21,
    user: "오스타일북",
  },
  {
    title: "영상에 나온 제품은 제 프로필에 링크를 통해 확인 가능합니다",
    ImgSrc: ImageExportArr[17],
    like: 397,
    user: "겸하우스",
  },
];

const HomePicture = () => {
  return (
    <div className="h-auto flex flex-col w-full items-center">
      <div className="h-auto mt-2 pl-4 pr-4 w-full space-x-2 flex overflow-x-auto mb-2">
        {HomePictureHeaderData.map((data, idx) => (
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

      <div className="w-full grid grid-cols-2 gap-2 pl-4 pr-4">
        {HomePictureDataArr.map((data, idx) => (
          <Fragment key={idx}>
            <div className="w-[45vw] h-auto flex flex-col mt-4">
              <div className="w-full h-[50vh] flex items-center justify-center overflow-hidden rounded-md">
                <Image
                  src={data.ImgSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-2 text-[15px]">
                <span>{data.title}</span>
              </div>
              <div className="flex justify-between items-center h-auto mt-2">
                <div className="flex space-x-2">
                  <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center overflow-hidden">
                    <Image src={data.ImgSrc} alt="" className="w-full object-cover aspect-square" />
                  </div>
                  <div className="truncate text-[13px]">{data.user}</div>
                </div>
                <div className="flex space-x-1 text-[13px]">
                  <AiOutlineHeart size={20} />
                  <span>{data.like.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomePicture;
