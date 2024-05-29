import React from 'react'

export default function Banner() {
    return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* text */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <h2 className='text-4xl md:text-5xl font-bold leading-snug md:leading-snug'>Dive into Delight of Delectable <span className='text-green'>Food</span></h2>
                    <p className='text-xl text-[#4A4A4A]'>Where Each Plates Weaves A Story Of Culinary Mastery And Passionate Craftmanship</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>

                {/* image */}
                <div className="md:w-1/2">
                    <img src="/images/home/banner.png" alt="" />
                </div>
            </div>
        </div>
    )
}
