import Image, { StaticImageData } from "next/image";
import { ImageExportArr } from "../data/Home";
import { Fragment } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface HotDataType {
  title: string;
  ImgArr: StaticImageData[];
  subTitle?: string;
}

const HotDataArr: HotDataType[] = [
  {
    title: "#예쁜템최고야",
    ImgArr: [
      ImageExportArr[0],
      ImageExportArr[1],
      ImageExportArr[2],
      ImageExportArr[3],
    ],
  },
  {
    title: "#살림살이",
    ImgArr: [
      ImageExportArr[4],
      ImageExportArr[5],
      ImageExportArr[6],
      ImageExportArr[7],
    ],
  },
  {
    title: "#오늘의우리집",
    subTitle: "오늘의 우리 집엔 어떤 장면이 있나요?",
    ImgArr: [
      ImageExportArr[8],
      ImageExportArr[9],
      ImageExportArr[10],
      ImageExportArr[11],
    ],
  },
  {
    title: "#집에서제일바빠",
    ImgArr: [
      ImageExportArr[12],
      ImageExportArr[13],
      ImageExportArr[14],
      ImageExportArr[15],
    ],
  },
  {
    title: "#다이소추천템",
    subTitle: "지금 뜨는 다이소 추천템?! 여기에 다있소...",
    ImgArr: [
      ImageExportArr[16],
      ImageExportArr[17],
      ImageExportArr[0],
      ImageExportArr[1],
    ],
  },
  {
    title: "#집사일상",
    ImgArr: [
      ImageExportArr[2],
      ImageExportArr[3],
      ImageExportArr[4],
      ImageExportArr[5],
    ],
  },
  {
    title: "#이주의발견",
    ImgArr: [
      ImageExportArr[6],
      ImageExportArr[7],
      ImageExportArr[8],
      ImageExportArr[9],
    ],
  },
  {
    title: "#셀프인테리어달인",
    ImgArr: [
      ImageExportArr[10],
      ImageExportArr[11],
      ImageExportArr[12],
      ImageExportArr[13],
    ],
  },
];

const Hot = () => {
  return (
    <>
      <div className="h-auto text-[18px] mt-4 w-full flex pl-3 pr-3 items-center font-bold tracking-tighter">
        지금 뜨는 채널
      </div>

      {HotDataArr.map((data, idx) => (
        <Fragment key={idx}>
          <div className="h-auto text-[18px] flex flex-col space-y-3 pb-10">
            <div className="w-full flex h-auto justify-between pl-3 pr-3">
              <div className="flex flex-col justify-center">
                <div className="font-bold text-[17px]">{data.title}</div>
                {data.subTitle && (
                  <div className="text-[14px] text-gray-400">
                    {data.subTitle}
                  </div>
                )}
              </div>
              <div className="h-full flex items-center justify-center">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="w-full h-auto flex space-x-1 pl-3 pr-3">
              {data.ImgArr.map((data, idx) => (
                <Fragment key={idx}>
                  <div className="w-[100px] h-[125px] rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={data}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Hot;
