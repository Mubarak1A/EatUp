import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

export default function Card({ item }) {
    const [isHeartFilled, setIsHeartFilled] = useState(false)

    const HandleHeartClick = () => {
        if(isHeartFilled == false){
            setIsHeartFilled(true)
        } else {
            setIsHeartFilled(false)
        }
    }

    return (

        <div className="card w-86 bg-base-100 shadow-xl mx-5 relative">
            <div className={'rating gap-1 absoluten flex justify-end'}>
                <input type="radio" name="rating-3" 
                className={` m-4 mask mask-heart bg-green ${isHeartFilled ? "bg-green" : "bg-secoundary"}`}
                onClick={HandleHeartClick} readOnly />
            </div>
            <Link to={item._id}>
                <figure>
                    <img src={item.image} alt="Shoes" className='hover:scale-105 transition-all duration-200 md:h-72' />
                </figure>
            </Link>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className='font-semibold '><span className='text-sm text-red'>#</span>{item.price}</h5>
                    <button className="btn bg-green text-white">Buy Now</button>
                </div>
            </div>
        </div>

    )
}
