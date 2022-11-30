import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Upgrade = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    return (
        <div className='mt-10 w-1/2 mx-auto text-center'>
            <h1>Hi {user.displayName}, Upgrade to pro and unvail our exclusive offers</h1>
            <h1>Our three basic package will be shown here</h1>
        </div>
    );
};

export default Upgrade;