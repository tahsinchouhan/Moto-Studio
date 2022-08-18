import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../components/button/ButtonLight";
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
import WildforestHoney from "../../../src/assets/images/home/333.png";
import ProductImageFour from "../../assets/images/product/productImageFour.png";
import ProductImageFive from "../../assets/images/product/productImageFive.png";
import emptyImage from "../../assets/images/product/placeholder.png";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { apipath } from "../../pages/api/apiPath";
import { useRouter } from "next/router";

function VisitTheShop({ categoryId }) {
  const [featured, setFeatured] = useState([]);
  // console.log("feturedData :>> ", featured[0]?.products_id?.weight[0]?.price);
  const router = useRouter();

  useEffect(() => {
    if (!categoryId) return false;
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${apipath}/api/v1/product/featured/list?category=${categoryId}`
        );
        const objData = await res.json();
        setFeatured(objData?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [categoryId]);

  // console.log(featured);

  return (
    <>
      <Container>
        {/* <div className="grid-container">
        { featured?.length ? featured.slice(0, 5).map((elem,index) => (
            <div key={index} className={`grid-item-${index} border`}>
              <Card className="VisitTheShop-cards hover-div1">
                <Image 
                  src={elem?.products_id?.images.length ? elem?.products_id?.images[0]?.img || emptyImage : emptyImage} 
                  alt="AmlaMurabba" 
                  width={100}
                  height={180}
                  objectFit="cover"
                />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                    <Card.Title className="m-0 visit-card-title">
                      {elem?.products_id?.title || 'Default Title'}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">{elem?.products_id?.weight[0]?.weight_type?.weight_gram || 0}</Card.Text>
                      <Card.Text className="visit-card-weight">₹ {elem?.products_id?.price || 0}</Card.Text>
                    </div>
                  </Card.Body>
              </Card>
            </div>
        )) : null }
        </div> */}

        <style jsx>{`
          .grid-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(150px, auto);
            grid-gap: 20px;
            padding: 10px;
          }

          .grid-item-1 {
            grid-column-start: 1;
            grid-column-end: 2;
            grid-row-start: 2;
            grid-row-end: 3;
          }

          .grid-item-2 {
            grid-column-start: 2;
            grid-column-end: 4;
            grid-row-start: 1;
            grid-row-end: 3;
          }

          @media (max-width: 600px) {
            .grid-item-2 {
              grid-column-start: 1;
              grid-column-end: 1;
              grid-row-start: 2;
              grid-row-end: 3;
            }
          }
        `}</style>

        <div className="visit-the-shop-div ">
          <hr className="visit-the-shop-hr mb-5" />
          {featured?.length ? (
            <Row>
              <Col lg={3}>
                <Card
                  className="VisitTheShop-cards"
                  onClick={() =>
                    router.push(
                      `./product/${featured[0]?.products_id?._id || ""}`
                    )
                  }
                >
                  <Image
                    src={
                      featured[0]?.products_id?.images.length
                        ? featured[0]?.products_id?.images[0]?.img || emptyImage
                        : emptyImage
                    }
                    alt="AmlaMurabba"
                    width={'300px'}
                    height={'300px'}
                    objectFit="fill"
                    unoptimized={true}
                    loading="eager"
                    className="featured-card-image-for-overlay"
                    quality={100}
                  />
                  <div className="content-for-overlay">
                    <div className="text">SHOP NOW</div>
                  </div>
                  <div className=" row hover-div bg-light">
                    <Row>
                      <Col xs={4}>
                        <FaEye className="icon1-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaHeart className="icon2-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaShoppingCart className="icon3-hover d-inline" />
                      </Col>
                    </Row>
                  </div>

                  <Card.Body className="p-3 pb-0">
                    <Card.Title className="m-0 visit-card-title">
                      {featured[0]?.products_id?.title || "Default Title"}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">
                        {featured[0]?.products_id?.weight[0]?.weight_type
                          ?.weight_gram || 0}
                      </Card.Text>
                      <Card.Text className="visit-card-weight" style={{color:"#5ABF6B"}}>
                        ₹ {featured[0]?.products_id?.weight[0]?.price || 0}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>

                <Card
                  className="VisitTheShop-cards mt-3"
                  onClick={() =>
                    router.push(
                      `./product/${featured[1]?.products_id?._id || ""}`
                    )
                  }
                >
                  <Image
                    src={
                      featured[1]?.products_id?.images.length
                        ? featured[1]?.products_id?.images[0]?.img || emptyImage
                        : emptyImage
                    }
                    alt="MahuaLaddu"
                    width={'300px'}
                    height={'300px'}
                    objectFit="fill"
                    unoptimized={true}
                    loading="eager"
                    className="featured-card-image-for-overlay"
                    quality={100}
                  />
                  <div className="content-for-overlay">
                    <div className="text">SHOP NOW</div>
                  </div>
                  <div className=" row hover-div bg-light">
                    <Row>
                      <Col xs={4}>
                        <FaEye className="icon1-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaHeart className="icon2-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaShoppingCart className="icon3-hover d-inline" />
                      </Col>
                    </Row>
                  </div>
                  <Card.Body className="p-3 pb-0">
                    <Card.Title className="m-0 visit-card-title">
                      {featured[1]?.products_id?.title || "Default Title"}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">
                        {featured[1]?.products_id?.weight[0]?.weight_type
                          ?.weight_gram || 0}
                      </Card.Text>
                      <Card.Text className="visit-card-weight" style={{color:"#5ABF6B"}}>
                        ₹ {featured[1]?.products_id?.weight[0]?.price || 0}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card
                  className="WildforestHoney-card"
                  onClick={() =>
                    router.push(
                      `./product/${featured[2]?.products_id?._id || ""}`
                    )
                  }
                >
                  <div className="text-center centered">
                    <Image
                      src={
                        featured[2]?.products_id?.images.length
                          ? featured[2]?.products_id?.images[0]?.img ||
                            emptyImage
                          : emptyImage
                      }
                      alt="WildforestHoney"
                      width={580}
                      height={460}
                      // loading="lazy"
                      // layout="fill"
                      objectFit="fill"
                      unoptimized={true}
                      loading="eager"
                      className="featured-card-image-for-overlay"
                      quality={100}
                    />
                    <div className="content-for-overlay content-for-overlay-big">
                      <div className="text">SHOP NOW</div>
                    </div>
                    <div className=" row hover-div bg-light">
                      <Row>
                        <Col xs={4}>
                          <FaEye className="icon1-hover d-inline" />
                        </Col>
                        <Col xs={4}>
                          <FaHeart className="icon2-hover d-inline" />
                        </Col>
                        <Col xs={4}>
                          <FaShoppingCart className="icon3-hover d-inline" />
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <Card.Body className="p-3 pb-0 ">
                    <Card.Title className="m-0 visit-card-title">
                      {featured[2]?.products_id?.title || "Default Title"}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">
                        {featured[2]?.products_id?.weight[0]?.weight_type
                          ?.weight_gram || 0}
                      </Card.Text>
                      <Card.Text className="visit-card-weight" style={{color:"#5ABF6B"}}>
                        ₹ {featured[2]?.products_id?.weight[0]?.price || 0}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3}>
                {" "}
                <Card
                  className="VisitTheShop-cards"
                  onClick={() =>
                    router.push(
                      `./product/${featured[3]?.products_id?._id || ""}`
                    )
                  }
                >
                  <Image
                    src={
                      featured[3]?.products_id?.images.length
                        ? featured[3]?.products_id?.images[0]?.img || emptyImage
                        : emptyImage
                    }
                    alt="AmlaMurabba"
                    width={'300px'}
                    height={'300px'}
                    objectFit="fill"
                    loading="lazy"
                    className="featured-card-image-for-overlay"
                    quality={100}
                  />
                  <div className="content-for-overlay">
                    <div className="text">SHOP NOW</div>
                  </div>
                  <div className=" row hover-div bg-light">
                    <Row>
                      <Col xs={4}>
                        <FaEye className="icon1-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaHeart className="icon2-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaShoppingCart className="icon3-hover d-inline" />
                      </Col>
                    </Row>
                  </div>

                  <Card.Body className="p-3 pb-0">
                    <Card.Title className="m-0 visit-card-title">
                      {featured[3]?.products_id?.title || "Default Title"}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">
                        {featured[3]?.products_id?.weight[0]?.weight_type
                          ?.weight_gram || 0}
                      </Card.Text>
                      <Card.Text className="visit-card-weight" style={{color:"#5ABF6B"}}>
                        ₹ {featured[3]?.products_id?.weight[0]?.price || 0}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                <Card
                  className=" VisitTheShop-cards mt-3"
                  onClick={() =>
                    router.push(
                      `./product/${featured[4]?.products_id?._id || ""}`
                    )
                  }
                >
                  <Image
                    src={
                      featured[4]?.products_id?.images.length
                        ? featured[4]?.products_id?.images[0]?.img || emptyImage
                        : emptyImage
                    }
                    alt="MahuaLaddu"
                    width={'300px'}
                    height={'300px'}
                    objectFit="fill"
                    loading="lazy"
                    className="featured-card-image-for-overlay"
                    quality={100}
                  />
                  <div className="content-for-overlay">
                    <div className="text">SHOP NOW</div>
                  </div>
                  <div className=" row hover-div bg-light">
                    <Row>
                      <Col xs={4}>
                        <FaEye className="icon1-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaHeart className="icon2-hover d-inline" />
                      </Col>
                      <Col xs={4}>
                        <FaShoppingCart className="icon3-hover d-inline" />
                      </Col>
                    </Row>
                  </div>
                  <Card.Body className="p-3 pb-0">
                    <Card.Title className="m-0 visit-card-title">
                      {featured[4]?.products_id?.title || "Default Title"}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">
                        {featured[4]?.products_id?.weight[0]?.weight_type
                          ?.weight_gram || 0}
                      </Card.Text>
                      <Card.Text className="visit-card-weight" style={{color:"#5ABF6B"}}>
                        ₹ {featured[4]?.products_id?.weight[0]?.price || 0}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ) : null}

          <div
            className="text-center my-5"
            onClick={() => router.push("/product")}
          >
            <Button
              className="home-visit-shop"
              text="VISIT THE SHOP &nbsp; &gt;"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default VisitTheShop;
