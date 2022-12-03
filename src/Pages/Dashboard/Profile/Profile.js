import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import av2 from '../../../assets/images/av2.png';
import { toast } from 'react-toastify';
const Profile = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    const [dbuser,setdbUser]=useState(null);
    const [info,setInfo]=useState(true);
    if(userInfo.role==='Doctor' && info){
        
        fetch('https://mediexpressserver.onrender.com/doctorinfo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                console.log(data);
                setdbUser(data);
            }
            else{
                toast.error('Please your profile picture. MediExpress is currently showing default profile picture.');
            }
            setInfo(false);
        })
    }
    else if(userInfo.role==='Patient' && info){
        
        fetch('https://mediexpressserver.onrender.com/patientinfo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                console.log(data);
                setdbUser(data);
            }
            else{
                toast.error('Please your profile picture. MediExpress is currently showing default profile picture.');
            }
            setInfo(false);
        })
    }
    else if(userInfo.role==='Admin' && info){
       
        fetch('https://mediexpressserver.onrender.com/admininfo',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email:user.email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                console.log(data);
                setdbUser(data);
            }
            else{
                
                toast.error('Please your profile picture. MediExpress is currently showing default profile picture.');
            }
            setInfo(false);
        })
    }
    return (
        <div className='mt-10 w-1/2 mx-auto text-center'>
            <h1 className='font-bold text-4xl text-primary mb-5'>Your profile</h1>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src={dbuser?dbuser.data.image:av2} alt="Shoes" class="rounded-full w-1/4" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>Profile Type: {userInfo.role}</p>
                    <p>Phone no: {userInfo.phone}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Age: {userInfo.age}</p>
                    <p>Gender: {userInfo.gender}</p>
                    <p>NID: {userInfo.nid}</p>
                </div>
                </div>
        </div>
    );
};

export default Profile;