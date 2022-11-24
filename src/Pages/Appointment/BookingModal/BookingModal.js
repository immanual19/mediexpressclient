import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { setDefaultOptions } from 'date-fns/esm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const BookingModal = ({date, booking, setBooking,userInfo}) => {
  const [user, loading,error]=useAuthState(auth);
  const { _id, name, slots } = booking;
  const formattedDate=format(date,'PP');
  const handleCancelling=()=>{
    setBooking(null);
  }
  const handleBooking=(event)=>{
    event.preventDefault();
    let selectSlot=document.getElementById('selectedSlot');
    let optionSlot=selectSlot.options[selectSlot.selectedIndex];		
    let slot=optionSlot.value;
    const booking={
      doctorId: _id,
      patientName: user.displayName,
      slot: slot,
      date: formattedDate,
      patientEmail:user.email,
      gender:userInfo.gender,
      age:userInfo.age,
      phone:event.target.phone.value,
      reason:event.target.reason.value
    }
    console.log("Booking info ",booking);
    fetch('http://localhost:8080/booking',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.success){
        toast(`Appointment is set, ${formattedDate} at ${slot}`);
      }
      else{
        toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
      }
      setBooking(null);
    })
    
  }
    return (
        <div>
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Taking appointment to {name}</h3>
            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" disabled value={format(date,'PP')} class="input input-bordered w-full max-w-xs" />
            <select id="selectedSlot" class="select select-bordered w-full max-w-xs">
            <option disabled selected>Select a time slot</option>
            {
              slots.map((slot,index)=><option key={index} value={slot}>{slot}</option>)
            }
            </select>
            <input type="text" name="name" disabled value={user?.displayName} placeholder="Your name" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="age" disabled value={userInfo?.age} class="input input-bordered w-full max-w-xs" />
            <input type="text" name="gender" disabled value={userInfo?.gender} placeholder="Your name" class="input input-bordered w-full max-w-xs" />
            <input type="text" name="email" disabled value={user?.email} class="input input-bordered w-full max-w-xs" />
            <input type="text" name="phone" disabled value={userInfo?.phone} class="input input-bordered w-full max-w-xs" />
            <input type="text" name="reason" placeholder="Type your reason here" class="input input-bordered w-full max-w-xs" />
            <div className='grid grid-cols-2 gap-2'>
            <input type="submit" value="Confirm" class="btn btn-secondary w-full max-w-xs" />
            <input type="submit" value="Cancel" class="btn base-300 w-full max-w-xs" onClick={handleCancelling}/>
            </div>
            
            </form>
          </div>
        </div>
        </div>
    );
};

export default BookingModal;