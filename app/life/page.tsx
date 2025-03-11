import React from "react";
import LifeHeader from "./LifeHeader";
import Footer from "../components/home/Footer";
import LifeContainer from "./LifeContainer";

const LifePage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[430px] h-[932px] mx-auto border shadow-lg relative bg-white overflow-x-hidden">
        <LifeHeader />
        <LifeContainer />
        <Footer />
      </div>
    </div>
  );
};

export default LifePage;
