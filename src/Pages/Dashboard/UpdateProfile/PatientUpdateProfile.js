import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
const PatientUpdateProfile = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    const [submitButton,setSubmitButton]=useState(false);
    const [imageURL,setImageURL]=useState(null);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit=async(data)=>{
        userInfo.image=imageURL;
        console.log(userInfo);
        fetch('http://localhost:8080/updatepatients',{
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
        <h1 className='text-primary'>Mr {user.displayName} are all set but uploading your profile picture</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default PatientUpdateProfile;