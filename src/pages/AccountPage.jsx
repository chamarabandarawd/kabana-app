import React, { useContext, useState } from 'react'
import { UserContext } from '../components/UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AccountPage = () => {

    const [redirect,setRedirect]=useState('');

    const {user,ready,setUser}=useContext(UserContext);
    
    let {subpage}=useParams();
    if(subpage===undefined){
        subpage='profile';
    }

    const handleLogout = async ()=>{
        await axios.post('/logout');
        setRedirect('/');
        setUser(null)
        
    }

    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }

    if(!ready){
        return <h1>Loading...</h1>
    }

    if(redirect){
        return <Navigate to={redirect}/>
    }


    const linkClasses=(type=null)=>{
        let classes= 'py-2 px-6'
        if(type===subpage ){
            classes ='py-2 px-6 bg-primary text-white rounded-2xl'
        }
        return classes;
    }

  return (
    <div>
        <nav className='w-full flex justify-center mt-8 gap-2'>
            <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
            <Link className={linkClasses('bookings')}to={'/account/bookings'}>My bookings</Link>
            <Link className={linkClasses('places')} to={'/account/places'}>My places</Link>
        </nav>

        {subpage==='profile' &&(
            <div className='text-center max-w-lg mx-auto mt-10'>
                Logged in as <span className='text-blue-500'>  {user.name} ({user.email}) </span> <br/>
                <button className='primary max-w-sm mt-2' onClick={handleLogout}> Logout </button>
            </div>
        )}
        
    </div>
  )
}

export default AccountPage