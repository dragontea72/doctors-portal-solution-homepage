import React from 'react';
import feature from '../../../images/feature.png';

const FeatureService = () => {
    return (
        <section className="feature-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                  <div className="col-md-5 mb-4 m-md-0">
                     <img className="img-fluid" src={feature} alt="/"/>
                  </div>
                  <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br/> Care, on Your Terms</h1>
                        <p className="text-secondary my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, adipisci assumenda deserunt libero dicta eos sapiente cupiditate quos provident exercitationem ut recusandae, ullam consequatur illo nisi perferendis totam maxime eaque impedit ratione dolores! Quod, laudantium qui est animi corporis velit numquam porro ipsum architecto iure veniam, minus error aliquam iste!</p>
                        <button style={{width:'150px'}} type="button" className="btn btn-primary">Learn More</button>
                  </div>
                    
                </div>   
             </div>
        </section>
    );
};

export default FeatureService;