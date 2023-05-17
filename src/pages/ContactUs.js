
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
 
   async function submitHandler(event){
    event.preventDefault();

    // Get the form data
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;

    // create the request body object
    const data = {
      name,
      email,
      phone,
    }
    try {
      // send the POST request to the server
      const response = await fetch('https://ecommerce-fetching-default-rtdb.firebaseio.com/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // Handle the response from the server
      const result = await response.json();
      
      //show additional message and success message
      console.log(result)

    } catch (error) {

      // handle any error that occurred during the request.
      console.error('Error', error);
    }
  }
  return (
    <div className='box'>
      <h2>Contact Us</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
