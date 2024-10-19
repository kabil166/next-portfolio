"use client"
// pages/contact.js
import { useState } from 'react';
import styles from '../styles/Contact.module.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // const formData = {
        //   to: 'recipient@example.com', // Replace with the actual recipient email
        //   subject: 'Subject of the email',
        //   bodydata: 'This is the body of the email',
        // };
      
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (res.ok) {
          const responseData = await res.json(); // Read the response data
          toast.success(responseData.message); // Show success toast with the message from the server
        } else {
          const errorData = await res.json();
          toast.error(`Failed to send message: ${errorData.error}`);
        }
      };

  return (
    <div className={styles.container}>
      <h1 id='heading' className={styles.heading}>Contact Me</h1>
      {submitted ? (
        <div className={styles.thankYou}>
          <h2>Thank You!</h2>
          <p>Your message has been sent. I'll get back to you soon!</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className='form_label'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.form_input}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className='form_label'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.form_input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className='form_label'>Message</label>
            <textarea
              className={styles.text_area}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;