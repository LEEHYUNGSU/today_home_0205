"use client";

import React, { useState } from "react";
import Footer from "../components/home/Footer";
import ShowHeader from "./ShowHeader";
import ShowContainer from "./ShowContainer";

const ShowPage = () => {
  const [pageNumber, setPageNumber] = useState(0);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[430px] h-[932px] mx-auto border shadow-lg relative bg-white overflow-x-hidden">
        <ShowHeader setPageNumber={setPageNumber} pageNumber={pageNumber} />
        <ShowContainer pageNumber={pageNumber} />
        <Footer />
      </div>
    </div>
  );
};

export default ShowPage;
