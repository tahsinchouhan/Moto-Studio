import { useState, useEffect } from 'react'
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import shaheed from "../../assets/images/about/shaheed.png";
import scholarships from "../../assets/images/about/scholarship.png";
import crop from "../../assets/images/about/crop.png";
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
        {/* <div >
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
                      className="about-empower-carousel-padding " 
                      alt={row.title} 
                      width={400} height={320} 
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
        </div> */}

        <div >
          <p className="about-empowered-heading">Social Upliftment</p>
          <hr className="about-empowered-top-hr mx-auto mt-3"></hr>
        </div>
        <div className="container about-carousel-conatiner mt-5 mb-5">
          <Slider {...settings}>
          <div className="text-center">
                  <div className="text-center">
                    <Image 
                      src={shaheed}
                      className="about-empower-carousel-padding" 
                      alt= "Images" 
                      width={400} height={400} 
                      objectFit="cover"
                      unoptimized={true}
                      loading="eager"
                    />
                    <p className="empowered-carousel-text text-start ms-4" style={{marginTop:"-20px"}}>
                    <b>SHAHEED MAHENDRA KARMASOCIAL SECURITY SCHEME:</b>
                    <br />
                    <b>FY: 2020-21</b> | Beneficiaries: 355 | 
                    <br />
                    Amount : Rs. 5.33 Cr
                    <br />
                    <b>FY: 2021-22</b> | Beneficiaries: 3472 | 
                    <br />
                    Amount: Rs. 52.19 Cr.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div>
                    <Image 
                      src={scholarships}
                      className="about-empower-carousel-padding" 
                      alt= "Images" 
                      width={400} height={400} 
                      objectFit="cover"
                      unoptimized={true}
                      loading="eager"
                    />
                    <p className="empowered-carousel-text text-start ms-4" style={{marginTop:"-20px"}}>
                    <b>SCHOLARSHIPS FOR CHILDREN OF COOPERATIVE MEMBERS:</b>
                    <br />
                    <b>FY: 2020-21</b> | Beneficiaries: 8451 | 
                    <br />
                    Amount : Rs. 9.29 Cr
                    <br />
                    <b>FY: 2021-22</b> | Beneficiaries: 3219 | 
                    <br />
                    Amount: Rs. 1.31 Cr.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div>
                    <Image 
                      src={crop}
                      className="about-empower-carousel-padding" 
                      alt= "Images" 
                      width={400} height={400} 
                      objectFit="cover"
                      unoptimized={true}
                      loading="eager"
                    />
                    <p className="empowered-carousel-text text-start ms-4" style={{marginTop:"-20px"}}>
                    <b>CROP INSURANCE AND LOAN WITH SUBSIDISED INTEREST SCHEME FOR LAC GROWERS</b>
                    </p>
                  </div>
                </div>
                
                
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
