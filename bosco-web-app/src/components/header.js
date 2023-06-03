import React from 'react'
import moonIcon from '../images/moonIcon.png'

export default function Header() {
  return (
    <div className='text-[#38BCF9]'>
      <div className='flex justify-between items-center py-[2rem] px-[10rem]'>
        <span className='text-2xl font-semibold'>Bosco</span>
        <div><img src={moonIcon} alt="Mode Icon" width={25} /></div>
      </div>
    </div>
  )
}
