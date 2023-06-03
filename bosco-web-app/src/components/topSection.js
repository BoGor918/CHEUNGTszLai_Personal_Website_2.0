import React from 'react'
import icon from '../images/Personal_Icon.png'

export default function topSection() {
    return (
        <div className='text-white mt-[5rem]'>
            {/* top text section */}
            <div className='flex flex-col justify-center items-center'>
                <span className="my-[0.3rem]">Greetings, I’m</span>
                <span className='my-[0.3rem] font-semibold text-4xl'>Bosco CHEUNG Tsz Lai</span>
                <span className='my-[0.3rem]'>Project Developer</span>
            </div>
            {/* button section */}
            <div className='flex justify-center items-center my-[2rem]'>
                <button className='mx-[1rem] border-[2px] border-[#38BCF9] rounded-lg px-[2rem] py-[1rem] text-[#38BCF9]'>Download CV</button>
                <button className='mx-[1rem] border-[2px] border-[#38BCF9] rounded-lg px-[2rem] py-[1rem] text-[#0F172A] bg-[#38BCF9]'>Who am I</button>
            </div>
            {/* Icon */}
            <div className='flex justify-center items-center my-[5rem]'>
                <img src={icon} alt="Personal Icon" width={260} />
            </div>
        </div>
    )
}
