import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeatureService from '../FeatureService/FeatureService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeatureService></FeatureService>
            <MakeAppointment></MakeAppointment>
            <TestimonialDetails></TestimonialDetails>
            <Blogs></Blogs>
            <Doctors></Doctors>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;