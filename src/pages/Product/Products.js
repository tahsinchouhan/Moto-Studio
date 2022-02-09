import React,{useState} from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Image from "next/image";
import ButtonDark from "../../components/button/ButtonDark";
import ButtonLight from "../../components/button/ButtonLight"
import { AiFillPlusCircle } from "react-icons/ai";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
import ProductImageThree from "../../assets/images/product/productImageThree.png";
import ProductImageFour from "../../assets/images/product/productImageFour.png";
import ProductImageFive from "../../assets/images/product/productImageFive.png";
import ProductImageSix from "../../assets/images/product/productImageSix.png";
import Popup from "./PopUp";
import PopUp from "./PopUp";

function Products() {

  const [showPopuUp, setShowPopUp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const popupHandler=()=>{
    setShowPopUp(true)
  }
  const closeHander=()=>{
    setShowPopUp(false)
    console.log("modallll");
  }
  return (
    <>
      <div className="all-product-heading">
        <div style={{ paddingTop: "26px", paddingBottom: "40px" }}>
          <div className="store-home">
            <span>Store Home &gt; </span>
          </div>
          <div className="products-header text-center">
            <h1>All Products</h1>
          </div>
        </div>
      </div>
      <Container fluid className="all-products-container">
        <Row>
          <Col lg={3} md={3} className="pt-4 px-5">
          <div>
            <div className="pt-2">
              <span className="product-filter ">FILTER BY</span>
              <hr className="product-filter-hr" />
            </div>
            <div>
              <h6 className="product-category-text">CATEGORY</h6>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-product-item">Grocery &amp; Gourmet Foods</label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-product-item">Beauty Products</label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-product-item">Alternative Medicine</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-product-item">Health &amp; Personal Care</label>
              </div>
            </div>
          </div>
          </Col>

          <Col lg={9} md={9} xs={12}>



<Row className="pt-3 px-lg-0 px-4">
  
        <Col md={12}>
          <div>
            <div className="product-38 ">
              <span className="product-38-product">38 Products</span>

              <div className="product-sort-select">
                <span className="product-sort-by">SORT BY</span>
                <div>
                  <select
                    className="product-select"
                    aria-label="Default select example"
                  >
                    <option selected>Featured</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </Col>
      </Row>


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
                  <Image
                    src={ProductImageTwo}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text">Mahua Laddu</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle />
                      </span>
                    </div>

                    <div>
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <Image
                    src={ProductImageThree}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text ">Wildforest Honey</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle />
                      </span>
                    </div>

                    <div>
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <Image
                    src={ProductImageFour}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text ">Mahua Cookies</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                    <div>
                     
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>
            </Row>
            <Row
              style={{ paddingTop: "7%" }}
              className="justify-content-center"
            >
              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <Image
                    src={ProductImageFive}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text">Chyawanprash</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle />
                      </span>
                    </div>

                    <div>
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <Image
                    src={ProductImageSix}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text ">Handmad Green Tea</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle />
                      </span>
                    </div>

                    <div>
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>

              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <Image
                    src={ProductImageOne}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text ">Amla Murabba</h1>
                  <p className="product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <div>
                      <span className="icon ">
                        <AiFillPlusCircle />
                      </span>
                    </div>

                    <div>
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={8} xs={12}>
                <div className="p-md-3 p-5 mx-auto product-card-hover">
                  <Image
                    src={ProductImageTwo}
                    alt="Picture of the author"
                    className="w-100"
                  />
                  <h1 className="product-card-text">Mahua Laddu</h1>
                  <p className="mt-16 product-card-para w-100">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    product-card-texts.
                  </p>
                  <div className="mt-2 mb-2 product-card-text1 d-flex ">
                    <span className="icon ">
                      <AiFillPlusCircle />
                    </span>
                    <div>
                      <span className="product-card-details">
                        Product Details
                      </span>
                    </div>
                  </div>
                  <span className="product-Price">₹250</span>
                  <div className="mt-2">
                  <ButtonDark type="submit" className="Add-to-chart-button"
                      text="ADD TO CART" />
                  </div>
                </div>
              </Col>
            </Row>
            <div className="text-center load-more-product">
              <ButtonLight type="submit" className="" text="LOAD MORE PRODUCTS"/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
