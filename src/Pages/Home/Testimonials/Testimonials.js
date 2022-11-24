import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import av2 from '../../../assets/images/av2.png';
import av3 from '../../../assets/images/av3.jpg';
import av4 from '../../../assets/images/av4.jpg';
import ReviewCard from './ReviewCard';
const Testimonials = () => {
    const reviews=[
        {
            _id:1,
            title:'Excellent!!!',
            name:'John Wick',
            description:'MediExpress is reliable, easy to use and trustworthy. Their services are as good as they promised.',
            img:av2,
            location:'Dhaka, Bangladesh'
        },
        {
            _id:2,
            title:'Better than expected',
            name:'Harley Quinn',
            description:'MediExpress has a great response time in case of medical emergency. No matter if it is 3PM or 3AM.',
            img:av3,
            location:'Tangail, Bangladesh'
        },
        {
            _id:3,
            title:'Good as advertised',
            name:'Walter White',
            description:'MediExpress has an unique feature to store past medical histories. My doctor found the root of my disease because of that.',
            img:av4,
            location:'Gaibandha, Bangladesh'
        }
        

    ]
    return (
        <section className='my-28 px-5'>
        <div className='flex justify-between'>
        <div>
                <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                <h2 className='text-3xl'>What our Patients say</h2>
        </div>
        <div>
        <img className='w-24 lg:w-48' src={quote} alt=""/>
        </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                reviews.map(review=><ReviewCard
                    key={review._id}
                    review={review}
                    >
                    </ReviewCard>)
            }
        </div>
        </section>
    );
};

export default Testimonials;