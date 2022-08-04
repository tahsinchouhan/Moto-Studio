
import React from "react";
import Button from "../button/ButtonLight"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function HomeFollowUs() {
  return (
    <>
      <div className="home-follow-us-img followus-media-query">
        <div className="home-follow-us-img-distance">
          <div className="d-flex justify-content-center">
            {/* <button className="mx-auto">READ MORE</button> */}
           <div className="me-5">
            <a href="https://www.instagram.com/cgherbals_/" target="_blank" rel="noopener noreferrer">
           <Button className="home-follow-button" icon={<FaInstagram className="home-follow-icon" />} text="&nbsp; INSTAGRAM" />
           </a>
           </div>
           <div className="">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chhattisgarhherbals/">
              <Button className="home-follow-button" icon={<FaFacebook className="home-follow-icon" />} text="&nbsp; FACEBOOK" />
            </a>
           </div>
          </div>
        </div>
      </div>
      {/* apply media query in mobile */}
      <div className="home-follow-us-img followus-media-query-mobile">
        <div className="home-follow-us-img-distance">
          <div className="d-flex justify-content-center">
            {/* <button className="mx-auto">READ MORE</button> */}
           <div className="me-lg-5">
            <a href="https://www.instagram.com/cgherbals_/">
           <Button className="home-follow-button" icon={<FaInstagram className="home-follow-icon" />} text="&nbsp; FOLLOW US" />
           </a>
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFollowUs;
