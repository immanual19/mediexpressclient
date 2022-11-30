import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { toast } from 'react-toastify';
const DoctorProfileUpdate = ({userInfo}) => {
    let formattedDate=[];
    const [user, loading,error]=useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [days, setDays] = useState();
    const [showSelected,setShowSelected]=useState([]);
    const [submitButton,setSubmitButton]=useState(false);
    const [imageURL,setImageURL]=useState(null);
    const getDates=()=>{
        
        let i=0;
        
        days.map(day=>{
            formattedDate[i]=format(day,'PP');
            i=i+1;
        })
        formattedDate.sort();
        setShowSelected(formattedDate);
        
    }

    
    const onSubmit=async(data)=>{
      console.log("Form is ready to deploy.");
      let schedules=[];
      for(let i=0;i<showSelected.length;++i){
        let startTime=document.getElementById(`start${i}`).value;
        let endTime=document.getElementById(`end${i}`).value;
        let slots=document.getElementById(`slots${i}`).value;
        schedules.push({start:startTime,end:endTime,slots:slots,day:showSelected[i]});
      }
        userInfo.name=user.displayName;
        userInfo.image=imageURL;
        userInfo.designation=data.designation;
        userInfo.fees=data.fees;
        userInfo.qualification=data.qualification;
        userInfo.workplace=data.workplace;
        userInfo.availabledates=showSelected;
        userInfo.schedules=schedules;
        userInfo.speciality=data.speciality;
        console.log(userInfo);
        fetch('http://localhost:8080/updatedoctors',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.success){
            toast('Congratulations!!! You are all set.');
          }
          else{
            toast.error('Profile could not be updated. Please try later.');
          }
        })
        
    }

    const apikey='df37e18a03602906e48312132d91183f';

    const handleImageUpload=event=>{
      event.preventDefault();
      
      const imageData=new FormData();
      const image=event.target.files[0];
      imageData.append('image',image);
      const url=`https://api.imgbb.com/1/upload?key=${apikey}`;
      fetch(url,{
        method:'POST',
        body: imageData
      })
      .then(res=>res.json())
      .then(result=>{
        if(result.data.display_url){
          setImageURL(result.data.display_url);
          setSubmitButton(true);
        }
        
      })
    };


    return (
        <div className='mt-2 w-1/2 mx-auto text-center'>
        <h1 className='font-bold text-2xl text-primary mb-5'>Doctor {user.displayName}, just a few details remain.</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-2'>
        <div class="form-control w-full max-w-xs mx-auto">
        <label class="label">
          <span class="label-text">Designation</span>
          
        </label>
        <input
        
        {...register("designation", {
          required:{
              value:true,
              message:'Your designation is required'
          }
        })}

        type="text" placeholder="Ex: Assistant Professor/Professor" class="input input-bordered w-full max-w-xs" />
        <label class="label">
        {errors.designation?.type==='required' && <span class="label-text-alt text-red-500">{errors.designation.message}</span>}
        </label>
      </div>

      <div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Qualification</span>
    
  </label>
  <input
  {...register("qualification", {
    required:{
        value:true,
        message:'Your qualification is required'
    }
  })}
  
  type="text" placeholder="Ex: MBBS/BDS/FCPS" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.qualification?.type==='required' && <span class="label-text-alt text-red-500">{errors.qualification.message}</span>}
  </label>
</div>
</div>
<div className='grid grid-cols-2 gap-2'>
<div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Current Workplace</span>
    
  </label>
  <input
  {...register("workplace", {
    required:{
        value:true,
        message:'Your current workplace is Required'
    }
  })}
  
  type="text" placeholder="Ex: Dhaka Medical College" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.workplace?.type==='required' && <span class="label-text-alt text-red-500">{errors.workplace.message}</span>}
  </label>
</div>

<div class="form-control w-full max-w-xs mx-auto">
  <label class="label">
    <span class="label-text">Consultation Fees (In Taka)</span>
    
  </label>
  <input
  {...register("fees", {
    required:{
        value:true,
        message:'Please specifiy your consultation fees'
    }
  })}
  type="number" placeholder="Ex: 300/700/800/1000/1500/2000" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.fees?.type==='required' && <span class="label-text-alt text-red-500">{errors.fees.message}</span>}
  </label>
</div>
</div>

<div className='grid grid-cols-2'>
<div>

<label for="selectDays" class="btn my-9">Select your Available Days</label>


<input


type="checkbox" id="selectDays" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-xl">
  <DayPicker
      mode="multiple"
      min={1}
      selected={days}
      onSelect={setDays}
      
    />
    <div class="modal-action">
      <label for="selectDays" class="btn" onClick={getDates}>Confirm!</label>
    </div>
  </div>
</div>
</div>
<div>
<div class="form-control w-full max-w-xs mx-5">
  <label class="label">
    <span class="label-text">Speciality</span>
    
  </label>
  <input
  {...register("speciality", {
    required:{
        value:true,
        message:'Please select your speciality'
    }
  })}
  type="text" placeholder="Ex: Cardiologist" class="input input-bordered w-full max-w-xs" />
  <label class="label">
  {errors.speciality?.type==='required' && <span class="label-text-alt text-red-500">{errors.speciality.message}</span>}
  </label>
</div>
</div>

</div>

<div className='grid grid-cols-2 my-5'>
<div>
<h1>Please select available time for those days in order (Start and End)</h1>
{
    showSelected.map((date,index)=>{
        return <div className='grid grid-cols-2 gap-5 my-2'><input id={`start${index}`} type="time" placeholder={date} class="input input-bordered w-full max-w-xs" /> <input id={`end${index}`} type="time" placeholder={date} class="input input-bordered w-full max-w-xs" /></div>
        
    })
}
</div>

<div>
<p>Please select number of slots for the time (For example: 9:00 AM to 12:00 PM = 50 slots)</p>
{
    showSelected.map((date,index)=>{
        return <div className='my-2'><input id={`slots${index}`} type="number" placeholder={date} class="input input-bordered w-full max-w-xs"/></div>
        
    })
}
</div>

</div>
<div className='my-5'>
<button class="btn btn-active btn-primary mx-2">Select a profile picture</button>
<input type="file" class="input w-full max-w-xs" onChange={handleImageUpload}/>
<label class="label">
  {errors.image?.type==='required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
  </label>
</div>

{submitButton &&<input className='btn w-full max-w-xs' type="submit" value='Update'/>}
</form>
</div>
    );
};

export default DoctorProfileUpdate;