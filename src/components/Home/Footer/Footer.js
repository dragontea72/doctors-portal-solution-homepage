import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';



const Footer = () => {

    const noNamed = [
        {name: 'Emergency Dental Care' , link: "/emergency"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Tooth Extraction", link: "/tooth-extract"},
        {name: "Check Up" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "New York -101010 Hudson", link: "//google.com/map"}, 
        {name:"Yards" , link: "//google.com/map"},
    ]
    const oralHealth = [
        {name: "Emergency Dental Care", link: "/emergency"}, 
        {name: "Check Up" , link: "/checkup"},
        {name:"Treatment of personal Diseases", link:"/personal-treatment"}, 
        {name: "Check Up", link: "/checkup"},
        {name:"Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    const services = [
        {name:"Emergency Dental Care" , link: "/emergency"},
        {name:"Check Up" , link: "/checkup"},
        {name:"Treatment of personal Diseases" , link: "/personal-treatment"},
        {name:"Tooth Extraction" , link: "/tooth-extract"},
        {name:"Check Up" , link: "/checkup"},
        {name:"Check Up" , link: "/checkup"},
        {name:"Check Up" , link: "/checkup"}
    
    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row py-5">
                    <FooterCol key={1} menuTitles={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitles="Services" menuItems={services} />
                    <FooterCol key={3} menuTitles="Oral Health" menuItems={oralHealth} />
                    <FooterCol key={4} menuTitles="Oral Address" menuItems={ourAddress} >

                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF}></FontAwesomeIcon></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon " icon={faGooglePlusG}></FontAwesomeIcon></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon " icon={faInstagram}></FontAwesomeIcon></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+220495889</button>
                        </div>
                        </FooterCol>
                </div>

                <div className="copyRight text-center">
                   <p>Copyright {(new Date()).getFullYear()} All rights reserved</p>
                </div>
            </div>
              
        </footer>
    );
};

export default Footer;