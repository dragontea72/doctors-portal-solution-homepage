import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5"> 
                    <h5 className="text-primary">Contact Us</h5>
                    <h1>Always Connect With Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Email Address " />
                        </div>
                        <div className="form-group">
                           <input className="form-control" type="text" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea name = "" className="form-control" id = "" cols = "30" rows ="10" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button style={{width:'150px'}} type = "button" className="btn btn-primary" > Submit </button>

                        </div>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default ContactUs;