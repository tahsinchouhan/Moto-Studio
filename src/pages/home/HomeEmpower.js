import React from "react";
import Button from "../../components/button/ButtonLight"

function HomeEmpower() {
  return (
    <>
      <div className="home-empower-img">
        <div className="home-empower-img-distance">
          <p className="home-empower-img-para d-block">
            From the heart of Chhattisgarh
          </p>
          <p className="home-empower-img-text">Empowering Tribal Women</p>
          <div className="d-flex">
           <div className="mx-auto">
           <Button text="KNOW MORE" className="home-empower-button" />
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeEmpower;
