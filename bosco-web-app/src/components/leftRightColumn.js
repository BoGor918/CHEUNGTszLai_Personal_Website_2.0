import React from 'react'
import instragm from '../images/Instragm.png'
import github from '../images/Github.png'
import linkedin from '../images/Linked.png'


export default function leftRightColumn() {
    return (
        <div>
            <div className=''>
                <button className='bg-[#38BCF9]/20 p-[7px] rounded-md'>
                    <img src={instragm} alt="Personal Icon" width={30} />
                </button>
                <button className='bg-[#38BCF9]/20 p-[7px] rounded-md'>
                    <img src={github} alt="Personal Icon" width={30} />
                </button>
                <button className='bg-[#38BCF9]/20 p-[7px] rounded-md'>
                    <img src={linkedin} alt="Personal Icon" width={30} />
                </button>
            </div>
        </div>
    )
}
