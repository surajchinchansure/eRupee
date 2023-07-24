import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    balance: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the Express backend to register the user
      await axios.post('/api/register', formData);
      console.log('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div class="main-div">
      <center>
    <form onSubmit={handleSubmit}>
      <table>
      <div>
        <tr>
          <td>
            <label htmlFor="name">Name</label>
          </td>
          <td>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </td>
        </tr>
      </div>
      <div>
        <tr>
          <td>
        <label htmlFor="email">Email</label></td>
        <td><input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /></td>
        </tr>
      </div>
      <div>
        <tr>
          <td>
        <label htmlFor="password">Password</label></td>
        <td><input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        /></td>
        </tr>
      </div>
      <div>
        <tr>
          <td>
        <label htmlFor="balance">e₹ Balance</label></td>
        <td><input
          type="number"
          id="balance"
          name="balance"
          value={formData.balance}
          onChange={handleChange}
        /></td></tr>
      </div>
      <tr>
        <td colSpan={2}>
      <button type="submit">Register</button></td>
      </tr>
      </table>
    </form>
    </center>
    </div>
  );
};

export default RegistrationForm;