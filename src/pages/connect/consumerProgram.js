import Image from "next/image";
import React from "react";
import ConsumerProgramBanner from "../../assets/images/connect/consumerProgramBanner.png";

const consumerProgram = () => {
  return (
    <div>
      <div className="consumer-program-banner">
        <div className="text">
          <h2>Volunteer @ Van Dhan Vikas Kendras</h2>
          <p>
            TRIFED spearheads implementation of the Van Dhan programme in
            Chhattisgarh in regions with with availability of MFPs and
            significant forest dwelling tribal population. The program addresses
            the formidable problems that the Tribals face such as possession of
            land/house with no rights; restrictions in the collection of minor
            forest produce; exploitation by middlemen; displacement from
            national parks and wild sanctuaries, lack of development in forest
            villages etc.
          </p>
          <button>Volunteer now</button>
        </div>
        <div className="img">
          <Image
            src={ConsumerProgramBanner}
            alt="connect with us"
            layout="fill"
            className={"image"}
          />
        </div>
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
      <form className="consumer-program-form">
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

export default consumerProgram;
