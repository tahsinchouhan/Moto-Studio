import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import SGHONE from "../../assets/images/about/SHGONE.png";
import Image from "next/image";
import { apipath } from '../../pages/api/apiPath';

function EmpoweredGroup() {
  const [empoeredData, setEmpoeredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/about/empowerd/list`);
        const objData = await res.json();
        if (objData.length) {
          setEmpoeredData(objData)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

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
      <Container className="about-empowered-container">
        <div >
          <p className="about-empowered-heading">Empowered Groups</p>
          <hr className="about-empowered-top-hr mx-auto mt-3"></hr>
        </div>
        <div className="container about-carousel-conatiner mt-5 mb-5">
          <Slider {...settings}>
            {
              empoeredData.length && empoeredData.map(row=>{
                return <div className="text-center" key={row._id}>
                  <div>
                    <Image 
                      src={row?.images[0]?.img || SGHONE} 
                      className="about-empower-carousel-padding rounded-circle" 
                      alt={row.title} 
                      width={400} height={400} 
                      objectFit="cover"
                      unoptimized={true}
                      loading="eager"
                      />
                    <p className="empowered-carousel-text">{row?.title || 'Title'}</p>
                  </div>
                </div>
              })
            }
          </Slider>
        </div>
      </Container>
      <div> 
      <hr className="about-empower-hr mx-auto "  />
      </div>
    </>
  );
}

export default EmpoweredGroup;
