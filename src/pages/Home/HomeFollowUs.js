import Image from "next/image";
import React from "react";
import FollowDesk from "../../assets/images/home/1desk.png";
import FollowMobile from "../../assets/images/home/followMobile.png";
import { FaInstagram } from "react-icons/fa";

function HomeFollowUs() {
  return (
    <>
      <div className="position-parent">
        <div className="followDesk-img">
          <Image src={FollowDesk} className="" alt="FollowDesk" />
        </div>
        <div className="followMobile-img">
          <Image src={FollowMobile} className="" alt="Followmobile" />
        </div>
      </div>
      <div className="w-100 text-center">
      <button className="home-follow-us-button follow-child">
        <FaInstagram />
        Follow us
      </button>
      </div>
    </>
  );
}

export default HomeFollowUs;
