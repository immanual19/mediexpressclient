import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
const Appointment = () => {
    const [user, loading,error]=useAuthState(auth);
    const [date,setDate]=useState(new Date());
    const [specialist,setSpecialist]=useState("");
    const [filter,setFilter]=useState(false);
    const [userInfo,setUserInfo]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:8080/userinfo',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify({email:user.email})
      })
      .then(res=>res.json())
      .then(data=>{
        setUserInfo(data);
      })
    },[])
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} specialist={specialist} setSpecialist={setSpecialist} setFilter={setFilter}></AppointmentBanner>
            <AvailableAppointment userInfo={userInfo} date={date} specialist={specialist} filter={filter}></AvailableAppointment>
        </div>
    );
};

export default Appointment;