import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Help = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    return (
        <div className='mt-10 w-1/2 mx-auto text-center'>
            <h1>Hi {user.displayName}, having trouble on using MediExpress? Don't worry, we got you covered.</h1>
            <h1>Just Follow this simple steps: </h1>
        </div>
    );
};

export default Help;