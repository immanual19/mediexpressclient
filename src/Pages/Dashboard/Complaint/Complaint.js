import { React, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Complaint = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    const [complaint,setComplaint]= useState("");
    console.log(user);
    const [fError,setFError]=useState(false);
    const update=(event)=>{
        setComplaint(event.target.value);
        
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit=async(data)=>{
        
        if(complaint===""){
            setFError(true);
        }
        else{
            data.name=user.displayName;
            data.email=userInfo.email;
            data.complaint=complaint;
            
            
            fetch('http://localhost:8080/complaint',{
                method: 'POST',
                headers:{
                  'content-type':'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.success){
                    toast('Your complaints has been filed successfully. Our Customer Care will get in touch with you within 24 hours.');
                }
                else{
                    toast.error('Request could not be processed right now. Please try again later.');
                }
                
              })
        }
    }

    return (
        <div className='mt-10 w-1/4 mx-auto text-center'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center text-2xl font-bold">Your Complaints</h1>
        <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Full Name</span>
  </label>
  <input
  type="text"
  placeholder="Your Email"
  class="input input-bordered w-full max-w-xs"
  value={user.displayName}
  disabled
  />
  <label class="label">
  {errors.name?.type==='required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
    
  </label>
</div>

<div class="form-control w-full max-w-xs">
<label class="label">
  <span class="label-text">Email</span>
</label>
<input
type="email"
placeholder="Your Email"
class="input input-bordered w-full max-w-xs"
value={userInfo.email}
disabled
/>
<label class="label">
{errors.email?.type==='required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  
</label>
</div>


<div class="form-control  w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your Complaint</span>
    
  </label> 
  <textarea id="userComplaint" class="textarea textarea-bordered h-24" placeholder="Complaint" onChange={update}></textarea>
  <label class="label">
    
  </label> 
</div>
{
    fError && <p className='text-red-500'>Please state your complaint</p>
}

   <input className= 'flex btn w-full max-w-xs ml-30 items-center' type="submit" value='Send'/>

</form>
</div>
    );
};

export default Complaint;