import React from 'react';

const PatientBookingInfo = ({booking}) => {
    return (
        <div>
        <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">Name: {booking.patientName}</h2>
          <p>Appointment Date: {booking.date}</p>
          <p>Appointment to: {booking.doctorName}</p>
          <p>Reason: {booking.reason}</p>
          {
            !booking.paymentStatus && <p>To be paid: BDT: {booking.fees} only.</p>
          }
          <p>Payment Status: {booking.paymentStatus?(<p>Paid</p>):(<p>Unpaid</p>)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Pay</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PatientBookingInfo;