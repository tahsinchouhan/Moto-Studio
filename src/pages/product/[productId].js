import { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ButtonDark from "../../components/button/ButtonDark";
import image1 from "../../assets/images/product/placeholder.png";
// import Popup from "./PopUp";
import { MdLocalShipping } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { apipath } from "../api/apiPath";
import { CardContext } from "../../components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductDetail({ productData }) {
  // const [showPopuUp, setShowPopUp] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(productData.weight[0]);
  const [listData, setListData] = useState([]);
  const [count, setCount] = useState(1);
  const router = useRouter();

  const { addProductToCart, item } = useContext(CardContext);

  const productIm̥ages = productData?.images.filter((item, ind) => ind < 5);
  // console.log("🚀 ~ file: [productId].js ~ line 27 ~ ProductDetail ~ productIm̥ages", productIm̥ages)

  const fetchListData = async (category_id) => {
    try {
      const res = await fetch(
        `${apipath}/api/v1/product/list?category_id=${category_id}`
      );
      const objData = await res.json();
      setListData(objData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListData(productData.category._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="all-product-heading">
        <div style={{ paddingTop: "26px", paddingBottom: "40px" }}>
          <div className="store-home">
            <Link href={"/"} passHref>
              <span className="cursor-pointer">Home</span>
            </Link>
            {/*
            <Link
            // href={{
              //   pathname: "/product",
              //   query: `${productData?.category?._id}`,
              // }}
              passHref
              >
              <span>/ {productData?.category?.category_name}</span>
              </Link>
            */}
            <span>/ {productData?.sub_category?.category_name}</span>
          </div>

          <div className="products-header text-center">
            <h1 className="product-name-head-text">
              {productData?.title || "Product Name"}
            </h1>
          </div>
        </div>
      </div>

      <div className="my-lg-5 d-flex">
        <div className="container popup-div mx-auto p-0">
          {/* <Row className="popup-modal-main p-0 justify-content-center"> */}
          <Row className="popup-modal-main p-0 justify-content-center">
            {/* add multiple images */}
            <Col md={6} style={{ position: "sticky !importatn" }}>
              <div className="slider-img">
                <div className="mult-img-slider-div">
                  <Carousel
                    showIndicators={false}
                    showStatus={false}
                    swipeable={true}
                    infiniteLoop={true}
                    axis="horizontal"
                    autoPlay="true"
                    dynamicHeight="true"
                    // showArrows={false}
                  >
                    {productIm̥ages.map((image, idx) => {
                      return (
                        <div key={idx}>
                          <img
                            src={image.img}
                            alt="product images"
                            className="productImage"
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
            </Col>
            {/* end  add mult img */}

            <Col xs={12} md={6}>
              <div className="p-3 p-md-2">
                <h1 className="product-name-text">
                  {productData?.title || "Product Name"}
                </h1>
                {/* <p className="popup-paragraph1">
                  {productData?.sub_title || "sub_title"}
                </p> */}

                <div className="mb-3 pt-lg-3">
                  <p className="popup-paragraph2 fw-bold">
                    CHOOSE YOUR QUANTITY
                  </p>
                  <Row className="px-0">
                    {productData?.weight?.length &&
                      productData?.weight?.map((wt, index) => {
                        return (
                          <Col xs={3} sm={3} className="sanju" key={wt?._id}>
                            <div className="product-radio-div py-2">
                              <div className="ss cursor-pointer">
                                <input
                                  className="product-radio "
                                  type="radio"
                                  name="flexRadioDefault"
                                  id={wt?._id}
                                  onChange={() => setSelectedWeight(wt)}
                                  defaultChecked={index === 0}
                                />
                                <label
                                  className="form-check-label ps-1 productName-kg cursor-pointer"
                                  htmlFor={wt?._id}
                                >
                                  {wt.weight_type?.weight_gram.replace(
                                    "grms",
                                    "grams"
                                  )}
                                </label>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                  </Row>
                </div>
                <div>
                  <div className="input-group width-of-select-input-unit">
                    <input
                      type="text"
                      className="form-control bg-white rounded-0 fs-10"
                      placeholder="Select No. of units"
                      readOnly
                    />
                    <span
                      className="input-group-text cursor-pointer px-3"
                      onClick={() =>
                        setCount((prev) => {
                          return prev - 1 < 1 ? 1 : prev - 1;
                        })
                      }
                    >
                      -
                    </span>
                    <span
                      className="input-group-text bg-white justify-content-center productName-counter-no"
                      style={{ width: 50 }}
                    >
                      {" "}
                      {count}{" "}
                    </span>
                    <span
                      className="input-group-text cursor-pointer px-3"
                      onClick={() =>
                        setCount((prev) => {
                          return prev + 1 > selectedWeight?.count
                            ? prev
                            : prev + 1;
                        })
                      }
                    >
                      +
                    </span>
                  </div>
                </div>
                <br />
                <div className="product-Price-1 w-100">
                  <span className="fs-2">₹ </span>
                  <span className="fs-2">
                    {Number(selectedWeight?.price * count) -
                      Number(
                        selectedWeight?.discount === "percentage"
                          ? selectedWeight?.price *
                              count *
                              (selectedWeight?.discount_value / 100)
                          : selectedWeight?.discount_value
                      )}
                  </span>
                  {selectedWeight?.discount_value && (
                    <span className="text-muted fs-6 ms-3 text-decoration-line-through">
                      {" "}
                      ₹ {selectedWeight?.price * count || ""}
                    </span>
                  )}
                </div>
                <div className="mt-0">
                  <Row>
                    {selectedWeight?.count > 0 ? (
                      item.some((el) => el.product === productData?._id) ||
                      item.some(
                        (el) =>
                          el.product?._id === productData?._id &&
                          el.weight_type === selectedWeight?.weight_type?._id
                      ) ? (
                        <Col xs={6}>
                          <div
                            className="mt-2"
                            onClick={() => router.push(`/shopping/Shopping`)}
                          >
                            <ButtonDark text="VIEW CART" className="active" />
                          </div>
                        </Col>
                      ) : (
                        <Col
                          lg={6}
                          onClick={(e) => {
                            addProductToCart(
                              productData,
                              selectedWeight,
                              count
                            );
                          }}
                        >
                          <ButtonDark text="ADD TO CART" />
                        </Col>
                      )
                    ) : (
                      <Col
                        lg={6}
                        onClick={(e) => {
                          addProductToCart(productData, selectedWeight, count);
                        }}
                      >
                        <ButtonDark text="OUT OF STOCK" disabled />
                      </Col>
                    )}
                  </Row>
                </div>

                <p
                  className="productName-shipping-para py-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <MdLocalShipping
                    className="me-1"
                    style={{ fontSize: "16px" }}
                  />{" "}
                  Free shipping across India, and a risk-free quality guarantee!
                </p>

                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                {/* <ul className="popup-ul mb-4 p-0 ps-3" style={{listStyleType:"square"}}> */}
                <ul className="popup-ul mb-4 p-0 ps-3">
                  {productData?.description.split("•").map((item, index) => {
                    if (item) return <li key={index}>{item}</li>;
                  }) || "description"}
                </ul>
                {/* <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Container>
        <div className="mb-5">
          <p className="productName-extra-product">You may also like</p>
          <Row className="justify-content-center">
            {listData?.length > 0 &&
              listData.slice(0, 4).map((product) => {
                return (
                  <Col lg={3} md={6} sm={8} xs={12} key={product._id}>
                    <div
                      className="p-lg-5 mx-auto product-card-hover cursor-pointer"
                      onClick={() => router.push(`./${product?._id}`)}
                      style={{ backgroundColor: "#F8F8F8" }}
                    >
                      <div className="w-100 product-card-img">
                        <Image
                          src={
                            product?.images?.length
                              ? product?.images[0]?.img || image1
                              : image1
                          }
                          alt={product.title}
                          className="w-100"
                          width={400}
                          height={400}
                          unoptimized={true}
                          loading="eager"
                          objectFit="cover"
                        />
                      </div>

                      <h1 className="product-card-text mt-2">
                        {product?.title || "title"}
                      </h1>
                      {/* <p className="product-card-para w-100">
                        {product?.sub_title}
                      </p> */}
                      <p className="product-card-para w-100">
                        {product?.description || "Description"}
                      </p>
                      <div
                        className="mt-2 mb-2 product-card-text1 d-flex cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          // setShowPopUp(true);
                        }}
                      >
                        <div>
                          <span className="icon">
                            <AiFillPlusCircle />
                          </span>
                        </div>
                        <div>
                          {/* {showPopuUp && (
                            <Popup data={product} setShowPopUp={setShowPopUp} />
                          )} */}
                          <span className="product-card-details ms-lg-2">
                            Product Details
                          </span>
                        </div>
                      </div>
                      <span className="product-Price">
                        <span className="fs-5">
                          ₹{" "}
                          {Number(product?.weight[0]?.price) -
                            Number(
                              product?.weight[0]?.discount === "percentage"
                                ? product?.weight[0]?.price *
                                    (product?.weight[0]?.discount_value / 100)
                                : product?.weight[0]?.discount_value
                            )}
                        </span>
                        {/* {product?.weight[0].discount_value && (
                          <span className="fs-6 text-muted ms-2 text-decoration-line-through">
                            ₹ {product?.weight[0]?.price}
                          </span>
                        )} */}
                      </span>

                      {product?.weight[0]?.count > 0 ? (
                        item.some((el) => el.product === productData?._id) ||
                        item.some((el) => el.product?._id === product?._id) ? (
                          <div className="mt-2">
                            <ButtonDark
                              type="submit"
                              className="Add-to-cart-button active"
                              text="ADD TO CART"
                            />
                          </div>
                        ) : (
                          <div
                            className="mt-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              addProductToCart(product, product?.weight[0]);
                            }}
                          >
                            <ButtonDark
                              type="submit"
                              className="Add-to-cart-button"
                              text="ADD TO CART"
                            />
                          </div>
                        )
                      ) : (
                        <div className="mt-3">
                          <span
                            style={{
                              color: "#065934",
                              textAlign: "center",
                              display: "block",
                              padding: "0.3rem",
                            }}
                          >
                            OUT OF STOCK
                          </span>
                        </div>
                      )}
                      {/* <div className="mt-3">
                          <button className="btn amazon-btn border w-100 rounded-0 d-flex align-items-center justify-content-center gap-2">
                              <span>Buy it on</span>
                              <Image 
                                src={'/images/amz.png'} 
                                alt="amz" width={59} height={20} unoptimized={true} 
                                loading="eager"
                                style={{marginTop: 20}}
                                />
                            </button>
                            <style>{`
                            .amazon-btn{
                              background: transparent;
                              color:#333333;
                              padding: 0.7rem 0;
                              font-family:'Lato';
                              outline:0;
                              box-shadow: none;
                            }

                            .amazon-btn:hover{ 
                              background: #eee;
                            }
                            `}</style>
                        </div> */}
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ProductDetail;

export async function getServerSideProps(context) {
  const { productId } = context.query;
  const response = await fetch(`${apipath}/api/v1/product/${productId}`);
  const result = await response.json();

  return { props: { productData: result.data } };
}
