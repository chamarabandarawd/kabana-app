import React, { useContext } from 'react'
import { UserContext } from '../components/UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';

const AccountPage = () => {

    const {user,ready}=useContext(UserContext);
    
    let {subpage}=useParams();
    if(subpage===undefined){
        subpage='profile';
    }

    if(ready && !user){
        return <Navigate to={'/login'}/>
    }

    if(!ready){
        return <h1>Loading...</h1>
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
            <div className='text-center max-w-lg mx-auto mt-5'>
                Logged in as <span className='text-blue-500'>  {user.name} ({user.email}) </span> <br/>
                <button className='primary max-w-sm mt-2'> Logout </button>
            </div>
        )}
        
    </div>
  )
}

export default AccountPage