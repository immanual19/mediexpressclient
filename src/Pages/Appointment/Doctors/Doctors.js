import React from 'react';
import { useState } from 'react';
import avatar1 from '../../../assets/images/avatar1.jpeg';
const Doctors = ({doctor, setBooking}) => {
  console.log(doctor);
  let sum=0;
  doctor.ratingInfo.map(singleRating=>{
    
    sum=sum+singleRating.rating;
    
  });
    const {schedules}=doctor;
    return (
        <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={doctor.image} alt="doctor" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name: {doctor.name}</h2>
          <p>Qualification: {doctor.qualification}</p>
          <p>Designation: {doctor.designation}</p>
          <p>Speciality: {doctor.speciality}</p>
          <p>Workplace: {doctor.workplace}</p>
          <p>Fees: {doctor.fees}</p>
          <p>Rating: {sum/doctor.ratingInfo.length}/5</p>
          <div class="card-actions">
            <label for="booking-modal"disabled={schedules.length===0} 
            onClick={()=>setBooking(doctor)}
            class="btn btn-primary">Book Appointment</label>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Doctors;