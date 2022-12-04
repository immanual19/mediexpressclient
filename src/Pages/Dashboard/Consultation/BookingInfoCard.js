import React from 'react';

const BookingInfoCard = ({singleData}) => {
    const handleJoin=()=>{
        window.open(singleData.url);
    }
    return (
        <div>
        <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Appointment to : {singleData.doctorName}</h2>
          <p>Appointment for: {singleData.reason}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary"
            onClick={handleJoin}
            >Join</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default BookingInfoCard;