import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
const Info = () => {
    const cardInfo=[
        {
            cardTitle:"Opening Hours",
            image:clock,
            background:"bg-gradient-to-r from-secondary to-primary",
            text:"We are open 24/7"
        },
        {
            cardTitle:"Our Locations",
            image:marker,
            background:"bg-accent",
            text:"Dhaka, Bangladesh"
        },
        {
            cardTitle:"Contact Us",
            image:phone,
            background:"bg-gradient-to-r from-secondary to-primary",
            text:"+8801709605706"
        }
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 mt-10'>
            <InfoCard cardTitle={cardInfo[0].cardTitle} img={cardInfo[0].image} bgClass={cardInfo[0].background} text={cardInfo[0].text}></InfoCard>
            <InfoCard cardTitle={cardInfo[1].cardTitle} img={cardInfo[1].image} bgClass={cardInfo[1].background} text={cardInfo[1].text}></InfoCard>
            <InfoCard cardTitle={cardInfo[2].cardTitle} img={cardInfo[2].image} bgClass={cardInfo[2].background} text={cardInfo[2].text}></InfoCard>
        </div>
    );
};

export default Info;