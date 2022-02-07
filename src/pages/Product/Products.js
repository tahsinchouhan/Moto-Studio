import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { AiFillPlusCircle } from "react-icons/ai";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
import ProductImageThree from "../../assets/images/product/productImageThree.png";
import ProductImageFour from "../../assets/images/product/productImageFour.png";
import ProductImageFive from "../../assets/images/product/productImageFive.png";
import ProductImageSix from "../../assets/images/product/productImageSix.png";

function Products() {
  return (
    <>
      <div className="all-product-heading">
        <div style={{paddingTop:"26px", paddingBottom:"40px"}}>
          <div className="store-home">
            <span>Store Home &gt; </span>
          </div>
          <div className="products-header text-center">
            <h1>All Products</h1>
           
          </div>
        </div>
      </div>
     
      <Row>
        <Col lg={3} md={3}>
          ggfhgf
        </Col>


        <Col lg={8} md={9} xs={12}>
          <Row className="justify-content-center">
            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3 mx-auto">
                <div>
                  <Image
                    src={ProductImageOne}
                    alt="Picture of the author"
                    className="w-100"
                  />
                </div>

                <h1 className="product-card-text ">Amla Murabba</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>
                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageTwo}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text">Mahua Laddu</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageThree}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text ">Wildforest Honey</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageFour}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text ">Mahua Cookies</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <span className="icon ">
                    <AiFillPlusCircle />
                  </span>
                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ paddingTop: "7%" }}  className="justify-content-center">
            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageFive}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text">Chyawanprash</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageSix}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text ">Handmad Green Tea</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageOne}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text ">Amla Murabba</h1>
                <p className="product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={8} xs={12} >
              <div className="p-3">
                <Image
                  src={ProductImageTwo}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="product-card-text">Mahua Laddu</h1>
                <p className="mt-16 product-card-para w-100">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind product-card-texts.
                </p>
                <div className="mt-2 mb-2 product-card-text1 d-flex ">
                  <span className="icon ">
                    <AiFillPlusCircle />
                  </span>
                  <div>
                    <span className="product-card-details">Product Details</span>
                  </div>
                </div>
                <span className="product-Price">₹250</span>
                <div className="mt-2">
                  <Button type="submit" className="Add-to-chart-button">
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center">
        <button type="submit" className="load-more-product">
          LOAD MORE PRODUCTS
        </button>
      </div>
        </Col>
        <Col md={1} className="d-none d-xl-block"></Col>

      </Row>
      
    </>
  );
}

export default Products;
