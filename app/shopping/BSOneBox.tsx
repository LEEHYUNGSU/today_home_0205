import Image from "next/image";
import React, { Fragment } from "react";
import { BSListType } from "./BottomShop";
import { FaCarSide, FaStar } from "react-icons/fa";
import { BiSolidCoupon } from "react-icons/bi";

interface BSProps{
  data: BSListType
}

const BSOneBox = ({data}: BSProps) => {
  return (
    <>
      <Fragment>
        <div className="w-full aspect-square overflow-hidden rounded-md">
          <Image
            src={data.ImageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-[12px] text-gray-400">{data.user}</div>
        <div className="">{data.title}</div>
        {data.special ? (
          <span className="text-red-500 text-[14px]">특별인증가</span>
        ) : null}

        <div className="flex space-x-1 text-[16px] w-full">
          <span className="text-themeBlue">{data.sale}%</span>
          <span>{data.price.toLocaleString()}</span>
        </div>

        <div className="flex space-x-1">
          <span className="text-themeBlue text-[14px] flex items-center">
            <FaStar />
            <span className="ml-1">{data.star}</span>
          </span>
          <span className="text-[14px] text-gray-400">
            리뷰 {data.review.toLocaleString()}
          </span>
        </div>

        {data.today === true ? (
          <>
            <div className="flex space-x-1 text-purple-600 items-center">
              <span>
                <FaCarSide size={18} />
              </span>
              <span className="font-bold italic text-[14px]">오늘 출발</span>
            </div>
            <div className="text-blue-500 text-[14px]">
              평일 13:00까지 결제시
            </div>
          </>
        ) : null}

        {data.free === true ? (
          <>
            <div>
              <span className="bg-gray-200 text-black px-1 py-1 flex items-center justify-center w-[60px] text-[13px]  rounded-md">
                무료배송
              </span>
            </div>
          </>
        ) : null}

        {data.coupon && (
          <>
            <div>
              <span className="w-[120px] text-[12px] border p-1 flex items-center pl-2 rounded-lg font-bold">
                <span className="text-red-500">
                  <BiSolidCoupon />
                </span>
                <span className="ml-1">최대 {data.coupon}% 쿠폰</span>
              </span>
            </div>
          </>
        )}
      </Fragment>
    </>
  );
};

export default BSOneBox;
