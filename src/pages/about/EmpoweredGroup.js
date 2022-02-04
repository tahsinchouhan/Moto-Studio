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
        <div className="container about-carousel-conatiner mt-5 mb-5">
          <Slider {...settings}>
            <div className="text-center">
              <div>
              <Image src={SGHONE} className="p-5" alt="" />
              <p className="empowered-carousel-text">SHG Name 1</p>
              </div>
            </div>
            <div className="text-center">
              <div>
              <Image src={SGHTWO} className="p-5" alt="" />
              <p className="empowered-carousel-text">SHG Name 2</p>
              </div>
            </div>
            <div className="text-center">
              <div>
              <Image src={SGHTHREE} className="p-5" alt="" />
              <p className="empowered-carousel-text">SHG Name 3</p>
              </div>
            </div>
            <div className="text-center">
              <div>
              <Image src={SGHONE} className="p-5" alt="" />
              <p className="empowered-carousel-text">SHG Name 1</p>
              </div>
            </div>
            <div className="text-center">
              <div>
              <Image src={SGHTWO} className="p-5" alt="" />
              <p className="empowered-carousel-text">SHG Name 2</p>
              </div>
            </div>
            <div className="text-center">
              <div>
              <Image src={SGHTHREE} className="p-5" alt="" />
              <p className="empowered-carousel-text">SHG Name 3</p>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default EmpoweredGroup;
