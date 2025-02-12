import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="map-section">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48824.481153667695!2d19.8045554!3d41.3387489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1711456795545!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-form-section">
        <h2 className="contact-title">Feel Free To Ask Us Anything For IT Servicing</h2>
        <p className="contact-description">
          When you bring your vehicle to Ducatibox Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Full Name*" required />
            <input type="email" placeholder="E-mail Address*" required />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Text"></textarea>
          <button type="submit">SEND MAIL</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
