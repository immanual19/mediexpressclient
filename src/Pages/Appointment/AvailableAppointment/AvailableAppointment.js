import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Doctors from '../Doctors/Doctors';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointment = ({date,specialist,filter,userInfo}) => {
    
    const [doctors,setDoctors]=useState([]);
    const [booking,setBooking]=useState(null);


    useEffect(()=>{
        fetch('http://localhost:8080/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data));
    },[])
    return (
        <div>
        {
            filter?(<h4 className='text-xl text-primary text-center'>Available {specialist} on {format(date,'PP')}</h4>):(<h4 className='text-xl text-secondary text-center'>Please Select an specialist</h4>)
        }
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
          {
            doctors.map(doctor=><Doctors
                key={doctor._id}
                doctor={doctor}
                setBooking={setBooking}
                >
                
                </Doctors>)
          }
          </div>  
          {booking && <BookingModal date={date}
          booking={booking}
          setBooking={setBooking}
          userInfo={userInfo}
          ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;