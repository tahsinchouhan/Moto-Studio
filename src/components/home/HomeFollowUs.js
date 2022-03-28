
import React from "react";
import Button from "../button/ButtonLight"
import { FaInstagram } from "react-icons/fa";

function HomeFollowUs() {
  return (
    <>
      <div className="home-follow-us-img">
        <div className="home-follow-us-img-distance">
          <div className="d-flex">
            {/* <button className="mx-auto">READ MORE</button> */}
           <div className="mx-auto">
             
           <Button className="home-follow-button" icon={<FaInstagram className="home-follow-icon" />} text="&nbsp; FOLLOW US" />
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFollowUs;
