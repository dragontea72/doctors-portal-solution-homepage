import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
       <section className="make-appointment">
           <div className="container">
               <div className="row">
                   <div className="col-md-5 d-none d-md-block">
                       <img  src={doctor} alt="/" />

                   </div>
                   <div className="col-md-7 py-5 text-white">
                       <h5 className="text-primary">APPOINTMENT</h5>
                       <h1 className="my-4">Make an Appointment <br/>Today</h1>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt magni nostrum distinctio inventore totam deleniti tenetur sint facilis quod.</p>
                       <button style={{width:'150px'}} type="button" className="btn btn-primary">Learn More</button>
                   </div>
               </div>
           </div>

       </section>
    );
};

export default MakeAppointment;