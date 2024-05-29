import React from 'react'

export default function Banner() {
    return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
                {/* text */}
                <div className="md:w-1/2">
                    <h2 className='text-4xl md:text-5xl font-bold leading-snug md:leading-snug'>Dive into Delight of Delectable <span className='text-green'>Food</span></h2>
                </div>

                {/* image */}
                <div className="md:w-1/2">Right</div>
            </div>
        </div>
    )
}
