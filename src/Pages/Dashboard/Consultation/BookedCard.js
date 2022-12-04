import { format } from 'date-fns';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const BookedCard = ({booking}) => {
    const [user, loading,error]=useAuthState(auth);
    const [activeLink,setActiveLink]=useState(false);
    const [link,setLink]=useState('');
    const sendLink=(id)=>{
        const link=`http://localhost:3000/room/${id}`;
        setLink(link);
        console.log(link);

        fetch('http://localhost:8080/sendlink',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({patientId:booking.patientId,url:link,activation:activeLink,date:format(new Date(),'PP'),reason:booking.reason,doctorName:user.displayName})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                
                toast('You have successfully send the link');
            }
            else{
                toast.error('You have already send a link to this patient');
            }
        })

        
    }

    const handleJoining=()=>{
        window.open(link);
    }

    return (
        <div class="card max-w-fit bg-neutral text-neutral-content m-5" style={{'border':'1px solid red'}}>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Patient Name: {booking.patientName}</h2>
    <p>Age: {booking.age}</p>
    <p>Gender: {booking.gender}</p>
    <p>Reason: {booking.reason}</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary"
      onClick={()=>{
        setActiveLink(true)
      }}

      >Notify</button>

      {
        activeLink && <button class="btn btn-primary" 
        onClick={()=>{
          sendLink(booking.patientId);
       }}
        
        >Send</button>
      }

      
      
      <button class="btn btn-primary" onClick={handleJoining}>Join</button>
    </div>
  </div>
</div>
    );
};

export default BookedCard;