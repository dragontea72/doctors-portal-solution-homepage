import React from 'react';
import flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        title: 'Fluoride Treatment',
        img:flouride
    },
    {
        title: 'Cavity Filling',
        img:cavity
    },
    {
        title: 'Teath Whitening',
        img:whitening
    }
]

const Services = () => {
    return (
       <section className="services-container">
           <div className="text-center mt-5">
               <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
               <h2>Services We Provide</h2>
               
           </div>
           <div className="d-flex justify-content-center">
               <div className="w-75 row mt-5 pt-5">
                   {
                       servicesData.map((service => <ServiceDetail service={service}></ServiceDetail>))
                   }
               </div>
           </div>
       </section>
    );
};

export default Services;