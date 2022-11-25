import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../../assets/images/chair.png';
const AppointmentBanner = ({date,setDate,setSpecialist,setFilter}) => {
  const update=()=>{
    let select=document.getElementById('speciality');
        let option=select.options[select.selectedIndex];		
        let key=option.value;
        setSpecialist(key);
        setFilter(true);
    
}
    return (
        <div className='py-5'>
        <div className='w-1/3 mx-auto my-5'>
        <h1 className='text-white text-xl font-bold'>Getting an appointment is easier than you think</h1>
        </div>
        <div className='grid justify-items-center'>
        <div>

        
<label for="date-modal" class="btn">Pick a Date</label>


<input type="checkbox" id="date-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
  <DayPicker
  mode="single"
  selected={date}
  onSelect={setDate}
/>
<h1>You have picked : {format(date,'PP')}</h1>
    <div class="modal-action">
      <label for="date-modal" class="btn">Confirm!</label>
    </div>
  </div>
</div>
        </div>
        <div className='mt-3'>
        <select id="speciality" onChange={update} className='btn w-56'>
        <option value="option">Select Specialist</option>
        <option value="General">General</option>
        <option value="Cardiologist">Cardiologist</option>
        <option value="Gastrologist">Gastrologist</option>
        <option value="Neurologist">Neurologist</option>
        <option value="Nephrologist">Nephrologist</option>
        </select>
        </div>
        </div>
        </div>
    );
};

export default AppointmentBanner;