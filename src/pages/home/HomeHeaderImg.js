import { useState, useEffect } from 'react'
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../components/button/ButtonLight"
import HomeHeader from "../../assets/images/home/homeHeaderMobile.png";
import { apipath } from '../api/apiPath';

function HomeHeaderImg() {

  const [banner, setBanner] = useState({
    bannerImg: HomeHeader,
    bannerTitle: 'Banner Title',
    bannerDesc: 'Banner Description'
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(`${apipath}/api/v1/home/banner/list`)
      .then(response => response.json())
      .then(objData => {
        if(objData?.data?.length){
          setBanner({
            bannerImg: objData?.data[0]?.images[0]?.img || HomeHeader,
            bannerTitle: objData?.data[0]?.title || 'Banner Title',
            bannerDesc: objData?.data[0]?.description || 'Banner Description'
          })
        }
      }).catch(error => console.log(error))
    }
    fetchData();
  }, [])

  return (
    <>
      {/* Mobile View */}
      <div className="home-head-img-mobile">
        <Image src={banner?.bannerImg || HomeHeader} className="w-100" alt="ss" width={1200} height={800} />
        <Container>
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={9} className="py-md-5 my-2 ">
                  <p className="home-header-head-mobile mt-md-5 mt-4 mb-0 ">
                    {/* {banner.bannerTitle} */}
                  </p>
                  <p className="home-header-para-mobile mt-3 ">
                  {/* {banner.bannerDesc} */}
                  </p>
                  <div className="col-10">
                    <div className="mb-md-5  mt-md-3 mt-4 mb-0">
                    <Button className="home-header-button" text="SHOP NOW &nbsp; &nbsp; &gt;" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* DeskTop View */}
      <div className="home-head-img" style={{background:`url(${banner.bannerImg})`,backgroundAttachment:'fixed',backgroundSize:'cover'}}>
        <div className="cg-herbal-container">
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={12} className=" my-2 ">
                  <p className="home-header-head text-center mb-0 text-md-start">
                    {banner.bannerTitle}
                  </p>
                  <p className="home-header-para text-center text-md-start">{banner.bannerDesc}</p>

                  <div className=" col-10 text-center text-md-start mx-auto ms-md-0 mb-md-5  mt-md-4 mb-0">
                    <Button className="home-header-button" text="SHOP NOW &nbsp; &nbsp; &gt;" />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomeHeaderImg;
