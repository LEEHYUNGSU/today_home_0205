import { Fragment } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { GoBell, GoBookmark } from "react-icons/go";
import { LuMenu } from "react-icons/lu";

const UserMenu: string[] = ["프로필", "쇼핑"];

const UserHeader = () => {
  return (
    <>
      <div className="fixed top-0 left-0 h-[6vh] flex bg-white w-full z-50">
        <div className="h-full w-full pl-4 pr-4 flex items-center justify-between">
          <div className="w-auto h-full flex items-center justify-center text-[21px] font-bold space-x-5">
            <span className="">프로필</span>
            <span className="text-gray-500">쇼핑</span>
          </div>

          <div className="flex items-center w-auto space-x-4">
            <span className="relative">
              <GoBell size={24} />
              <div className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-[12px]">
                1
              </div>
            </span>
            <GoBookmark size={24} />
            <FiShoppingCart size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHeader;
