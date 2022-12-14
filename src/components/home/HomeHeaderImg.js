import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeHeader from "../../assets/images/home/homeHeaderMobile.png";
import { apipath } from "../../pages/api/apiPath";
import Button from "../button/ButtonLight";

function HomeHeaderImg({ category }) {
  const [banner, setBanner] = useState({
    bannerImg: HomeHeader,
    bannerTitle: "Detailing is not a skill, It's an Attitude!",
    bannerDesc:
      "The forest grows and the forest provides . The women of the forest procure and create. Each product is handcrafted with care and love by the empowered women of these forest areas, endowing each product with a purity that is truly priceless.",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/home/banner/list`);
        const objData = await res.json();
        setBanner({
          bannerImg: objData.data[0]?.images[0]?.img || HomeHeader,
          bannerTitle:
            objData.data[0]?.titles ||
            " Detailing is not a skill, It's an Attitude!",
          bannerDesc:
            objData.data[0]?.description ||
            "The forest grows and the forest provides . The women of the forest procure and create. Each product is handcrafted with care and love by the empowered women of these forest areas, endowing each product with a purity that is truly priceless.",
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const router = useRouter();

  // let categories = category?.filter((cat, index) => index < 4);

  return (
    <>
      {/* Mobile View */}
      <div
        className="home-head-img-mobile"
        style={{
          // backgroundImage: `url(${banner.bannerImg})`,
          backgroundImage: `/public/images/carbanner.jpg`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "75% 100%",
          height: "369px",
        }}
      >
        {/* <Image src={banner?.bannerImg || HomeHeader} className="w-100" alt="ss" width={1200} height={800} /> */}
      </div>
      <Container className="home-head-text-mobile">
        <Row className="justify-content-md-start justify-content-center">
          <Col md={8} lg={6} className="col-12">
            <Row className="mx-sm-auto">
              {/* <Col md={9} className="py-md-5 my-2 ">
                <p className="home-header-head-mobile mt-md-5 mt-4">
                  {banner.bannerTitle} 
                </p>
                <p className="home-header-para-mobile">{banner.bannerDesc}</p>
                <div className="col-10">
                  <div
                    className="mb-md-5  mt-md-3 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="SHOP NOW &nbsp; &nbsp; &gt;"
                    />
                  </div>
                  ???Detailing is not a skill,
It's an Attitude!???

                </div>
              </Col> */}
              <Col md={9} className="py-md-5 my-2">
                <p className="home-header-head-mobile mt-md-5 mt-4">
                  Detailing <br />
                  is not <br /> a skill
                </p>
                {/* <div className="col-12 mt-3">
                  <p className="home-header-para-mobile">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div> */}
                <div className="">
                  <p className="home-eco-friendly-mobile">
                    Eco-friendly products from one of the largest women
                    empowerment efforts in the world{" "}
                    {/* ECO-FRIENDLY PRODUCTS FROM ONE OF THE LARGEST WOMEN
                    EMPOWERMENT EFFORTS IN THE WORLD{" "} */}
                  </p>
                  <p style={{ marginTop: "32px" }}>
                    Each product is handcrafted with care and love by the
                    empowered women of these forest areas, endowing each product
                    with a purity that is truly priceless.
                  </p>
                </div>
                <div className="col-12 ">
                  <div
                    className="mb-md-5  mt-md-3 mb-0 home-header-button-mobile"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button "
                      text="JOIN THE ECO-REVOLUTION &nbsp; &nbsp; &gt;"
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
          backgroundImage: `url(/images/carbanner.jpg)`,
          backgroundSize: "cover",
          imageRendering: "-webkit-optimize-contrast",
          imageRendering: "crisp-edges",
        }}
      >
        <div className="cg-herbal-container">
          {/* <Row className=" justify-content-md-start justify-content-center">
            <Col md={8} lg={6} className="col-10">
              <Row className="">
                <Col md={12} className="my-2">
                  <div>
                    <p className="home-header-head text-center mb-0 text-md-start">
                      {banner.bannerTitle}
                    </p>
                  </div>
                  <div>
                  <p className="home-header-para text-center text-md-start">
                    {banner.bannerDesc}
                  </p>
                  </div>

                  <div
                    className=" col-10 text-center text-md-start mx-auto ms-md-0 mb-md-5  mt-md-4 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="JOIN THE ECO-REVOLUTION      > &nbsp; &nbsp; &gt;"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}

          <Row className="justify-content-md-start justify-content-center">
            <Col md={12} lg={8} className="col-10">
              <Row className="">
                <Col md={12}>
                  <div>
                    <p className="home-header-head text-center mb-0 text-md-start">
                      Detailing is not a skill
                      <br /> It's an Attitude!
                    </p>
                  </div>
                  <div className="">
                    <p className="home-eco-friendly col-lg-12">
                      Welcome to The Detailing Mafia: One-Stop Solution to All
                      Your Car Care Problems.
                    </p>
                    <p className="home-eco-friendly col-lg-12">
                      ???Perfection is in the Detail???, this is what we believe in
                    </p>
                    <p
                      className="home-header-para-desc text-center text-md-start"
                      style={{ marginTop: "32px" }}
                    >
                      We are called ???The King of the Detailing World??? by the
                      Automotive
                    </p>
                    <p className="home-header-para-desc text-center text-md-start">
                      Detailing Industry. Our skilled and trained personnel have
                      turned
                    </p>
                    <p className="home-header-para-desc text-center text-md-start pb-4">
                      ordinary looking cars into Fabulous-looking Ones.
                    </p>
                  </div>

                  <div
                    className="col-10 text-center text-md-start mx-auto ms-md-0 mb-0"
                    onClick={() => router.push("/product")}
                  >
                    <Button
                      className="home-header-button"
                      text="JOIN THE ECO-REVOLUTION     &nbsp; &nbsp; &gt;"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      <Row className="BannerBottomImagesRow mx-2" style={{ marginTop: "-5px" }}>
        <Col
          md={6}
          className="BannerBottomImages px-2 col-lg-3 BannerBottomImages-media-query-mobile"
        >
          <Link href={`/product/category/62eb7f05d7cf5491c3af7325`}>
            <div className="SubImageContainer">
              <Image
                src={"/Picture/1.jpeg"}
                width={349}
                height={190}
                className=""
                alt="ss"
                style={{ width: "349px", height: "190px", objectFit: "cover" }}
              />
              <p className="bottom-left left-4"></p>
            </div>
          </Link>
        </Col>
        <Col
          md={6}
          className="BannerBottomImages px-2 mb-2 col-lg-3 BannerBottomImages-media-query-mobile"
        >
          {/*  */}
          <Link href={`/product/category/61effa6f1a880a62b8284270`}>
            <div className="SubImageContainer">
              <Image
                src={"/Picture/2.jpeg"}
                width={349}
                height={190}
                className=""
                alt="ss"
                style={{ width: "349px", height: "190px", objectFit: "cover" }}
              />
              <p className="bottom-left left-4"></p>
            </div>
          </Link>
        </Col>
        <Col
          md={6}
          className="BannerBottomImages  px-2 mb-2 col-lg-3 BannerBottomImages-media-query-mobile-snav "
        >
          <Link href={`/product/category/61effa8d1a880a62b8284272`}>
            <div className="SubImageContainer">
              <Image
                src={"/Picture/3.jpeg"}
                width={349}
                height={190}
                className=""
                alt="ss"
                style={{ width: "349px", height: "190px", objectFit: "cover" }}
              />
              <p className="bottom-left left-4"></p>
            </div>
          </Link>
        </Col>
        {/*  */}
        <Col
          md={6}
          className="BannerBottomImages px-2 col-lg-3 BannerBottomImages-media-query-mobile-tnav"
        >
          <Link href={`/product/category/61effaa01a880a62b8284274`}>
            <div className="SubImageContainer">
              <Image
                src={"/Picture/4.jpeg"}
                width={349}
                height={190}
                className=""
                alt="ss"
                style={{ width: "349px", height: "190px", objectFit: "cover" }}
              />
              <p className="bottom-left left-4"></p>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
}

export default HomeHeaderImg;
