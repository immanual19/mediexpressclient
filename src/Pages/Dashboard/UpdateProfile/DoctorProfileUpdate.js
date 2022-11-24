import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const DoctorProfileUpdate = ({userInfo}) => {
    let formattedDate=[];
    const [user, loading,error]=useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [days, setDays] = useState();
    const [showSelected,setShowSelected]=useState([]);
    const checking=()=>{
        
        let i=0;
        console.log('days are' ,days);
        days.map(day=>{
            formattedDate[i]=format(day,'PP');
            i=i+1;
        })
        formattedDate.sort();
        setShowSelected(formattedDate);
        console.log('Formatted Days are: ',formattedDate,typeof(formattedDate));
    }
    const onSubmit=async(data)=>{
        console.log("form is working");
    }
    return (
        <div className='mt-2 w-1/2 mx-auto text-center'>
        <h1 className='font-bold text-2xl text-primary mb-5'>Doctor {user.displayName}, just a few details remain.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-2'>
        <div class="form-control w-full max-w-xs mx-auto">
        <label class="label">
          <span class="label-text">Designation</span>
          
        </label>
        <input type="text" placeholder="Ex: Assistant Professor/Professor" class="input input-bordered w-full max-w-xs" />
        <label class="label">
          
        </label>
      </div>

      <div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Qualification</span>
    
  </label>
  <input type="text" placeholder="Ex: MBBS/BDS/FCPS" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    
  </label>
</div>
</div>
<div className='grid grid-cols-2 gap-2'>
<div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Current Workplace</span>
    
  </label>
  <input type="text" placeholder="Ex: Dhaka Medical College" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    
  </label>
</div>

<div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Consultation Fees (In Taka)</span>
    
  </label>
  <input type="number" placeholder="Ex: 300/700/800/1000/1500/2000" class="input input-bordered w-full max-w-xs" />
  <label class="label">
    
  </label>
</div>
</div>

<div className='grid grid-cols-2'>
<div>

<label for="selectDays" class="btn">Select your Available Days</label>


<input type="checkbox" id="selectDays" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <DayPicker
      mode="multiple"
      min={1}
      selected={days}
      onSelect={setDays}
      
    />
    <div class="modal-action">
      <label for="selectDays" class="btn" onClick={checking}>Confirm!</label>
    </div>
  </div>
</div>
</div>
<div>
You have selected 
{
    showSelected.map(date=>{
        return <p>{date}</p>
        
    })
}
</div>

</div>

<div className='grid grid-cols-2 my-5'>
<div>
<h1>Please select available time for those days in order (Start and End)</h1>
{
    showSelected.map(date=>{
        return <div className='grid grid-cols-2 gap-5 my-2'><input id={`start${date}`} type="time" placeholder={date} class="input input-bordered w-full max-w-xs" /> <input id={`end${date}`} type="time" placeholder={date} class="input input-bordered w-full max-w-xs" /></div>
        
    })
}
</div>

<div>
<p>Please select number of slots for the time (For example: 9:00 AM to 12:00 PM = 50 slots)</p>
{
    showSelected.map(date=>{
        return <div className='my-2'><input type="number" placeholder={date} class="input input-bordered w-full max-w-xs"/></div>
        
    })
}
</div>

</div>
<div className='my-5'>
<button class="btn btn-active btn-primary mx-2">Select a profile picture</button>
<input type="file" id="img" name="img" accept="image/*" class="input w-full max-w-xs" />
</div>

<input className='btn w-full max-w-xs' type="submit" value='Update'/>
</form>
</div>
    );
};

export default DoctorProfileUpdate;