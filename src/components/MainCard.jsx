import React from 'react'
import { Link } from 'react-router-dom'

const MainCard = ({ place }) => {
    return (
        <Link
        to={'places/'+place._id}
        >
            <img className='rounded-xl aspect-square object-cover' src={place.photos[0]} />
            <h1 className='font-bold truncate text-xl mt-1'>{place.title}</h1>
            <p>{place.address}</p>
            <p className='text-gray-500 flex gap-2  items-center text-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>

                <span>Price : {place.price} LKR per night</span> </p>
        </Link>
    )
}

export default MainCard