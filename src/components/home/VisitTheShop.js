import { useState, useEffect } from 'react'
import Image from "next/image";
import Button from "../../components/button/ButtonLight"
import { Card, Col, Container, Row } from "react-bootstrap";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
import WildforestHoney from "../../../src/assets/images/home/333.png";
import ProductImageFour from "../../assets/images/product/productImageFour.png";
import ProductImageFive from "../../assets/images/product/productImageFive.png";
import emptyImage from '../../assets/images/product/placeholder.png';
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { apipath } from '../../pages/api/apiPath';


function VisitTheShop({categoryId}) {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/product/featured/list?category=${categoryId}`);
        const objData = await res.json();
        setFeatured(objData?.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [categoryId])

  // console.log(featured);

  return (
    <>
      <Container>
        <div className="visit-the-shop-div ">
          <hr className="visit-the-shop-hr mb-5" />
          {
            featured?.length && <Row>
              <Col lg={3}>
                <Card className="VisitTheShop-cards hover-div1">
                  <Image 
                    src={featured[0]?.products_id?.images.length ? featured[0]?.products_id?.images[0]?.img || emptyImage : emptyImage} 
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
                      {featured[0]?.products_id?.title || 'Default Title'}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">{featured[0]?.products_id?.weight[0]?.weight_type?.weight_gram || 0}</Card.Text>
                      <Card.Text className="visit-card-weight">₹ {featured[0]?.products_id?.price || 0}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>

                <Card className=" VisitTheShop-cards mt-3 hover-div1">
                  <Image 
                    src={featured[1]?.products_id?.images.length ? featured[1]?.products_id?.images[0]?.img || emptyImage : emptyImage} 
                    alt="MahuaLaddu" 
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
                      {featured[1]?.products_id?.title || 'Default Title'}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">{featured[1]?.products_id?.weight[0]?.weight_type?.weight_gram || 0}</Card.Text>
                      <Card.Text className="visit-card-weight">₹ {featured[1]?.products_id?.price || 0}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={6}>
                <Card className="WildforestHoney-card hover-div1 ">
                  <div className="text-center">
                    <Image 
                      src={featured[2]?.products_id?.images.length ? featured[2]?.products_id?.images[0]?.img || emptyImage : emptyImage} 
                      alt="WildforestHoney" 
                      width={200}
                      height={360}
                      objectFit="contain"
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
                  </div>
                  <Card.Body className="p-3 pb-0 mx-2 ">
                    <Card.Title className="m-0 visit-card-title">
                      {featured[2]?.products_id?.title || 'Default Title'}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">{featured[2]?.products_id?.weight[0]?.weight_type?.weight_gram || 0}</Card.Text>
                      <Card.Text className="visit-card-weight">₹ {featured[2]?.products_id?.price || 0}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={3}>
                {" "}
                <Card className="VisitTheShop-cards hover-div1">
                  <Image 
                    src={featured[3]?.products_id?.images.length ? featured[3]?.products_id?.images[0]?.img || emptyImage : emptyImage} 
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
                      {featured[3]?.products_id?.title || 'Default Title'}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">{featured[3]?.products_id?.weight[0]?.weight_type?.weight_gram || 0}</Card.Text>
                      <Card.Text className="visit-card-weight">₹ {featured[3]?.products_id?.price || 0}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>

                <Card className=" VisitTheShop-cards mt-3 hover-div1">
                  <Image 
                    src={featured[4]?.products_id?.images.length ? featured[4]?.products_id?.images[0]?.img || emptyImage : emptyImage} 
                    alt="MahuaLaddu" 
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
                      {featured[4]?.products_id?.title || 'Default Title'}
                    </Card.Title>
                    <div className="d-flex justify-content-between">
                      <Card.Text className="visit-card-weight">{featured[4]?.products_id?.weight[0]?.weight_type?.weight_gram || 0}</Card.Text>
                      <Card.Text className="visit-card-weight">₹ {featured[4]?.products_id?.price || 0}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            </Row>
          }

          {/* <Row>
            <Col lg={3}>
              <Card className=" VisitTheShop-cards  hover-div1">
                <Image src={ProductImageOne} alt="AmlaMurabba" />
                <div className="pe-0 row hover-div bg-light">
                  <Row className="">
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end"  xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0"  xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>

                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Amla Murabba
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>

              <Card className=" VisitTheShop-cards mt-3 hover-div1">
                <Image src={ProductImageTwo} alt="MahuaLaddu" />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0" xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Mahua Laddu
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="WildforestHoney-card hover-div1 ">
                <div className="text-center">
                  <Image
                    src={WildforestHoney}
                    alt="WildforestHoney"
                    className="WildforestHoney-card-img1"
                  />
                  <div className=" row hover-div bg-light">
                    <Row>
                      <Col className="ps-2 pe-4 border-end"   xs={4}>
                        <FaEye className="icon1-hover d-inline" />
                      </Col>
                      <Col className="ps-2 pe-4 border-end"   xs={4}>
                        <FaHeart className="icon2-hover d-inline" />
                      </Col>
                      <Col className="ps-2 pe-0"   xs={4}>
                        <FaShoppingCart className="icon3-hover d-inline" />
                      </Col>
                    </Row>
                  </div>
                </div>
                <Card.Body className="p-3 pb-0 mx-2 ">
                  <Card.Title className="m-0 visit-card-title">
                    Wildforest Honey
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3}>
              {" "}
              <Card className="   VisitTheShop-cards hover-div1">
                <Image src={ProductImageFour} alt="MahuaCookies" />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col className="ps-2 pe-4 border-end"   xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end"   xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0"   xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Mahua Cookies
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
              <Card className=" VisitTheShop-cards mt-3 hover-div1">
                <Image src={ProductImageFive} alt="Chyawanprash" />
                <div className=" row hover-div bg-light">
                  <Row>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaEye className="icon1-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-4 border-end" xs={4}>
                      <FaHeart className="icon2-hover d-inline" />
                    </Col>
                    <Col className="ps-2 pe-0" xs={4}>
                      <FaShoppingCart className="icon3-hover d-inline" />
                    </Col>
                  </Row>
                </div>
                <Card.Body className="p-3 pb-0">
                  <Card.Title className="m-0 visit-card-title">
                    Chyawanprash
                  </Card.Title>
                  <div className="d-flex justify-content-between">
                    <Card.Text className="visit-card-weight">500g</Card.Text>
                    <Card.Text className="visit-card-weight">₹360</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row> */}
          
          <div className="text-center my-5">
          <Button className="home-visit-shop" text="VISIT THE SHOP &nbsp; &gt;" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default VisitTheShop;
