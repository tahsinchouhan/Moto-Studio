import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import { AiFillPlusCircle } from "react-icons/ai";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImage2 from "../../Assets/images/product/ProductImage2.png";
import ProductImage3 from "../../Assets/images/product/ProductImage3.png";
import ProductImage4 from "../../Assets/images/product/ProductImage4.png";
import ProductImage5 from "../../Assets/images/product/ProductImage5.png";
import ProductImage6 from "../../Assets/images/product/ProductImage6.png";
import ProductImage7 from "../../Assets/images/product/ProductImage7.png";
import ProductImage8 from "../../Assets/images/product/ProductImage8.png";
function Products() {
  return (
    <>
      <div className="all-product-heading">
        <div className="store-home">
          <h6>Store Home &gt; </h6>
        </div>
        <div className="header">
          <h1>All Products</h1>
        </div>
      </div>
      <Row>
        <Col lg={3} md={3}>
          ggfhgf
        </Col>
        <Col lg={8}>
          <Row>
            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <div>
                  <Image
                    src={ProductImageOne}
                    alt="Picture of the author"
                    className="w-100"
                  />
                </div>

                <h1 className="text mb-3">Amla Murabba</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>
                  <div>
                    <span>Product Details</span>
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
            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage2}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Mahua Laddu</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span>Product Details</span>
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

            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage3}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Wildforest Honey</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span>Product Details</span>
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

            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage4}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Mahua Cookies</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <span className="icon ">
                    <AiFillPlusCircle />
                  </span>
                  <div>
                    <span>Product Details</span>
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
          <Row style={{ paddingTop: "7%" }}>
            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage5}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Chyawanprash</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span>Product Details</span>
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
            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage6}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Handmad Green Tea</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span>Product Details</span>
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

            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage7}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Amla Murabba</h1>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <div>
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                  </div>

                  <div>
                    <span>Product Details</span>
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
            <Col lg={3}>
              <div style={{ width: "256px", height: "456px" }}>
                <Image
                  src={ProductImage8}
                  alt="Picture of the author"
                  className="w-100"
                />
                <h1 className="text  mb-3">Mahua Laddu</h1>
                <p className="mt-16">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div className="mt-2 mb-2 text1 d-flex ">
                  <span className="icon ">
                    <AiFillPlusCircle />
                  </span>
                  <div>
                    <span>Product Details</span>
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
        </Col>
        <Col lg={1}>ghgf</Col>
      </Row>
      <div className="text-center">
        <button type="submit" className="load-more-product">
          LOAD MORE PRODUCTS
        </button>
      </div>
    </>
  );
}

export default Products;
