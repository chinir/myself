import React from 'react';
import './ContactUs.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div id='contact'className="contact">
        <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src="" alt=""/> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>feel free to ask something</p>
             <div className="contact-details">
             <div className="contect-detail">
                <FaEnvelope className="contact-icon" />
                <p>nirajchitroda9009@gmail.com</p>
                </div>
                <div className="contect-detail">
                <FaPhoneAlt className="contact-icon" />
                <p>+91 9313262744</p>
                </div>
                <div className="contect-detail">
                <FaMapMarkerAlt className="contact-icon" />
                <p>Rajkot , Gujarat , BHARAT</p> 
                </div>
             </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your name' name='name' />
                <label htmlFor="email" name="email">Email</label>
                <input type="email" placeholder="Enter your Email" name="email" id="" />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter Your message here'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;
