import React from "react";
import { IconType } from "react-icons";
import { FaRegUser } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";
import { PiImageSquareFill } from "react-icons/pi";

interface ContentTabInfoType {
  title: string;
  subTitle: string;
  info: string;
  icon: IconType;
  icon2?: IconType;
  state?: boolean;
}

const ContentTabInfoArr: ContentTabInfoType[] = [
  {
    title: "첫 사진 올리고 나만의 멋진 콘텐츠를 공유해주세요",
    subTitle: "사진 1장 올리면 1,000P를 드려요",
    info: "지금 올리기",
    icon: PiImageSquareFill,
    state: true,
  },
  {
    title: "자기소개를 완성하고 취향을 이야기해보세요",
    subTitle: "더 많은 사람들이 방문할거에요",
    info: "입력하기",
    icon: IoChatbubbleOutline,
    state: true,
  },
  {
    title: "프로필 사진으로 나만의 취향을 보여주세요",
    subTitle: "더 많은 팔로워를 모을 수 있어요",
    info: "설정하기",
    icon: FaRegUser,
    icon2: IoIosCheckmarkCircle,
    state: false,
  },
];

const ContentTab = () => {
  return (
    <div className="mt-5 flex-1 flex flex-col pl-4">
      <div className="w-full h-auto text-[13px]">프로필 완성하기 2개 남음</div>

      <div className="w-auto mt-3 h-[22vh] flex overflow-x-auto space-x-3 pb-5 no-scrollbar">
        {ContentTabInfoArr.map((Data, idx) => (
          <div className="w-[80vw] h-full shrink-0 bg-slate-50 rounded-lg flex flex-col pl-4 pt-2 pb-5 pr-4 border text-[14px]" key={idx}>
            <div className="h-[50%] w-full flex items-center space-x-2">
              <div className="w-[55px] h-[55px] border bg-white rounded-full relative flex items-center justify-center">
                <Data.icon size={20} />
                {Data.icon2 ? <Data.icon2 className="absolute z-10 bottom-0 -right-1" size={20} /> : null}
              </div>
              <div className="flex-1 h-full flex flex-col justify-center">
                <span className="text-[14px] tracking-wider font-bold">
                  {Data.title}
                </span>
                <span className="text-gray-500">
                  {Data.subTitle}
                </span>
              </div>
            </div>

            <div className={`flex-1 mt-10 flex items-center rounded-sm justify-center border font-bold ${!Data.state ? "bg-gray-300 text-gray-400" : "bg-white"}`}>
              {Data.info}
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default ContentTab;
