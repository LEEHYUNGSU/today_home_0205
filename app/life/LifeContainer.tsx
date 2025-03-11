import Image from "next/image"
import { LifeMenuArr } from "../data/Life"
import { LuMapPin } from "react-icons/lu"
import { ImageExportArr } from "../data/Home"
import { FaStar } from "react-icons/fa"


const LifeContainer = () => {
  return (
    <div className="h-[92vh] pt-[6vh] overflow-y-auto overflow-x-hidden w-full">
      <div className="h-auto w-full flex flex-col">
        <div className='h-[20vh] w-full overflow-hidden grid grid-cols-5  pt-2 pb-2 mt-4'>
            {LifeMenuArr.map((data, idx) => (
              <div className="items-center flex flex-col " key={idx}>
                <div className="w-[65%] aspect-square bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image src={data.ImageSrc} alt="" className="w-[60%] aspect-square object-cover" />
                </div>
                <div className="text-[14px]">
                  {data.title}
                </div>
              </div>
            ))}
        </div>

        <div className="h-[1vh] w-full bg-gray-200" />

        <div className="h-[5vh] bo items-center mt-1 flex justify-between w-full pl-3 pr-3 text-[15px] border-b border-gray-200">
          <LuMapPin size={20} />
          <span className="">
            경기도 김포시 봉화로 164(북변동, 한터하이빌)
          </span>
          <span className="text-themeBlue font-bold">
            주소변경
          </span>
        </div>

        <div className="h-auto flex flex-col w-full mt-4">
          <div className="flex items-center pl-3 h-auto w-full font-bold text-[18px]">
            김포시 주변 추천 시공업체
          </div>

          <div className="w-full mt-4 overflow-x-auto space-x-5 pl-5 pr-5 flex h-[35vh]">
            <div className="shrink-0 w-[85vw] h-full overflow-hidden rounded-lg flex flex-col">
              <div className="w-full overflow-hidden h-[70%] relative">
                <Image src={ImageExportArr[1]} alt="" className="w-full h-full object-cover" />
                <div className="bottom-0 absolute w-full h-[15%] bg-themeNavy flex ic justify-center z-10 items-center text-white">
                  <span className="font-bold text-[15px]">오늘의집 스탠다드</span>
                  <span className="text-[13px] ml-2">투명하고 합리적인 시공 보장</span>
                </div>
              </div>
              <div className="h-[25%] pl-4 border border-gray-200 rounded-lg pt-3 pr-4 w-full flex flex-col">
                <div className="flex space-x-2 items-center">
                  <span className="text-[18px] font-bold">브라운박스</span>
                  <span className="text-green-500 font-bold text-[14px] pt-[2px]">책임보장</span>
                </div>
                <div className="flex space-x-1 items-center text-[14px] mt-1">
                  <span className="flex items-center space-x-1 text-themeBlue">
                    <FaStar />
                    <span>5.0</span>
                  </span>
                  <span>
                    계약자리뷰 <span className="font-bold">13</span>
                  </span>
                  <span>
                    최근계약 <span className="font-bold">10</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-[85vw] h-full overflow-hidden rounded-lg flex flex-col">
              <div className="w-full overflow-hidden h-[70%] relative">
                <Image src={ImageExportArr[10]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-[25%] pl-4 border border-gray-200 rounded-lg pt-3 pr-4 w-full flex flex-col">
                <div className="flex space-x-2 items-center">
                  <span className="text-[18px] font-bold">오르디자인</span>
                  <span className="text-green-500 font-bold text-[14px] pt-[2px]">책임보장</span>
                </div>
                <div className="flex space-x-1 items-center text-[14px] mt-1">
                  <span className="flex items-center space-x-1 text-themeBlue">
                    <FaStar />
                    <span>5.0</span>
                  </span>
                  <span>
                    계약자리뷰 <span className="font-bold">4</span>
                  </span>
                  <span>
                    최근계약 <span className="font-bold">1</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="shrink-0 w-[85vw] h-full overflow-hidden rounded-lg flex flex-col">
              <div className="w-full overflow-hidden h-[70%] relative">
                <Image src={ImageExportArr[14]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="h-[25%] pl-4 border border-gray-200 rounded-lg pt-3 pr-4 w-full flex flex-col">
                <div className="flex space-x-2 items-center">
                  <span className="text-[18px] font-bold">이제디자인</span>
                  <span className="text-green-500 font-bold text-[14px] pt-[2px]">책임보장</span>
                </div>
                <div className="flex space-x-1 items-center text-[14px] mt-1">
                  <span className="flex items-center space-x-1 text-themeBlue">
                    <FaStar />
                    <span>5.0</span>
                  </span>
                  <span>
                    계약자리뷰 <span className="font-bold">14</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1vh] w-full bg-gray-200" />

        <div className="h-auto flex flex-col w-full mt-4">
          <div className="w-full pl-3 pr-3 h-auto text-[18px] font-bold">
            최신 김포시 주변 리뷰
          </div>
          <div className="w-full pl-3 pr-3 mt-1 h-auto text-[15px]">
            설정된 주소지 반경 4km 내 리뷰를 보여드려요.
          </div>

          <div className="w-full mt-3 overflow-x-auto h-auto border-b pb-4">
            <div className="w-auto h-full flex space-x-4 pl-3 pr-3">

              <div className="shrink-0 w-[46vw] flex flex-col">
                <div className="w-[45vw] overflow-hidden aspect-square bg-red-200 rounded-lg">
                  <Image src={ImageExportArr[11]} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="mt-2 font-bold w-full">
                  30평대 - 경기도 김포시
                </div>
                <span className="mt-3 w-full text-justify tracking-tighter">
                  인테리어를 하기로 결정하고 오늘의 집 견적업체 매칭 첫번째 업체와 다른곳 비교없이
                </span>
                <span className="mt-2 text-gray-400 text-[14px]">
                  디자인마루
                </span>
              </div>

              <div className="shrink-0 w-[46vw] flex flex-col">
                <div className="w-[45vw] overflow-hidden aspect-square bg-red-200 rounded-lg">
                  <Image src={ImageExportArr[12]} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="mt-2 font-bold w-full">
                  20평대 - 아파트
                </div>
                <span className="mt-3 w-full text-justify tracking-tighter">
                  인테리어에 대해 잘 모르는 상태로 처음 방문하여 상담을 받았는데, 엄청 친절하게 받아주셨어요
                </span>
                <span className="mt-2 text-gray-400 text-[14px]">
                  데코인테리어
                </span>
              </div>
              <div className="shrink-0 w-[46vw] flex flex-col">
                <div className="w-[45vw] overflow-hidden aspect-square bg-red-200 rounded-lg">
                  <Image src={ImageExportArr[14]} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="mt-2 font-bold w-full">
                  30평대 - 아파트
                </div>
                <span className="mt-3 w-full text-justify tracking-tighter">
                  사장님과 두번 째 작업이었는데, 이번 역시 너무 너무 만족스러워 리뷰 남깁니다:-)
                </span>
                <span className="mt-2 text-gray-400 text-[14px]">
                  리드인테리어
                </span>
              </div>
              <div className="shrink-0 w-[46vw] flex flex-col">
                <div className="w-[45vw] overflow-hidden aspect-square bg-red-200 rounded-lg">
                  <Image src={ImageExportArr[15]} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="mt-2 font-bold w-full">
                  20평대 - 경기도 김포시
                </div>
                <span className="mt-3 w-full text-justify tracking-tighter">
                  시공 끝나고 한달 넘게 살고있으면서 만족도가 너무 높아서 후기 공유해봅니다. 주변에...
                </span>
                <span className="mt-2 text-gray-400 text-[14px]">
                  디자인바꿈
                </span>
              </div>
            </div>
          </div>

          <div className="h-[60vh] mt-3 flex flex-col w-full">
            <div className="h-auto pl-3 pr-3 text-[18px] w-full font-bold">
              아파트 종합시공 견적순위
            </div>
            <div className="mt-5 pl-3 pr-3 space-x-4 w-full h-auto flex items-center">
              <span className="px-3 py-[9px] rounded-2xl bg-black text-white">
                20평대
              </span>
              <span className="px-3 py-[9px] rounded-2xl border border-gray-300">
                30평대
              </span>
              <span className="px-3 py-[9px] rounded-2xl border border-gray-300">
                40평대
              </span>
            </div>

            <div className="h-[65%] mt-1 w-full space-x-7 flex items-center justify-center">
                <div className="w-[20%] justify-end h-full flex flex-col space-y-2 items-center">
                  <div className="font-bold">
                    4천만원대
                  </div>
                  <div className="w-full items-center bg-themeBlue flex flex-col text-white h-[60%] rounded-lg pt-2 text-[20px]">
                    29%
                  </div>
                </div>

                <div className="w-[20%] justify-end h-full flex flex-col space-y-2 items-center">
                  <div className="">
                    3천만원대
                  </div>
                  <div className="w-full items-center bg-gray-300 flex flex-col text-black h-[50%] rounded-lg pt-2 text-[20px]">
                    23%
                  </div>
                </div>

                <div className="w-[20%] justify-end h-full flex flex-col space-y-2 items-center">
                  <div className="">
                    5천만원대
                  </div>
                  <div className="w-full items-center bg-gray-300 flex flex-col text-black h-[40%] rounded-lg pt-2 text-[20px]">
                    18%
                  </div>
                </div>

            </div>

            <div className="h-auto w-full flex items-center justify-center text-[13px] mt-3 mb-2">
              <span>오늘의집 스탠다드의</span>
              <span className="font-bold">실제 시공 현장 393건</span>
            </div>

            <div className="mt-2 w-full h-auto flex items-center justify-center">
              <span className="font-bold flex items-center justify-center w-[90%] h-[5vh] border text-[16px]">
                20평대 견적 순위 자세히 보기 &gt;
              </span>
            </div>
          </div>

          <div className="h-[1vh] w-full bg-gray-200" />
        </div>


        <div className="h-[100px] w-full" />
      </div>
    </div>

  )
}

export default LifeContainer