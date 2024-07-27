import React, { useState } from 'react';
import './contact.css'; // Import your CSS file for styling

function Contact() {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
// Here you would typically handle form submission, 
    // like sending data to a server or performing validation.
    console.log('Submitted:', { name, age, email, mobile });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(
e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input 
            type="number" 
            id="age" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input 
            type="tel" 
            id="mobile" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
