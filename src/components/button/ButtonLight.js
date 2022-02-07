import React from "react";
import { Button } from "react-bootstrap";

function ButtonLight(prop) {
  return (
    <>
      <div className="text-center">
        <Button className="visit-the-shop-button px-4 py-2 my-5">
        {prop.text}
        </Button>
      </div>
    </>
  );
}

export default ButtonLight;
