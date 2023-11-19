
import React, { useState } from "react";
import './barber.css';

function NewBarber() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [specialization, setSpecialization] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };


  const handleSpecializationChange = (event) => {
    setSpecialization(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/barbers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phoneNumber, specialization }),
      });

      if (response.ok) {
        // Registration successful, you can redirect the user or perform any necessary actions.
        console.log('New Barber successful!');
      } else {
        // Registration failed, handle errors appropriately.
        console.error('New barber failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <h2>Create New Barber</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
       <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          </div>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label>
          Specialization:
          <input
            type="text"
            value={specialization}
            onChange={handleSpecializationChange}
          />
        </label>
        <button type="submit">Create Barber</button>
      </form>
    </div>
  );
};

export default NewBarber;