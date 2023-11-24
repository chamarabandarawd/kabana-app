import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BookingWidget from '../components/BookingWidget';


const PlacePage = () => {

    const [place, setPlace] = useState(null)
    const [showAllPhotos, setShowAllPhotos] = useState(false)

    const { id } = useParams();

    useEffect(() => {

        if (!id) {
            return
        }
        axios.get("/places/" + id)
            .then(res => setPlace(res.data))
    }, [id])

    if (!place) {
        return (
            <div className="flex justify-center mt-12 bg-gray-100 px-10 " role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        )
    }
    console.log(place)

    if (showAllPhotos) {

        return (
            <div className='absolute inset-0 bg-black grow gap-2 '>
                <div >
                    <h1 className='text-white text-xl mt-4 mx-8 font-bold'>Photos of the {place.title}</h1>
                    <button
                    onClick={()=>setShowAllPhotos(false)}
                     className='bg-white flex gap-1 px-4 py-1 rounded-xl fixed right-10 top-15 mt-10 shadow-xl' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        Close photos
                    </button>
                </div>
                <div className='p-8 flex flex-col items-center gap-3 bg-black '>
                    {place?.photos?.length > 0 && place.photos.map(photo => (
                        <div>
                            <img src={photo} alt='photo' />
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (

        <div className='bg-gray-100 mt-8 px-10 -mx-10'>
            <div className='mx-10'>

                <h1 className='text-xl font-bold'>{place.title}</h1>
                <p className='flex items-center gap-1 text-gray-700 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>

                    <a className='underline mt-2' target='_blank' href={'https://maps.google.com/?q=' + place.address}>{place.address}</a></p>

                <div className="relative lg:mr-20 ">
                    <div className='grid gap-2 grid-cols-[2fr_1fr] mt-4 rounded-2xl overflow-hidden'>
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover h-full ' src={place.photos[0]} alt='place-image' />
                        </div>
                        <div className='grid '>
                            <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover ' src={place.photos[1]} alt='place-image' />
                            <div className=' overflow-hidden '>

                                <img onClick={() => setShowAllPhotos(true)} className='cursor-pointer aspect-square object-cover relative top-2 ' src={place.photos[2]} alt='place-image' />
                            </div>
                        </div>
                    </div>

                    <button onClick={() => setShowAllPhotos(true)}
                        className='flex gap-1  items-center absolute right-4 bottom-4 bg-white py-2 px-4 rounded-xl shadow-md shadow-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                        <span>
                            Show more Photos
                        </span>
                    </button>
                </div>
                <div className='mt-4 text-justify'>
                    <h1 className='font-semibold text-2xl '>Description</h1>
                    {place.desc}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr] mt-4  ">
                    <div>
                        <span className='font-semibold'>Check in</span> : {place.checkIn} <br />
                        <span className='font-semibold'>Check out</span> : {place.checkOut} <br />
                        <span className='font-semibold'>Max guest</span>  : {place.maxGuests} Person
                    </div>
                    <BookingWidget place={place} />
                </div>
                <div className='mt-4   '>
                    <span className='text-xl font-semibold '>More Info :</span>
                    <p className='text-justify'>{place.extraInfo}</p>
                </div>
            </div>


        </div>
    )
}

export default PlacePage