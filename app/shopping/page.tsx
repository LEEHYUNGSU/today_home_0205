"use client";

import Footer from "../components/home/Footer";
import ShopContainer from "./ShopContainer";
import ShoppingHeader from "./ShoppingHeader";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[430px] h-[932px] mx-auto border shadow-lg relative bg-white overflow-x-hidden">
        <ShoppingHeader />
        <ShopContainer />
        <Footer />
      </div>
    </div>
  );
};

export default page;
