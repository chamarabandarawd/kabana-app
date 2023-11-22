import React, { useContext, useState } from 'react'
import { UserContext } from '../components/UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import PlacesPage from './my-places/PlacesPage';
import MyBookings from './MyBookings';
import UserAccountHeader from '../components/UserAccountHeader';

const AccountPage = () => {

    const [redirect, setRedirect] = useState('');

    const { user, ready, setUser } = useContext(UserContext);

    let { subpage } = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    const handleLogout = async () => {
        await axios.post('/logout');
        setRedirect('/');
        setUser(null)

    }

    if (ready && !user && !redirect) {
        return <Navigate to={'/login'} />
    }

    if (!ready) {
        return <h1>Loading...</h1>
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }



    return (
        <div className='mt-8'>
           <UserAccountHeader/>

            {subpage === 'profile' && (
                <div className='text-center max-w-lg mx-auto mt-10'>
                    Logged in as <span className='text-blue-500'>  {user.name} ({user.email}) </span> <br />
                    <button className='primary max-w-sm mt-2' onClick={handleLogout}> Logout </button>
                </div>
            )}

            {subpage === 'places' && <PlacesPage />}
            {subpage === 'bookings' && <MyBookings />}


        </div>
    )
}

export default AccountPage