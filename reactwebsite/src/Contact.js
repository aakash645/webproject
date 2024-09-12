import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        msg: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.msg); // Ensure this matches the backend response
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    msg: ''
                });
            } else {
                setMessage(result.msg); // Ensure this matches the backend response
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('There was an error submitting the form');
        }
    };

    return (
        <>
            <div className="ffbox mt-5">
                <div className="ffbox1 mt-5">
                    <h1 className="gfg mt-5">Contact Us</h1>
                    <h2>Service Enquiry Form</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <i className="fa fa-solid fa-user"></i> Full Name:
                        </label>
                        <input type="text"
                               id="name"
                               name="name"
                               value={formData.name}
                               onChange={handleChange} required />

                        <label htmlFor="email">
                            <i className="fa fa-solid fa-envelope"></i> Email Address:
                        </label>
                        <input type="email"
                               id="email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                               required />

                        <label htmlFor="mobile">
                            <i className="fa fa-solid fa-phone"></i> Contact No:
                        </label>
                        <input type="number"
                               id="mobile"
                               name="mobile"
                               value={formData.mobile}
                               onChange={handleChange} required />

                        <label htmlFor="msg">
                            <i className="fa fa-solid fa-comment"></i> Write Message:
                        </label>
                        <textarea id="msg"
                                  name="msg"
                                  rows="5"
                                  value={formData.msg}
                                  onChange={handleChange} required></textarea>

                        <button type="submit">Send Enquiry</button>
                    </form>
                    {message && <p>{message}</p>} {/* Display feedback message */}
                </div>
                <div className="map-div">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7214.062081503!2d82.98182555000001!3d25.30316115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e32084887c951%3A0x7ed689a4580f9ecd!2sMahmoorganj%2C%20Varanasi%2C%20Uttar%20Pradesh%20221010!5e0!3m2!1sen!2sin!4v1725531097215!5m2!1sen!2sin"
                            width="370"
                            height="95%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <br />
            <br />
            <div className="calltoaction justify-content-center">
                <h2 className="text-dark mt-5 justify-content-center"><b>Build your awesome presence now!</b></h2>
                <p className="text-dark ml-4">AriseTech - Renowned digital marketing agency in Varanasi, We will help you fix your dreams turn to reality</p>
                <a href="https://wa.me/918779155560"><button className="button-contact">Enquire Now</button></a>
            </div>
            <br />
            <footer className="footer bg-primary">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img className="logo-footer" src="https://arise-tech.in/wp-content/uploads/2024/08/logo_arisetech-removebg-preview-54x53.png" alt="Avatar" />
                        <h6 className="text-white ml-2">AriseTech</h6>
                    </div>
                    <br />
                    <div className="footer-nav">
                        <h5>Nav Links</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-services">
                        <h5>Services</h5>
                        <ul>
                            <li><a href="/services">Website Design</a></li>
                            <li><a href="/services">Graphics Design</a></li>
                            <li><a href="/services">Social Media Management</a></li>
                            <li><a href="/services">Social Media Marketing</a></li>
                            <li><a href="/services">SEO</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/ed.arisetech?igsh=MTNiYzNiMzkwZA==" target="_blank" className="social-icon"><img src="https://thumbs.dreamstime.com/b/colored-instagram-logo-icon-high-resolution-colored-instagram-logo-white-background-vector-eps-file-available-additional-175710005.jpg" className="rounded-circle" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61551053145817&mibextid=ZbWKwL" target="_blank" className="social-icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPc7xDT_JZj7uumgHCLsBOoF3ivV1XzvyhussczzjtDlZeqpg2jZN7w7-9f1Qp6fVKb0&usqp=CAU" className="rounded-circle" /></a>
                        <a href="https://www.linkedin.com/company/edu-arisetech/" target="_blank" className="social-icon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQt6ZLkOAIakVvaHyFNWnxydX0RXhuUCi0fqES_9oz-aOsWkpossx9pg2MM3YoxS5J54c&usqp=CAU" className="rounded-circle" /></a>
                    </div>
                    <div className="footer-subscribe">
                        <h4>Subscribe to Our Newsletter</h4>
                        <form action="/subscribe" method="post">
                            <input type="email" placeholder="Enter your email" required />
                            <button type="submit" className="btn btn-primary">Subscribe Now</button>
                        </form>
                    </div>
                </div>
                <div className="footer-copyright mt-3">
                    <p>Powered By AriseTech | Designed by Akash Mishra</p>
                </div>
            </footer>
        </>
    );
}

export default Contact;