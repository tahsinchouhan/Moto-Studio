import React from "react";

const forestLover = () => {
  return (
    <div>
      <div className="forest-lover-banner">
        <div className="text">
          <h2>Forest Lovers Club</h2>
          <button>Join now</button>
        </div>
      </div>
      <div className="forest-lover-content">
        <h2>Join the Club</h2>
        <hr />
        <p>
          Fill up the form below to join like-minded individuals who are as
          passionate as you are about conserving forests and all the flora and
          fauna it houses.
        </p>
      </div>
      <form className="forest-lover-form">
        <div className="input-container">
          <div className="input-item">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name here"
              required
            />
          </div>
          <div className="input-item">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name here"
              required
            />
          </div>
          <div className="input-item">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address here"
              required
            />
          </div>
          <div className="input-item">
            <label>Mobile Number</label>
            <input
              type="number"
              placeholder="Enter your mobile number here"
              required
            />
          </div>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default forestLover;
