"use client";
import { useEffect } from 'react';
import Channel from './Channel'
import ShowHome from './ShowHome';
import HomePicture from './HomePicture';

interface SHCProps{
  pageNumber: number;
}

const ShowContainer = ({pageNumber}:SHCProps) => {
  return (
    <div className="h-[92vh] pt-[12vh] overflow-y-auto overflow-x-hidden w-full">
      <div className="h-auto w-full flex flex-col">
        {pageNumber === 0 ? <Channel /> : null}
        {pageNumber === 1 ? <ShowHome /> : null}
        {pageNumber === 2 ? <HomePicture /> : null}
      </div>
    </div>

  )
}

export default ShowContainer