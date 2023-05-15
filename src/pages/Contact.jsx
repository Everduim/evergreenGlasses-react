import React from 'react';
import '../pages/Contact.scss';

const Contact = () => {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2>Contact</h2>
          <p>
          If you have any questions or want to know more about our services, please do not hesitate to contact us.          </p>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" required></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send</button>
            </div>
          </form>
          <img className="contact-image" src="../imagenes/map-contact.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
