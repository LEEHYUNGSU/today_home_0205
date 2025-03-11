import Image from "next/image";
import Header from "./components/home/Header";
import InnerContainer from "./components/home/InnerContainer";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[430px] h-[932px] mx-auto border shadow-lg relative bg-white overflow-x-hidden">
        <Header />
        <InnerContainer />
        <Footer />
      </div>
    </div>
  );
}
