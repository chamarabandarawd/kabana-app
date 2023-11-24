import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import MainCard from '../components/MainCard';

const MainPage = () => {

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places")
      .then(res => setPlaces(res.data))
  }, [])

  return (
    <section className='mt-8 px-10'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6'>
        {places.length > 0 && places.map((place, index) => (

          <MainCard place={place} />
        ))}
      </div>
    </section>
  )
}

export default MainPage