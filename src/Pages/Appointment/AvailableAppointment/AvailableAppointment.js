import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Doctors from '../Doctors/Doctors';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointment = ({date,specialist,filter,userInfo}) => {
    const [doctors,setDoctors]=useState([]);
    const [booking,setBooking]=useState(null);
    const [message,setMessage]=useState(false);
    const [slots,setSlots]=useState([]);
    let index=0;
    const handleClick=()=>{
        console.log(format(date,'PP'),specialist);
        fetch('https://mediexpressserver.onrender.com/doctors',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({date:format(date,'PP'),speciality:specialist})
        })
        .then(res=>res.json())
        .then(data=>{
            let filteredDoctor=[];
            let filteredSlot=[];
            for(let i=0;i<data.length;++i){
                for(let j=0;j<data[i].schedules.length;++j){
                    if(data[i].schedules[j].day===format(date,'PP')){
                        filteredDoctor.push(data[i]);
                        filteredSlot.push(data[i].schedules[j]);
                    }
                }
            }
            setSlots(filteredSlot);
            setDoctors(filteredDoctor);
            setMessage(true);
        });
    }
    
    return (
        <div>
        <div className='w-5' style={{marginLeft:'47%'}}>
        <button class="btn btn-primary" onClick={handleClick}>Search</button>
        </div>
        
        {
            message?(<h4 className='text-xl text-primary text-center'>Available {specialist} on {format(date,'PP')}</h4>):(<h4 className='text-xl text-secondary text-center'>Please Select an specialist</h4>)
        }
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
          {
            doctors.map(doctor=><Doctors
                key={doctor._id}
                doctor={doctor}
                setBooking={setBooking}
                slots={slots}
                >
                
                </Doctors>)
          }
          </div>  
          {booking && <BookingModal date={date}
          booking={booking}
          setBooking={setBooking}
          userInfo={userInfo}
          slots={slots}
          ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;