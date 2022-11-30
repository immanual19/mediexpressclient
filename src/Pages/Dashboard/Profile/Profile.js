import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import av2 from '../../../assets/images/av2.png';
const Profile = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    return (
        <div className='mt-10 w-1/2 mx-auto text-center'>
            <h1 className='font-bold text-4xl text-primary mb-5'>Your profile</h1>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure class="px-10 pt-10">
                    <img src={av2} alt="Shoes" class="rounded-full w-1/4" />
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