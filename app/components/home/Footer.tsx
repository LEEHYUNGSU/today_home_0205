"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect } from "react";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { CiStickyNote } from "react-icons/ci";
import { FaRegStickyNote, FaStickyNote } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { ImPowerCord } from "react-icons/im";
import { LuUserRound } from "react-icons/lu";
import { PiNoteBlankFill } from "react-icons/pi";

interface FooterMenuType {
  title: string;
  icon: IconType;
  icon2?: IconType;
  pathname: string;
}

const FooterMenuItem: FooterMenuType[] = [
  {
    title: "홈",
    icon: GoHome,
    icon2: GoHomeFill,
    pathname: "/"
  },
  {
    title: "둘러보기",
    icon: FaRegStickyNote,
    icon2: FaStickyNote,
    pathname: "/show"
  },
  {
    title: "쇼핑",
    icon: BsShop,
    pathname: "/shopping"
  },
  {
    title: "인테리어/생활",
    icon: FiMusic,
    pathname: "/life"
  },
  {
    title: "마이페이지",
    icon: LuUserRound,
    pathname: "/myPage",
  },
];

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-full bottom-0 h-[7vh] flex pl-1 pr-1 bg-white z-50 items-center absolute">
      {FooterMenuItem.map((data, idx) => (
        <Fragment key={idx}>
          <div
            className={`w-1/5 h-full justify-center items-center flex flex-col text-[12px] tracking-tighter pt-2 space-y-1 ${
              data.pathname === pathname ? "text-themeBlue" : ""
            }`
          }
          onClick={()=> router.push(data.pathname)}
          >
            {data.pathname === pathname && data.icon2 ? <data.icon2 size={28} /> : <data.icon size={28} />}

            <div>{data.title}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Footer;
