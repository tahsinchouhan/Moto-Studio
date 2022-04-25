import React, { useState } from "react";
import { apipath } from "../api/apiPath";

const forestLover = () => {

  const [msg, setMsg] = useState('');
  const [inputText, setInputText] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    type:"forestlover"
  });
  
  const {first_name, last_name, email, mobile} = inputText

  const changeHandler = e => {
    const { name, value } = e.target
    setInputText(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const submitEvent = async (e) => {
    e.preventDefault()
    console.log('e :>> ', e);
    try {
      if (first_name && last_name && email && mobile) {
        const response = await fetch(apipath + '/api/v1/forestlover/create', {
          method: "post",
          headers: {
            'Content-Type': "application/json",
          },
          body: JSON.stringify(inputText)
        })
        const jsonData = await response.json()
        if (jsonData.data) {
          setMsg("Your Query has been Sent Successfully")
          setInputText({
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
          })
        }
      } else {
        alert('All field is required')
        return false;
      }     
    }
    catch (error) {
      console.log(error);
    }
  }

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
      <form className="forest-lover-form" onSubmit={submitEvent}>
        <div className="input-container">
          <div className="input-item">
            <label>First Name</label>
            <input
              type="text"
              name="first_name"
              value={first_name}
              onChange={changeHandler}
              placeholder="Enter your first name here"
              required
            />
          </div>
          <div className="input-item">
            <label>Last Name</label>
            <input
              type="text"
              name="last_name"
              value={last_name}
              onChange={changeHandler}
              placeholder="Enter your last name here"
              required
            />
          </div>
          <div className="input-item">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              placeholder="Enter your email address here"
              required
            />
          </div>
          <div className="input-item">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              value={mobile}
              onChange={changeHandler}
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
