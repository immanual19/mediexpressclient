import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const UploadPrescriptionPatient = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    const [submitButton,setSubmitButton]=useState(false);
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit=async(data)=>{
        let info={};
        info.patientid=userInfo._id;
        info.role=userInfo.role;
        info.gender=userInfo.gender;
        info.email=userInfo.email;
        info.age=userInfo.age;
        info.phone=userInfo.phone;
        info.nid=userInfo.nid;
        info.reportname=data.reportname;
        info.reportimage=imageURL;
        fetch('http://localhost:8080/pastmedicalhistory',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.success){
            toast('Congratulations!!! Your report has been stored successfully.');
          }
          else{
            toast.error('Unexpected error occured. Please, try again later.');
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
        <div className='mt-10 w-1/2 mx-auto text-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control w-full max-w-xs mx-auto">
        <label class="label">
          <span class="label-text">Test Name</span>
          
        </label>
        <input
        
        {...register("reportname", {
          required:{
              value:true,
              message:'Name of the test is required'
          }
        })}

        type="text" placeholder="Ex: Haematology" class="input input-bordered w-full max-w-xs" />
        <label class="label">
        {errors.reportname?.type==='required' && <span class="label-text-alt text-red-500">{errors.reportname.message}</span>}
        </label>
      </div>
      <div className='my-5'>
      <button class="btn btn-active btn-primary mx-2">Select your report</button>
      <input type="file" class="input w-full max-w-xs" onChange={handleImageUpload}/>
      <label class="label">
        {errors.image?.type==='required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
        </label>
      </div>
      {submitButton &&<input className='btn w-full max-w-xs' type="submit" value='Send'/>}
        </form>
        </div>
    );
};

export default UploadPrescriptionPatient;