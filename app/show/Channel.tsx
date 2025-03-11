import Challenge from "./Challenge";
import Hot from "./Hot";


const Channel = () => {
  return (
    <div className='h-auto flex flex-col w-full items-center'>
      <div className='h-auto w-full mt-2 flex flex-col space-y-4'>
        <div className='w-full text-[18px] h-auto pl-3 pr-3 flex justify-between tracking-tighter items-center'>
          <div className='font-bold'>
            챌린지 채널
          </div>
          <div className='text-gray-400 text-[16px]'>
            전체 보기
          </div>
        </div>

        <Challenge />
        <Hot />
      </div>
    </div>
  )
}

export default Channel