import React from 'react';
import avatar1 from '../../../assets/images/avatar1.jpeg';
const Doctors = ({doctor, setBooking}) => {
    const {name,slots}=doctor;
    return (
        <div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={avatar1} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{slots.length} {slots.length>1?'slots':'slot'} available</p>
          <div class="card-actions">
            <label for="booking-modal"disabled={slots.length==0} 
            onClick={()=>setBooking(doctor)}
            class="btn btn-primary">Book Appointment</label>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Doctors;