import React from 'react';
import img from '../../../images/doctor.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={img} alt="" />
            <h4>Dr.Cudi</h4>
            <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}></FontAwesomeIcon> +880-188-934556</p>

        </div>
    );
};

export default Doctor;