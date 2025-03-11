import React from 'react'
import TopCarousel from './TopCarousel'
import BottomShop from './BottomShop'

const ShopContainer = () => {
  return (
    <div className="h-[92vh] pt-[12vh] overflow-y-auto overflow-x-hidden w-full">
      <div className="h-auto w-full flex flex-col">
        <TopCarousel />
        <BottomShop />
        <div className='h-[20vh] w-full'>
          
        </div>
      </div>
    </div>

  )
}

export default ShopContainer