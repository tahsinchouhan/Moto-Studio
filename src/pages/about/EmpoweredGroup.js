import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SGHONE from "../../assets/images/about/SHGONE.png";
import SGHTWO from "../../assets/images/about/SHGTWO.png";
import SGHTHREE from "../../assets/images/about/SHGTHREE.png";
import Image from "next/image";

function EmpoweredGroup() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <div>
          <Slider {...settings}>
            <div className="text-center">
              <Image src={SGHONE} className="w-75" alt="" />
            </div>
            <div className="text-center">
              <Image src={SGHTWO} className="P-4" alt="" />
            </div>
            <div className="text-center">
              <Image src={SGHTHREE} className="P-4" alt="" />
            </div>
            <div className="text-center">
              <Image src={SGHONE} className="P-4" alt="" />
            </div>
            <div className="text-center">
              <Image src={SGHTWO} className="P-4" alt="" />
            </div>
            <div className="text-center">
              <Image src={SGHTHREE} className="P-4" alt="" />
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default EmpoweredGroup;
