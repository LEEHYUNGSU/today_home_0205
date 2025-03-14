import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const UserPlus = () => {
  return (
    <div className="fixed bottom-[80px] z-[1000] right-[15px] w-11 h-11 rounded-full bg-themeBlue text-white flex items-center justify-center text-[24px] font-bold">
      <CiSquarePlus />
    </div>
  );
};

export default UserPlus;
