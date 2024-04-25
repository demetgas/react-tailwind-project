import React from 'react'
import { faCat,faPaw,faFishFins,faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const WhatWeDo = () => {
  return (
    <div className='max-w-[100%] h-[40svh] mt-20'>
      <div className='grid grid-cols-4 '>
        <div className='mx-auto border-2 p-5'>
        <FontAwesomeIcon
            className=" hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faCat}
          />
          <h2>A Lovely Buddy</h2>
        </div>
        <div className='mx-auto border-2 p-5'>
        <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faPaw}
          />
          <h2>A Lovely Place</h2>

        </div>
        <div className='mx-auto border-2 p-5'> 
        <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faFishFins}
          />
          <h2>A Lovely Meal</h2>

        </div>
        <div className='mx-auto border-2 p-5'>
        <FontAwesomeIcon
            className="mx-3 my-1 hover:text-babyblue2 delay-75 cursor-pointer"
            icon={faHeart}
          />
          <h2>A Lovely Day</h2>

        </div>
      </div>
    </div>
  )
}

