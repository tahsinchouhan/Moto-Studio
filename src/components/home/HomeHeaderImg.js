import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button/ButtonLight";
import HomeHeader from "../../assets/images/home/homeHeaderMobile.png";
import { useRouter } from "next/router";
import { apipath } from "../../pages/api/apiPath";

function HomeHeaderImg() {
  const [banner, setBanner] = useState({
    bannerImg: HomeHeader,
    bannerTitle: "Banner Title",
    bannerDesc: "Banner Description",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/home/banner/list`);
        const objData = await res.json();
          setBanner({
            bannerImg: objData.data[0]?.images[0]?.img || HomeHeader,
            bannerTitle: objData.data[0]?.title || 'Banner Title',
            bannerDesc: objData.data[0]?.description || 'Banner Description'
          })
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  const router = useRouter();

  return (
    <>
      {/* Mobile View */}
      <div
        className="home-head-img-mobile"
        style={{
          backgroundImage: `url(${banner.bannerImg})`,
          backgroundSize: "cover",
          height: 170,
        }}
      >
        {/* <Image src={banner?.bannerImg || HomeHeader} className="w-100" alt="ss" width={1200} height={800} /> */}
      </div>
      <Container className="home-head-text-mobile">
        <Row className="justify-content-md-start justify-content-center">
          <Col md={8} lg={6} className="col-10">
            <Row className="">
              <Col md={9} className="py-md-5 my-2 ">
                <p className="home-header-head-mobile mt-md-5 mt-4">
                  {banner.bannerTitle}
                </p>
                <p className="home-header-para-mobile">{banner.bannerDesc}</p>
                <div className="col-10">
                  <div
                    className="mb-md-5  mt-md-3 mt-4 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="SHOP NOW &nbsp; &nbsp; &gt;"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* DeskTop View */}
      <div
        className="home-head-img"
        style={{
          backgroundImage: `url(${banner.bannerImg})`,
          backgroundSize: "cover",
          imageRendering: "-webkit-optimize-contrast",
          imageRendering: "crisp-edges",
        }}
      >
        <div className="cg-herbal-container">
          <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={12} className="my-2">
                  <p className="home-header-head text-center mb-0 text-md-start">
                    {banner.bannerTitle}
                  </p>
                  <p className="home-header-para text-center text-md-start">
                    {banner.bannerDesc}
                  </p>

                  <div
                    className=" col-10 text-center text-md-start mx-auto ms-md-0 mb-md-5  mt-md-4 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="SHOP NOW &nbsp; &nbsp; &gt;"
                    />
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
