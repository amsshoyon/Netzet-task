import React from "react"

const Announcement = () => {
    return (
        <div className='bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] p-4.5 text-center text-base leading-tight font-extrabold lg:p-2 lg:text-[22px]'>
            <span className='text-[#00E7F9]'>
                <img src='/rocket.png' alt='icon' className='inline w-[18px] lg:w-auto' /> FRESH BEGINNINGS SALE:
            </span>{" "}
            <span className='text-sm lg:text-[22px]'>Extra 25% OFF, Limited Spots - start your journey today!</span>
        </div>
    )
}

export default Announcement
