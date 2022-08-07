import React from "react";
import { Button } from "react-bootstrap";

function ButtonLight(prop) {
  return (
    <>
      <div className="">
        <Button className="visit-the-shop-button ">
          {prop.icon}
          {prop.text}
        </Button>
      </div>
    </>
  );
}

export default ButtonLight;
