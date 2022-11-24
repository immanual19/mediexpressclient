import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl h-full">
        <div className="card-body">
          <h2 className="card-title">{review.title}</h2>
          <p>{review.description}</p>
          <div className="flex items-center">
          <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            <img src={review.img} alt=""/>
          </div>
        </div>
        <div>
        <h4 className='text-xl'>{review.name}</h4>
        <p>{review.location}</p>
        </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ReviewCard;