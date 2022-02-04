import React from "react";
import Image from "next/image";
import BeautyProducts from "../../assets/images/home/1 (1).png";
import AlternativeMedicine from "../../assets/images/home/1 (2).png";
import HealthPersonalCare from "../../assets/images/home/1 (3).png";
import GourmetFoods from "../../assets/images/home/1 (4).png";

function FeaturedProducts() {
  return (
    <>
      <h1 className="text-center mb-2 mt-5">Featured Products</h1>
      <div className="text-center">
        <hr className="text-center mb-5  Featured-products-hr m-auto" />
      </div>

      <div className="overflow-style">
        <div className="image-div1">
          <div className="mb-5 image-div">
            <Image
              src={GourmetFoods}
              alt="GourmetFoods"
              className="rounded-circle"
            />
            <h5>Gourmet Foods</h5>
          </div>

          <div className="mb-5 image-div">
            <Image
              src={BeautyProducts}
              alt="BeautyProducts"
              className="rounded-circle"
            />{" "}
            <h5>Beauty Products</h5>
          </div>

          <div className="mb-5 image-div">
            <Image
              src={AlternativeMedicine}
              alt="AlternativeMedicine"
              className="rounded-circle"
            />{" "}
            <h5>
              Alternative <br /> Medicine
            </h5>
          </div>

          <div className="mb-5 image-div">
            <Image
              src={HealthPersonalCare}
              alt="HealthPersonalCare"
              className="rounded-circle"
            />{" "}
            <h5>
              Health &amp; <br /> Personal Care
            </h5>
          </div>
        </div>
      </div>
      <hr className="Featured-products-bottom-hr" />
    </>
  );
}

export default FeaturedProducts;
