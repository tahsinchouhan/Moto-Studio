import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
// import { BsXLg } from 'react-icons/bs';
import ButtonDark from "../../components/button/ButtonDark";
import image1 from "../../assets/images/product/image1.png";
import Popup from "../../pages/Product/PopUp";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import { MdLocalShipping } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

function ProductDetail() {
    const [showPopuUp, setShowPopUp] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const popupHandler = () => {
      setShowPopUp(true);
    };
    const closeHander = () => {
      setShowPopUp(false);
    };

  return (
    <>
      <div className="all-product-heading">
        <div style={{ paddingTop: "26px", paddingBottom: "40px" }}>
          <div className="store-home">
            <span>Store Home &gt; </span>
          </div>
          <div className="products-header text-center">
            <h1 className="product-name-head-text">Product Name</h1>
          </div>
        </div>
      </div>

      <div className="my-5 d-flex">
        <div className="popup-div mx-auto">
          <Row className="popup-modal-main p-0">
            <Col xs={12} md={7}>
              <div className="p-3 p-md-2">
                <h1 className="product-name-text">Product Name</h1>
                <p className="popup-paragraph1">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul>

                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul>

                <div className="mb-4">
                  <p className="popup-paragraph2 fw-bold">
                    CHOOSE YOUR QUANTITY
                  </p>
                  <Row className="px-0">
                    <Col xs={3} sm={3} className="sanju ">
                      <div className="product-radio-div py-2">
                        <div className="ss">
                          <input
                            className="product-radio "
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label className="form-check-label ps-1 productName-kg">
                            250 g
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} className="sanju ">
                      <div className="product-radio-div  py-2">
                        <input
                          className=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label ps-1 productName-kg">500 g</label>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} className="sanju ">
                      <div className="product-radio-div  py-2">
                        <input
                          className=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label ps-1 productName-kg">1 kg</label>
                      </div>
                    </Col>
                    <Col xs={3} sm={3} className="sanju ">
                      <div className="product-radio-div p-2">
                        <input
                          className=""
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label className="form-check-label ps-1 productName-kg">5 kg</label>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="border">
                  <Row>
                    <Col xs={9} sm={9}>
                      <p className="productName-counter-para  my-2">
                        Select No. of units
                      </p>
                    </Col>

                    <Col
                      xs={1}
                      sm={1}
                      className="productName-counter-pm-sign text-center my-0 py-2"
                    >
                      +
                    </Col>
                    <Col xs={1} sm={1}>
                      <p className="productName-counter-no  my-2">0</p>
                    </Col>
                    <Col
                      xs={1}
                      sm={1}
                      className="productName-counter-pm-sign text-center my-0 py-2"
                    >
                      -
                    </Col>
                  </Row>
                </div>

                <div className="my-3">
                  <Row>
                    <Col xs={6}>
                      <ButtonDark text="ADD TO CART" />
                    </Col>
                  </Row>
                </div>

                <p className="productName-shipping-para py-2">
                    <MdLocalShipping/>  Free shipping across India, and a risk-free quality guarantee!
                </p>

              </div>
            </Col>
            <Col xs={6} md={5} className="popup-modal-img m-auto ">
              <div>
                <Image src={image1} width={349} height={482} alt="image1" />
              </div>
            </Col>
            {/* <Col xs={6} md={1}>x</Col> */}
          </Row>
        </div>
      </div>


            <Container>
            <div className="mb-5">
            <p className="productName-extra-product">You may also like</p>
            <Row className="justify-content-center">
            <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <div className="w-100">
                    <Image
                      src={ProductImageOne}
                      alt="Picture of the author"
                      className="w-100"
                    />
                  </div>

                  <h1 className="product-card-text ">Amla Murabba</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle  onClick={()=>popupHandler()}/>
                      </span>
                    </div>
                    <div>
                    <Popup showPopuUp={showPopuUp} close={closeHander}/>

                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                    <ButtonDark type="submit" className="Add-to-cart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col> 

              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <div className="w-100">
                    <Image
                      src={ProductImageOne}
                      alt="Picture of the author"
                      className="w-100"
                    />
                  </div>

                  <h1 className="product-card-text ">Amla Murabba</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle  onClick={()=>popupHandler()}/>
                      </span>
                    </div>
                    <div>
                    <Popup showPopuUp={showPopuUp} close={closeHander}/>

                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                    <ButtonDark type="submit" className="Add-to-cart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col> 

              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <div className="w-100">
                    <Image
                      src={ProductImageOne}
                      alt="Picture of the author"
                      className="w-100"
                    />
                  </div>

                  <h1 className="product-card-text ">Amla Murabba</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle  onClick={()=>popupHandler()}/>
                      </span>
                    </div>
                    <div>
                    <Popup showPopuUp={showPopuUp} close={closeHander}/>

                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                    <ButtonDark type="submit" className="Add-to-cart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col> 

              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <div className="w-100">
                    <Image
                      src={ProductImageOne}
                      alt="Picture of the author"
                      className="w-100"
                    />
                  </div>

                  <h1 className="product-card-text ">Amla Murabba</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle  onClick={()=>popupHandler()}/>
                      </span>
                    </div>
                    <div>
                    <Popup showPopuUp={showPopuUp} close={closeHander}/>

                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                    <ButtonDark type="submit" className="Add-to-cart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col> 
            </Row>

        </div>

            </Container>
      
    </>
  );
}

export default ProductDetail;
