import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Home = ({userInfo}) => {
    const [user, loading,error]=useAuthState(auth);
    return (
        <div className='mt-10 w-1/2 mx-auto text-center'>
            <h1 className='font-bold text-2xl text-primary mb-5'>Welcome {user.displayName} to MediExpress's Dashboard</h1>
            <p>
            Dashboard enables the full features of this platform. You just need to update your profile and that's it.
            You are ready to avail various features of this website mentioned in the left. Just click on the option and you are ready to
            go.

            More text and instructions will be addded here.
            </p>
        </div>
    );
};

export default Home;