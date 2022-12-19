import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingInfoCard from './BookingInfoCard';

const ConsultationPatient = ({userInfo}) => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        fetch('https://mediexpressserver.onrender.com/joininfo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({patientId:userInfo._id,date:format(new Date(),'PP')})
        })
        .then(res=>res.json())
    .then(data=>{
        console.log("my data",data);
        setData(data);
        setLoading(true);
    })
    },[userInfo._id])
    

    return (
        <div className='mt-2 w-1/2 mx-auto text-center'>
        <h1>Your today's appointment.</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8'>
        {
            loading && data.map(singleData=><BookingInfoCard
                key={singleData._id}
               singleData={singleData}
                >
                
                </BookingInfoCard>)
          }
        </div>
        </div>
    );
};

export default ConsultationPatient;