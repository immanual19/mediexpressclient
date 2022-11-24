import React from 'react';
import neph from '../../../assets/images/neph.jpg';
import bloodbank from '../../../assets/images/bloodbank.jpg';
import cardiacsvg from '../../../assets/images/cardiacsvg.jpg';
import emgsvg from '../../../assets/images/emgsvg.jpg';
import stomach from '../../../assets/images/stomach.png';
import neurology from '../../../assets/images/neurology.jpg';
import Service from './Service';
const Services = () => {
    const services=[
        {
            _id:1,
            image:neph,
            name:"Nephrology",
            description:"The nephrology department provides diagnosis and treatment for patients with all forms of acute and chronic kidney disease (excluding dialysis and transplantation) together with the investigation and management of hypertension"
        },
        {
            _id:2,
            image:bloodbank,
            name:"Blood Bank",
            description:"There are reservations of blood for emergency patients.One can get desired group if there it is available.It can be a life saving for many of us."
        },
        {
            _id:3,
            image:cardiacsvg,
            name:"Cardiology",
            description:"Cardiology department offers treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease should be referred to a cardiologist. Cardiology is a branch of internal medicine."
        },
        {
            _id:4,
            image:emgsvg,
            name:"Emergency",
            description:"medical specialty concerned with the care and treatment of acutely ill or injured patients who need immediate medical attention. We provide 24/7 ambulance service."
        },
        {
            _id:5,
            image:stomach,
            name:"Gastrology",
            description:"This department offers treatment for diseases of the parts of the body involved in digestion. This includes the esophagus, stomach, small intestine, large intestine, and rectum, as well as the liver, gallbladder, and pancreas"
        },
        {
            _id:6,
            image:neurology,
            name:"Neurology",
            description:"Neurological rehabilitation is a doctor-supervised program designed for people with diseases, injury, or disorders of the nervous system. Neurological rehab can often improve function, reduce symptoms, and improve the well-being of the patient."
        }

    ]
    return (
        <div className='my-28'>
        <div className='text-center'>
        <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
        <h1 className='text-4xl'>Services We Provide</h1>
        </div>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 gap-10'>
                {
                    services.map(service=><Service
                        key={service._id}
                        service={service}
                        ></Service>)
                }
           </div> 
        </div>
    );
};

export default Services;