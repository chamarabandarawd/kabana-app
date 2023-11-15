import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PlacesPage = () => {
    const { action } = useParams()

    return (
        <div className=' mt-10'>

            {action !== 'new' && (

                <>
                    <div className='text-center flex justify-center '>

                        <Link
                            className='flex  bg-primary py-2 px-4 text-white rounded-2xl gap-2'
                            to={'/account/places/new'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Add new place</span>  </Link>
                    </div>

                    <div>PlacesPage</div>
                </>
            )}

            {action === 'new' && (
                <div>
                    <form>
                        <h3 className='mt-2 text-2xl '>Title</h3>
                        <p className='text-gray-500 text-sm'>Title for your place</p>
                        <input type='text' placeholder='My title' />
                        <h3 className='mt-2 text-2xl '>Address</h3>
                        <p className='text-gray-500 text-sm'>Address for your place</p>
                        <input type='text' placeholder='address' />
                        <h3 className='mt-2 text-2xl '>Photos</h3>
                        <p className='text-gray-500 text-sm'>More photos are better</p>
                        <div className='flex gap-2'>
                            <input type='text' className='' placeholder='Add photos using link' />
                            <button className='bg-gray-300  rounded-2xl px-4'>Add&nbsp;photo</button>
                        </div>
                        <div className='mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>

                            <button className='border bg-transparent rounded-xl p-8 text-2xl text-gray-600 flex gap-1' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                </svg>
                                Upload

                            </button>
                        </div>
                    </form>
                </div>
            )}




        </div>
    )
}

export default PlacesPage