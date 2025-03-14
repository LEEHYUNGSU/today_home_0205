import { Fragment } from "react";
import { ImageExportArr } from "../data/Home";
import Image from "next/image";

const ScrapTab = () => {
  // 유저의 스크랩 정보를 추가하기 전까지는 임시 데이터 사용하기

  return (
    <div className="min-h-40 w-full flex flex-col pb-10">
      <div className="flex justify-end items-center h-10 pr-4 text-gray-500 text-[14px]">
        폴더보기 &gt;
      </div>

      <div className="grid grid-cols-3 gap-[2px] mt-0">
        {ImageExportArr.map((data, idx) => (
          <Fragment key={idx}>
            <div className="aspect-square w-full relative">
              <Image
                className="aspect-square w-full"
                alt="ScrapImage"
                src={data}
              />
              <div className="bg-black absolute opacity-90 z-50 flex items-center justify-center w-auto px-2 py-1 bottom-2 rounded-sm left-1.5 text-white text-[11px]">
                상품

                {/* 이 부분은 사용자의 스크랩 데이터의 "유형"에 따라 다르게 렌더링되어야 한다. */}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScrapTab;
