import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white">
           <div className={`d-flex info-container justify-content-center info-${info.background}`}>
           <div className="mr-3">
                <FontAwesomeIcon className="info-size" icon={info.icon}></FontAwesomeIcon>
            </div>
            <div>
               <h6>{info.title}</h6>
               <small>{info.description}</small>
            </div>
            
           </div>
        </div>
    );
};

export default InfoCard;