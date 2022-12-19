import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


const BookingInfoCard = ({singleData}) => {
  console.log("SingleData is: ",singleData);
  const [rating,settingRating]=useState(0);
  const [ratingButton,setRatingButton]=useState(true);
    const handleJoin=()=>{
        window.open(singleData.url);
    }
    const setRating=(rating)=>{
      settingRating(rating);
    }
    const handleRating=()=>{
      if(rating!==0){
        fetch('https://mediexpressserver.onrender.com/ratedoctor',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({doctorId:singleData.doctorId,patientId:singleData.patientId,rating:rating})
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.success){
            toast('You have successfully given a rating to your doctor.');
            setRatingButton(false);
          }
          else{
            toast.error('An error occurred. Rating could not be sent.');
            setRatingButton(true);
          }
        })
      }
      else{
        toast('Please select a rating for your doctor first.');
        setRatingButton(true);
      }
    }
    return (
        <div>
        <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Appointment to : {singleData.doctorName}</h2>
          <p>Appointment for: {singleData.reason}</p>
          <div class="rating">
  <input
  onClick={()=>{
    setRating(1);
 }}
  type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input
  onClick={()=>{
    setRating(2);
 }}
  type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input
  onClick={()=>{
    setRating(3);
 }}
  type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input
  onClick={()=>{
    setRating(4);
 }}
  type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
  <input
  onClick={()=>{
    setRating(5);
 }}
  type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
</div>
          <div class="card-actions justify-end">
          {
            ratingButton && <button class="btn btn-primary"
            onClick={handleRating}
            >Send Rating</button>
          }
            
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary"
            onClick={handleJoin}
            >Join Meeting</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BookingInfoCard;