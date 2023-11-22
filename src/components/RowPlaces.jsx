import React from 'react'
import { Link } from 'react-router-dom'

const RowPlaces = ({ place }) => {

  return (
    <Link 
    to={place._id}
    className='h-40 bg-gray-100 rounded-xl grid grid-cols-[1fr,3fr] p-3 gap-3 max-w-4xl '>
      <div className=" border rounded-xl object-cover">
        <img src={place.photos[0]} alt='image' className='rounded-xl object-cover overflow-hidden w-full h-full ' />
      </div>
      <div>
        <h2 className='text-xl font-bold'>{place.title}</h2>
        <p className='line-clamp-3 mt-2'>{place.desc}</p>
        <p className='text-gray-500 flex gap-2 mt-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>

          Price : {place.price} LKR/per night</p>
      </div>
    </Link>
  )
}

export default RowPlaces