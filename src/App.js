import React from "react";
import "./index.css";

export default function App() {
  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        

        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
      
        />
        <input
          id="Mobile No"
          class="form-field"
          type="text"
          placeholder="Mobile No"
          name="Mobile No"
        
        />
        <input
          id="Address 1"
          class="form-field"
          type="text"
          placeholder="Address 1"
          name="Address 1"
        
        />
         <input
          id="Address 2"
          class="form-field"
          type="text"
          placeholder="Address 2"
          name="Address 1"
        
        />
        <input
        id="state"
        class=" form-field"
        type="text"
        placeholder="state"
        name="state"
        />
         <input
        id="City"
        class="form-field"
        type="text"
        placeholder="City"
        name="City"
        />
        <input
        id=" Country"
        class="form-field"
        type="text"
        placeholder=" Country"
        name=" Country"
        />
        <input
        id="Zip Code"
        class="form-field"
        type="text"
        placeholder="Zip Code"
        name="Zip Code"
        />


        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
