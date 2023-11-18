import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Perks from '../components/Perks';
import axios from 'axios';

const PlacesPage = () => {
    const { action } = useParams()

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [photos, setPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState([]);
    const [desc, setDesc] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(0);
    const [redirect,setRedirect]=useState("");

    const uploadPhoto = async (e) => {

        const file = e.target.files[0];
        const formdata = new FormData();
        formdata.append('photo', file);

        const config = {
            headers: {
                'content-type': file.type,
            },
        };

        const key = `image-kabana/${Date.now()}-${file.name}`
        const content_Type = file.type
        try {
            const res = await axios.post('/signed_url', { key, content_Type })
            const { putImageUrl, getImageUrl } = res.data;
            console.log("putImageUrl- ", putImageUrl, "getImageUrl -", getImageUrl)

            const reader = new FileReader();
            reader.onloadend = async () => {
                const binaryData = reader.result;
                const resFromS3 = await axios.put(putImageUrl, binaryData, config);
                console.log(resFromS3)

                setPhotos((pre)=>[...pre,getImageUrl])
            }

            reader.readAsArrayBuffer(file);

        } catch (error) {
            console.error("Error occurred:", error);
        }

    }

    const addNewPlace = async (e)=>{
        e.preventDefault();
        const{data}= await axios.post('/places',{
            title,address,photos,
            desc,perks,extraInfo,
            checkIn,checkOut,guests
        });
        alert(data)

    }

    return (
        <div className=' mt-10 '>

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
                <div className='flex justify-center'>

                    <div className='max-w-4xl  border border-green-300 p-4 rounded-xl'>
                        <form onSubmit={addNewPlace}>
                            <h3 className='mt-2 text-2xl '>Title</h3>
                            <p className='text-gray-500 text-sm'>Title for your place</p>
                            <input
                                type='text'
                                placeholder='My title'
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />

                            <h3 className='mt-2 text-2xl '>Address</h3>
                            <p className='text-gray-500 text-sm'>Address for your place</p>
                            <input
                                type='text'
                                placeholder='address'
                                value={address}
                                onChange={e => setAddress(e.target.value)}
                            />

                            <h3 className='mt-2 text-2xl '>Photos</h3>
                            <p className='text-gray-500 text-sm'>More photos are better</p>
                            {/* <div className='flex gap-2'>
                                <input
                                    type='text'
                                    placeholder='Add photos using link'
                                    value={photoLink}
                                    onChange={e => setPhotoLink(e.target.value)}
                                />
                                <button className='primary flex-1 px-4' >Add&nbsp;photo</button>
                            </div> */}
                            <div className='mt-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>

                                {photos.length > 0 && photos.map((path, index) => (
                                    <div key={index} className='bg-transparent h-32 '>
                                        <img src={path} 
                                        alt='uploade-hotos'
                                        className=' rounded -4xl w-full h-full object-cover '
                                        />
                                    </div>
                                ))}
                                <label className='h-32 flex gap-2 bg-transparent border p-8 rounded-xl  border-green-300 cursor-pointer'>
                                    <input type='file' className='hidden' onChange={uploadPhoto} />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                    </svg>
                                    Upload
                                </label>
                            </div>
                            <h3 className='mt-2 text-2xl '>Description</h3>
                            <p className='text-gray-500 text-sm'>Description of the place</p>
                            <textarea
                                value={desc}
                                onChange={e => setDesc(e.target.value)}
                            />
                            <h3 className='mt-2 text-2xl '>Perks</h3>
                            <p className='text-gray-500 text-sm'>Select all the perks of your place</p>
                            <div className='grid md:grid-cols-3 gap-2 mt-3'>
                                <Perks perks={perks} setPerks={setPerks} />
                            </div>

                            <h3 className='mt-2 text-2xl '>Extra info.</h3>
                            <p className='text-gray-500 text-sm'>house rule.,etc</p>
                            <textarea
                                value={extraInfo}
                                onChange={e => setExtraInfo(e.target.value)}
                            />

                            <h3 className='mt-2 text-2xl '>Check in & out times</h3>
                            <p className='text-gray-500 text-sm'>add check-in and check-out times, additionly we required number of guests</p>
                            <div className='grid md:grid-cols-3 gap-2 mt-3'>
                                <div>
                                    <span>Check-in</span>
                                    <input
                                        type='time'
                                        className='cursor-pointer'
                                        value={checkIn}
                                        onChange={e => setCheckIn(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Check-Out</span>
                                    <input
                                        type='time'
                                        className='cursor-pointer'
                                        value={checkOut}
                                        onChange={e => setCheckOut(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <span>Max number of Guests</span>
                                    <input
                                        type='number'
                                        value={guests}
                                        onChange={e => setGuests(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button className='primary mt-4'>Save</button>
                        </form>
                    </div>
                </div>
            )}




        </div>
    )
}

export default PlacesPage