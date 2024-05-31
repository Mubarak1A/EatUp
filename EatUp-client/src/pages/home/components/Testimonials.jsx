/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function Testimonials() {
    return (
        <div className='section-container'>
            <div className='flex fle-col md:flex-row items-center justify-between gap-12'>
                <div className='md:w-1/2'>
                    <img src="/images/home/testimonials/testimonials.png" alt="" />
                </div>
                <div className='md:w-1/2'>
                    <div className='text-left md:w-4.5/5'>
                        <p className='subtitle'>Testimonials</p>
                        <h2 className='title'>What Our Customers Say About Us</h2>
                        <blockquote className='my-5 text-secoundary leading-[30px]'>
                            "I had the pleasure of dinning at EAtUp last night, and I am still raving about the experience. The
                            attention to details in presentation and service was impeccable" 
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}
