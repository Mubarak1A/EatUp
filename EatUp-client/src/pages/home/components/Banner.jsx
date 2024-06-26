import React from 'react'

export default function Banner() {
    return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%'>
            <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                {/* image */}
                <div className="md:w-1/2">
                    <img src="/images/home/banner.png" alt="" />
                    <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
                        <div className='flex space-y-8 bg-white py-2 px-3 rounded-2xl items-center gap-3 mb-1 shadow-md w-64'>
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl' />
                            <div>
                                <h5 className='font-medium md-1'>Spicy Noodles</h5>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                </div>
                                <p className='text-red'>N 1800.00</p>
                            </div>
                        </div>
                        <div className='sm:flex hidden space-y-8 bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'>
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl' />
                            <div>
                                <h5 className='font-medium md-1'>Spicy Noodles</h5>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  readOnly/>
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" readOnly />
                                </div>
                                <p className='text-red'>N 1800.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* text */}
                <div className="md:w-1/2 space-y-7 px-4">
                    <h2 className='text-4xl md:text-5xl font-bold leading-snug md:leading-snug'>Dive into Delight of Delectable <span className='text-green'>Food</span></h2>
                    <p className='text-xl text-[#4A4A4A]'>Where Each Plates Weaves A Story Of Culinary Mastery And Passionate Craftmanship</p>
                    <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                </div>
            </div>
        </div>
    )
}
