import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Request Sent!');
  };

  return (
    <div className="form-container">
      <h2>Enquire Now</h2>
      <p>Please enter the details below</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <input type="text" id="name" name="name"  placeholder='Name*'required />
        </div>
        <div className="form-group">
          <input type="tel" id="phone" name="phone" placeholder='Phone Number*'required />
        </div>
        <div className="form-group">
          <input type="email" id="email" name="email" placeholder='email*' required />
        </div>
        <div className="form-group">
          <select id="property" name="property*" required>
            <option value="">Select Property</option>
            <option value="property1">Property 1</option>
            <option value="property2">Property 2</option>
            <option value="property3">Property 3</option>
          </select>
        </div>
        <div className="form-group">
          <textarea id="message" name="message" placeholder='Message*'required></textarea>
        </div>
        <div className="form-group">
        <button type="submit" id='enquirenow'>Enquire Now</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
