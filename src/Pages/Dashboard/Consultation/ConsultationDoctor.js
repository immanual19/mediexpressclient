import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import BookedCard from './BookedCard';

const ConsultationDoctor = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    const [bookings,setBookings]=useState([]);
    const [doMapping,setDoMapping]=useState(false);
    useEffect(()=>{
        fetch('http://localhost:8080/mybookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({id:userInfo._id,date:format(new Date(),'PP')})
        })
        .then(res=>res.json())
        .then(data=>{
            
                console.log(data);
                setBookings(data);
                setDoMapping(true);
            
        })
    },[userInfo._id,user.email])
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {
            doMapping && bookings.map(booking=><BookedCard
                key={booking._id}
                booking={booking}
                >
                
                </BookedCard>)
          }
        </div>
        </div>
       
    );
};

export default ConsultationDoctor;