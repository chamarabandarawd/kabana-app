import React from 'react'

const BookingWidget = ({place}) => {
  return (
    <div className='bg-white p-4 rounded-xl '>
                    <div>
                        <span className='font-semibold'>Price</span> : {place.price} LKR / per night
                    </div>

                    <div className='border rounded-xl p-2 mt-4'>

                        <div className='grid md:grid-cols-2'>
                            <div className='border-r p-2'>
                                <label>Check In</label>
                                <input type='date' className='' /> <br />
                            </div>
                            <div className='p-2'>
                                <label>Check Out</label>
                                <input type='date' /> <br />
                            </div>
                        </div>
                        <div className='mt-2 border-t'>
                            <label>Max Guest</label>
                            <input type='number' value={1} className='border border-gray-200' />
                        </div>

                    </div>
                    <button className='primary mt-2'>Book this</button>
                </div>
  )
}

export default BookingWidget