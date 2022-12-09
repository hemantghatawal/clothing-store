import React from "react";

// style
import "./ContactPage.style.scss";

// images
import Profile from "../../assets/profile.jpg";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>GET IN TOUCH</h1>
      <a href="https://www.linkedin.com/in/hemant-ghatawal/" target="blank">
        <h3 className="name">Hemant Saini - Web Developer</h3>
        <img className="profile-image" src={Profile} alt="Aarush" />
      </a>
    </div>
  );
};

export default ContactPage;
