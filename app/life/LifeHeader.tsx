import { Fragment } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { GoBell, GoBookmark } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const HomeRoutingMenu: string[] = ["쇼핑", "BinaryShop"];

const LifeHeader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-[6vh] flex bg-white w-full z-50">
        <div className="h-full w-full pl-4 pr-4 flex items-center justify-between">
          <div className="w-auto h-full flex items-center justify-center">
            <LuMenu size={28} />
          </div>

          <div className="flex  items-center rounded-lg w-auto pl-2 bg-gray-200 pt-2 pb-2">
            <FiSearch className="mr-2" />
            <input
              type="text"
              placeholder="오늘의집 통합검색"
              className="flex items-center text-[14px] bg-inherit focus:outline-none"
            />
          </div>

          <div className="flex items-center w-auto space-x-4">
            <GoBell size={24} />
            <GoBookmark size={24} />
            <FiShoppingCart size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LifeHeader;
