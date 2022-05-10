import Image from "next/image";
import React, { useState } from "react";
import ConsumerProgramBanner from "../../assets/images/connect/consumerProgramBanner.svg";
import { apipath } from "../api/apiPath";

const ConsumerProgram = () => {
  const [msg, setMsg] = useState("");
  const [inputText, setInputText] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    type: "volunteer",
  });

  const { first_name, last_name, email, mobile } = inputText;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputText((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    try {
      if (first_name && last_name && email && mobile) {
        const response = await fetch(apipath + "/api/v1/volunteer/create", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputText),
        });
        const jsonData = await response.json();
        if (jsonData.data) {
          setMsg("Your Query has been Sent Successfully");
          setInputText({
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
          });
        }
      } else {
        alert("All field is required");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="consumer-program-banner">
        <div className="text">
          <h2>Volunteer @ Van Dhan Vikas Kendras</h2>
        </div>
        {/*
        <div className="img">

        <Image
        src={ConsumerProgramBanner}
        alt="connect with us"
        layout="fill"
        className={"image"}
        />
        </div>
      */}
      </div>
      <div className="consumer-program-content">
        <h2>Volunteer Now</h2>
        <hr />
        <p>
          Fill up the form below to join the community of volunteers working
          towards building sustainable lifestyles for the tribal population of
          Chhattisgarh
        </p>
      </div>
      <div className="text-center text-success text-bold fw-bold my-3">
        {msg}
      </div>
      <form className="consumer-program-form" onSubmit={submitEvent}>
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
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ConsumerProgram;
