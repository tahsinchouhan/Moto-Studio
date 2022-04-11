import { useState, useEffect, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ButtonDark from "../../components/button/ButtonDark";
import image1 from "../../assets/images/product/placeholder.png";
import Popup from "./PopUp";
import { MdLocalShipping } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { apipath } from "../api/apiPath";
import { CardContext } from "../../components/Layout";
import { useRouter } from "next/router";

function ProductDetail({ productData }) {

  const [showPopuUp, setShowPopUp] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState(productData.weight[0]);
  const [listData, setListData] = useState([]);
  const [count, setCount] = useState(1);
  const router = useRouter()

  const { addProductToCart, item } = useContext(CardContext);

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
console.log('selectedWeight :>> ', selectedWeight);
  useEffect(() => {
    fetchListData(productData.category._id);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="all-product-heading">
        <div style={{ paddingTop: "26px", paddingBottom: "40px" }}>
          <div className="store-home">
            <span>Store Home &gt; </span>
          </div>
          <div className="products-header text-center">
            <h1 className="product-name-head-text">
              {productData?.title || "Product Name"}
            </h1>
          </div>
        </div>
      </div>

      <div className="my-5 d-flex">
        <div className="popup-div mx-auto">
          <Row className="popup-modal-main p-0">
            <Col xs={12} md={7}>
              <div className="p-3 p-md-2">
                <h1 className="product-name-text">
                  {productData?.title || "Product Name"}
                </h1>
                <p className="popup-paragraph1">
                  {productData?.sub_title || "sub_title"}
                </p>
                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <div
                  className="popup-ul fw-bold mb-5"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {productData?.description || "description"}
                </div>
                {/* <ul className="popup-ul fw-bold">
                  <li>Tea Variety Green</li>
                  <li>Unflavoured Loose Leaves</li>
                  <li>Package Dimensions (LxWxH) : 20 x 20 x 20 Centimeters</li>
                  <li>Units : 100.0 gram</li>
                </ul> */}

                <div className="mb-4">
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
                                  {wt.weight_type?.weight_gram}
                                </label>
                              </div>
                            </div>
                          </Col>
                        );
                      })}
                  </Row>
                </div>
                <div className="">
                <div className="input-group">
                  <input type="text" className="form-control bg-white rounded-0 fs-6" placeholder="Select No. of units" readOnly/>
                  <span 
                    className="input-group-text cursor-pointer px-3" 
                    onClick={() => setCount(prev => {
                      return (prev - 1) < 1 ? 1 : (prev -1)
                    })}>-</span>
                  <span className="input-group-text bg-white justify-content-center productName-counter-no" style={{width: 50}}> {count} </span>
                  <span 
                    className="input-group-text cursor-pointer px-3"
                    onClick={() => setCount(prev => {
                      return (prev + 1) > selectedWeight.count ? prev : prev + 1
                    })}
                    >+</span>
                </div>

                  {/* <Row>
                    <Col xs={9} sm={9}>
                      <p className="productName-counter-para  my-2">
                        Select No. of units
                      </p>
                    </Col>

                    <Col
                      xs={1}
                      sm={1}
                      className="productName-counter-pm-sign text-center my-0 py-2 cursor-pointer"
                      onClick={() => setCount(prev => {
                        return (prev - 1) < 1 ? 1 : (prev -1)
                      })}
                    >
                      -
                    </Col>
                    <Col xs={1} sm={1}>
                      <p className="productName-counter-no text-center my-2">{count}</p>
                    </Col>
                    <Col
                      xs={1}
                      sm={1}
                      className="productName-counter-pm-sign text-center my-0 py-2 cursor-pointer"
                      onClick={()=>setCount(prev => prev + 1) }
                    >
                      +
                    </Col>
                   
                  </Row> */}
                </div>
                <br/>
                <div className="product-Price-1 w-100">
                  <span className="fs-2">₹{" "}</span>
                  <span className="fs-2">{ Number(selectedWeight?.price * count) - Number(selectedWeight.discount === 'percentage' ? (selectedWeight?.price * count) * (selectedWeight.discount_value / 100) : selectedWeight.discount_value  ) }</span>
                  { selectedWeight.discount_value && <span className="text-muted fs-6 ms-3 text-decoration-line-through"> ₹ {selectedWeight.price * count || ""}</span> }
                </div>
                <div className="my-3">
                  <Row>
                    { console.log(item) }
                    {item.some((el) => el.product === productData?._id) ||
                    item.some((el) => el.product?._id === productData?._id && el.weight_type === selectedWeight?.weight_type?._id) ? (
                      <Col xs={6}>
                        <div className="mt-2" onClick={() => router.push(`/shopping/Shopping`) } >
                          <ButtonDark
                            text="VIEW CART"
                          />
                        </div>
                      </Col>
                    ) : (
                      <Col
                        xs={6}
                        onClick={(e) => {
                          addProductToCart(productData, selectedWeight, count);
                        }}
                      >
                        <ButtonDark text="ADD TO CART" />
                      </Col>
                    )}
                  </Row>
                </div>

                <p className="productName-shipping-para py-2">
                  <MdLocalShipping /> Free shipping across India, and a
                  risk-free quality guarantee!
                </p>
              </div>
            </Col>
            <Col xs={6} md={5} className="popup-modal-img m-auto ">
              <div>
                <Image
                  src={
                    productData?.images?.length
                      ? productData?.images[0]?.img || image1
                      : image1
                  }
                  width={500}
                  height={500}
                  alt="image1"
                />
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
            {listData.length &&
              listData.slice(0, 4).map((product) => {
                return (
                  <Col lg={3} md={6} sm={8} xs={12} key={product._id}>
                    <div
                      className="p-md-3 p-5 mx-auto product-card-hover"
                      onClick={() => router.push(`./${product?._id}`)}
                    >
                      <div className="w-100">
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
                        />
                      </div>

                      <h1 className="product-card-text ">
                        {product?.title || "title"}
                      </h1>
                      <p className="product-card-para w-100">
                        {product?.description || "Description"}
                      </p>
                      {/* <div
                        className="mt-2 mb-2 product-card-text1 d-flex cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPopUp(true);
                        }}
                      >
                        <div>
                          <span className="icon">
                            <AiFillPlusCircle />
                          </span>
                        </div>
                        <div>
                          {showPopuUp && (
                            <Popup data={product} setShowPopUp={setShowPopUp} />
                          )}
                          <span className="product-card-details">
                            Product Details
                          </span>
                        </div>
                      </div> */}
                      <span className="product-Price">
                        <span className="fs-5">₹ {Number(product?.weight[0]?.price) - Number(product?.weight[0].discount === 'percentage' ? (product?.weight[0]?.price) * (product?.weight[0].discount_value / 100) : product?.weight[0].discount_value  ) }</span>
                        { product?.weight[0].discount_value && <span className="fs-6 text-muted ms-2 text-decoration-line-through">₹ {product?.weight[0]?.price}</span> }
                      </span>
                     
                      {item.some((el) => el.product === productData?._id) ||
                      item.some((el) => el.product?._id === product?._id) ? (
                        <div className="mt-2">
                          <ButtonDark
                            type="submit"
                            className="Add-to-cart-button"
                            text="VIEW CART"
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
                      )}
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
  const response = await fetch(`${apipath}/api/v1/product/${productId}`)
  const result = await response.json();

  return { props: { productData: result.data } };
}
