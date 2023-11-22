import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Perks from '../../components/Perks';
import axios from 'axios';
import AddPlaces from './AddPlaces';
import RowPlaces from '../../components/RowPlaces';
import UserAccountHeader from '../../components/UserAccountHeader';

const PlacesPage = () => {
    const { action } = useParams()
    const [places,setPlaces]= useState([])

    useEffect(() => {
        
        (async () => {
          try {
            const {data} = await axios.get('user-places')
            setPlaces(data)

          } catch (err) {
            console.log('Error occured when fetching books');
          }
        })();
      }, []);
    return (
        <div className=' mt-10 '>
            <UserAccountHeader/>

            {action !== 'new' && (

                <>
                    <div className='text-center flex justify-center mt-8'>

                        <Link
                            className='flex  bg-primary py-2 px-4 text-white rounded-2xl gap-2'
                            to={'/account/places/new'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Add new place</span>  </Link>
                    </div>

                    <div className=' flex flex-col gap-2 mt-4'>
                        {places.length>0 && places.map((place,index)=>(

                            <div key={index} className='flex justify-center'>
                                <RowPlaces  place={place}/>
                            </div>
                        ))}
                        
                    </div>
                </>
            )}

            {action === 'new' && (
                <AddPlaces />
            )}




        </div>
    )
}

export default PlacesPage