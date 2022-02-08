import React from "react";
import Image from "next/image";
import BeautyProducts from "../../assets/images/home/1 (1).png";
import AlternativeMedicine from "../../assets/images/home/1 (2).png";
import HealthPersonalCare from "../../assets/images/home/1 (3).png";
import GourmetFoods from "../../assets/images/home/1 (4).png";

function FeaturedProducts() {
  return (
    <>
      <h1 className="text-center mb-2 mt-5 feature-products-text">
        Featured Products
      </h1>
      <div className="text-center">
        <hr className="text-center mb-5  Featured-products-hr m-auto" />
      </div>

      <div className="overflow-style">
        <div className="image-div1">
          <div className=" image-div">
            <div className=" rounded-circle  ">
              <Image
                src={GourmetFoods}
                alt="GourmetFoods"
                className="rounded-circle  hover1 "
              />
              <p className=" feature-products-texts p-1 ">Gourmet Foods</p>
            </div>
          </div>

          <div className=" image-div">
            <Image
              src={BeautyProducts}
              alt="BeautyProducts"
              className="rounded-circle hover1"
            />
            <p className=" feature-products-texts p-1 ">Beauty Products</p>
          </div>

          <div className=" image-div">
            <Image
              src={AlternativeMedicine}
              alt="AlternativeMedicine"
              className="rounded-circle hover1"
            />
            <p className=" feature-products-texts p-1 ">
              Alternative <br /> Medicine
            </p>
          </div>

          <div className=" image-div">
            <Image
              src={HealthPersonalCare}
              alt="HealthPersonalCare"
              className="rounded-circle hover1"
            />
            <p className=" feature-products-texts p-1 ">
              Health &amp; <br /> Personal Care
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProducts;
