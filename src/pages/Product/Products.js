import React from "react";
import Link from "next/link";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Image from "next/image";
// import styless from './Product/products.css';
import sanju from "../../../public/ProductImage/ProductImage1.png";
import { BsChevronRight } from "react-icons/bs";

function Products() {
  return (
    <>
      <div>
        <div className="product-header">
          <div className="Product-home text-center">
            <Link href="/">
              <a className="nav-link-product p-4 text-dark">
                Store Home{" "}
                <span>
                  <BsChevronRight />
                </span>
              </a>
            </Link>
            <div>
              <h1 className="pt-2">All Products</h1>
            </div>
          </div>
        </div>
        <Container>
          <div>
            <Row>
              <Col md={2} lg={2}>
                <div className="product-filter-by">
                  <span>FILTER BY</span>
                  <hr />
                </div>
                <div>
                  <span className="product-category">CATEGORY</span>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="product-category-items"
                        //  for="flexCheckDefault"
                      >
                        Grocery & Gourmet Foods
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="product-category-items">
                        Beauty Products
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="product-category-items">
                        Alternative Medicine
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="product-category-items">
                        Health & Personal Care
                      </label>
                    </div>
                  </div>
                </div>
                <div></div>
              </Col>
              <Col md={10} lg={10}>
                <div className="pt-3">
                  <div className="products-38">
                    <div>
                      <span className="product-span">38 Products</span>
                    </div>
                    <div className="product-selecter">
                      <span className="product-sort-by"> SORT BY</span>
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>Featured</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <hr className="" />
                </div>

                <Row>
                  <Col md={3} lg={3}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src="/images/productOne.png" />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the cards content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={3} lg={3}>
                    kdjbf
                  </Col>
                  <Col md={3} lg={3}>
                    kdjbf
                  </Col>
                  <Col md={3} lg={3}>
                    kdjbf
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
    // <Container>
    //   <div>
    //     <h1 className="text-center">
    //       The Product
    //       <hr />
    //     </h1>
    //     <div>
    //       <Row>
    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src="/ProductImage/ProductImage1.png"
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Amla Murabba</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <span>Product Details</span>
    //           </div>
    //           <span className="mt-1 mb-1">₹250</span>
    //           <div>
    //             <Button type="submit" className="Add-to-chart-z">
    //               ADD TO CART
    //             </Button>
    //           </div>
    //         </Col>

    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src={"/ProductImage/ProductImage2.png"}
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Mahua Laddu</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <span>Product Details</span>
    //           </div>
    //           <span className="mt-1 mb-1">₹250</span>
    //           <div>
    //             <Button type="submit" className="click">
    //               ADD TO CART
    //             </Button>
    //           </div>
    //         </Col>

    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src="/ProductImage/ProductImage3.png"
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Wildforest Honey</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <span>Product Details</span>
    //           </div>

    //           <span className="mt-1 mb-1">₹250</span>
    //           <div>
    //           <Button type="submit" className="click">
    //             ADD TO CART
    //           </Button>
    //           </div>
    //         </Col>
    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src={"/ProductImage/ProductImage2.png"}
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Mahua Cookies</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <p>Product Details</p>
    //           </div>
    //           <span className="mt-1 mb-1">₹250</span>
    //           <div>
    //           <Button type="submit" className="click">
    //             ADD TO CART
    //           </Button>
    //           </div>
    //         </Col>
    //       </Row>
    //     </div>

    //     <div>
    //       <Row>
    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src="/ProductImage/ProductImage5.png"
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Chyawanprash</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <p>Product Details</p>
    //           </div>
    //           <span>₹250</span>

    //           <Button type="submit" className="click">
    //             ADD TO CART
    //           </Button>
    //         </Col>

    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src="/ProductImage/ProductImage6.png"
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Handmade Green Tea</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <p>Product Details</p>
    //           </div>
    //           <span>₹250</span>

    //           <Button type="submit" className="click">
    //             ADD TO CART
    //           </Button>
    //         </Col>
    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src="/ProductImage/ProductImage7.png"
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Amla Murabba</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <p>Product Details</p>
    //           </div>
    //           <div>
    //             <span>₹250</span>
    //           </div>

    //           <Button type="submit" className="click">
    //             ADD TO CART
    //           </Button>
    //         </Col>
    //         <Col md={3} sm={6} className="ProductImage">
    //           <Image
    //             src="/ProductImage/ProductImage8.png"
    //             alt="Picture of the author"
    //             width={197.47}
    //             height={170}
    //           />
    //           <h1 className="text">Mahua Laddu</h1>
    //           <p>
    //             Far far away, behind the word mountains, far from the countries
    //             Vokalia and Consonantia, there live the blind texts.
    //           </p>
    //           <div className="mt-1 mb-1 text1">
    //             <p>Product Details</p>
    //           </div>
    //           <span>₹250</span>

    //           <Button type="submit" className="click">
    //             ADD TO CART
    //           </Button>
    //         </Col>
    //       </Row>
    //     </div>
    //   </div>
    // </Container>
  );
}

export default Products;
