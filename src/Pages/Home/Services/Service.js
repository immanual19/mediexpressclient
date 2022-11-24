import React from 'react';

const Service = ({service}) => {
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl h-full">
        <figure className="px-10 pt-10">
          <img src={service.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Explore Now</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Service;