import Image, { StaticImageData } from "next/image";
import { ImageExportArr } from "../data/Home";
import { IconType } from "react-icons";
import { ShopMenuData } from "../data/Shop";
import { Fragment } from "react";

const TopCarousel = () => {
  return (
    <>
      <div className="w-full h-[22vh] overflow-hidden">
        <Image
          src={ImageExportArr[0]}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[8vh] bg-white flex items-center pl-5 pr-5 overflow-x-auto mt-4">
        <div className="w-auto h-full flex space-x-7">
          {ShopMenuData.map((Data, idx) => (
            <Fragment key={idx}>
              <div className="w-auto space-y-1 shrink-0 flex flex-col items-center">
                <div className="w-full h-auto flex items-center justify-center">
                  {typeof Data.ImageSrc === "object" ? <Image src={Data.ImageSrc} alt="" className="w-[40px] aspect-square object-cover" /> : <Data.ImageSrc size={40} /> }
                </div>
                <div className="text-[14px] font-bold">
                  {Data.title}
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
      <div className="w-full bg-slate-100 h-[1vh]" />
    </>
  );
};

export default TopCarousel;
