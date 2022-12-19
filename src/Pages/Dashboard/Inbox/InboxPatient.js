import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PatientBookingInfo from './PatientBookingInfo';
const InboxPatient = ({userInfo}) => {

    console.log(userInfo);
    const [bookingData,setBookingData]=useState([]);
    const [user, loading,error]=useAuthState(auth);
    useEffect(()=>{
        fetch('https://mediexpressserver.onrender.com/myappointmentlist',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({id:userInfo._id})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("unpaid bookign",data);
            setBookingData(data);
        })
    },[userInfo._id])

    return (
        <div className='mt-10 w-1/2 mx-auto text-center'>
            <h1>Hi {user.displayName}, here is your list of all appointments</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
          {
            bookingData.map(booking=><PatientBookingInfo
                key={booking._id}
                booking={booking}
                >
                
                </PatientBookingInfo>)
          }
          </div>  
        </div>
    );
};

export default InboxPatient;