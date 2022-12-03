import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';

const SignUp = () => {
  const [roleError,setRoleError]=useState(false);
  const [genderError,setGenderError]=useState(false);
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError]=useUpdateProfile(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const updateUser=(role,gender,email,age,phone,nid)=>{
      const userInfo={role:role,gender:gender,email:email,age:age,phone:phone,nid:nid};
      fetch('https://mediexpressserver.onrender.com/updateprofile',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.success){
          toast('Congratulations!!! Profile update has been successful.');
        }
        else{
          toast.error('You already have a MediExpressAccount. Please login.');
        }
      })
    };
    const onSubmit = async (data) =>{
      let selectRole=document.getElementById('selectedRole');
      let optionSlot=selectRole.options[selectRole.selectedIndex];		
      let role=optionSlot.value;
      let selectedGender=document.getElementById('selectedGender');
      let genderSlot=selectedGender.options[selectedGender.selectedIndex];
      let gender=genderSlot.value;
        if(role.length!==9 && gender.length!==11){
        console.log(role);
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({displayName:data.name});
        await updateUser(role,gender,data.email,data.age,data.phone,data.nid);
        navigate('/appointment');
        }
        else{
            setRoleError(true);
            setGenderError(true);
        }
        
        
    } 

    let signInError;
    let roleErrorMessage;
    let genderErrorMessage;
  //console.log(watch("example")); 

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // if(gUser){
    //     console.log(gUser);
    // }
    if(user){
        console.log("Someone is signing up",user);
    }
    if(loading || gLoading || updating){

        return <Loading></Loading>
    }

    if(roleError){
      roleErrorMessage=<p className='text-red-500'><small>You must select a role</small></p>
    }
    if(genderError){
      genderErrorMessage=<p className='text-red-500'><small>You must select a Gender</small></p>
    }
    if(error || gError || updateError){
        signInError=<p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    return (
        <div className='flex justify-center items-center'>
        <div className="card w-100 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">SignUp</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

  <div className='grid grid-cols-2 gap-2'>
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Full Name</span>
  </label>
  <input
  type="text"
  placeholder="Your Full Name"
  class="input input-bordered w-full max-w-xs"
  {...register("name", {
    required:{
        value:true,
        message:'Name is Required'
    }
  })}
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
{...register("email", {
  required:{
      value:true,
      message:'Email is Required'
  },
  pattern: {
    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: 'Provide a valid email'
  }
})}
/>
<label class="label">
{errors.email?.type==='required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  
</label>
</div>
  </div>
 
<div className='grid grid-cols-2 gap-2'>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Age</span>
  </label>
  <input
  type="number"
  placeholder="Your Age"
  class="input input-bordered w-full max-w-xs"
  {...register("age", {
    required:{
        value:true,
        message:'Age is Required'
    }
  })}
  />
  <label class="label">
  {errors.age?.type==='required' && <span class="label-text-alt text-red-500">{errors.age.message}</span>}
    
  </label>
</div>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Phone Number</span>
  </label>
  <input
  type="text"
  placeholder="Your Phone Number"
  class="input input-bordered w-full max-w-xs"
  {...register("phone", {
    required:{
        value:true,
        message:'Phone number is Required'
    },
    minLength: {
      value: 11,
      message: 'Must be 11 digits'
    },
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: 'Provide a valid Phone number'
    }
  })}
  />
  <label class="label">
  {errors.phone?.type==='required' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
  {errors.phone?.type==='minLength' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
  {errors.phone?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.phone.message}</span>}
    
  </label>
</div>

</div>

<div className='grid grid-cols-2 gap-2'>
<div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Password</span>
  </label>
  <input
  type="password"
  placeholder="Password"
  class="input input-bordered w-full max-w-xs"
  {...register("password", {
    required:{
        value:true,
        message:'Password is Required'
    },
    minLength: {
      value: 6,
      message: 'Must be 6 characters or longer'
    }
  })}
  />
  <label class="label">
  {errors.password?.type==='required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type==='minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
    
  </label>
  </div>
  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">NID Number</span>
  </label>
  <input
  type="text"
  placeholder="Your NID Number"
  class="input input-bordered w-full max-w-xs"
  {...register("nid", {
    required:{
        value:true,
        message:'NID number is Required'
    },
    minLength: {
      value: 10,
      message: 'Must be atleast 10 digits'
    },
    pattern: {
      value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      message: 'Provide a valid NID number'
    }
  })}
  />
  <label class="label">
  {errors.nid?.type==='required' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
  {errors.nid?.type==='minLength' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
  {errors.nid?.type==='pattern' && <span class="label-text-alt text-red-500">{errors.nid.message}</span>}
    
  </label>
</div>
</div>
<div className='grid grid-cols-2'>
<select id="selectedGender" class="select w-full max-w-xs my-5">
            <option  disabled selected>Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
  </select>
  <select id="selectedRole" class="select w-full max-w-xs my-5">
            <option  disabled selected>Your Role</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
  </select>
</div>
  
{signInError}
{roleErrorMessage}
{genderErrorMessage}

<input className= 'flex btn w-full max-w-xs mx-auto items-center' type="submit" value='Sign up'/>
<p className='flex items-center w-64 my-2 mx-auto'><small>Already have an account? <Link className='text-primary' to='/login'>Click to Login</Link></small></p>


</form>


      <div className="divider">OR</div>
      <button
      onClick={()=>signInWithGoogle()}
      className="btn btn-outline btn-primary">Continue with Google</button>
    </div>
  </div>
  
</div>
   
        
    );
};

export default SignUp;