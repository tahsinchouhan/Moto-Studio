import { useState, useEffect, useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import ButtonDark from "../../components/button/ButtonDark";
import ButtonLight from "../../components/button/ButtonLight";
import { AiFillPlusCircle } from "react-icons/ai";
import ProductImageOne from "../../assets/images/product/placeholder.png";
import Popup from "./PopUp";
import { useRouter } from "next/router";
import { apipath } from "../api/apiPath";
import { CardContext } from "../../components/Layout";
import Skeleton from "../../components/Skeleton";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';



function Products() {
  const router = useRouter();
  const { activeTab } = router.query;
  const { addProductToCart, item } = useContext(CardContext);

  const [price, setPrice] = useState([0, 100000]);
  const [showPopuUp, setShowPopUp] = useState(false);
  const [category, setCategory] = useState([]);
  const [productData, setProductData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const [checkedState, setCheckedState] = useState(
    new Array(category.length).fill(false)
  );

  // const createSliderWithTooltip = Slider.createSliderWithTooltip;
  // const Range = createSliderWithTooltip(Slider.Range);

  const fetchMoreData = () => {
    setLoading(true);
    fetch(apipath + `/api/v1/product/list?page=${pageNumber}`)
      .then((res) => res.json())
      .then((jsonData) => {
        if (jsonData?.data?.length) {
          setLoading(false);
          setProductData((prevState) => [...prevState, ...jsonData?.data]);
          setPageNumber((prevNum) => prevNum + 1);
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchData = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `${apipath}/api/v1/product/list?${query.substring(1)}`
      );
      const objData = await res.json();
      setLoading(false);
      setTotalPages(Math.ceil(objData.all_pages));
      setProductData(objData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchCategory = () => {
      fetch(`${apipath}/api/v1/category/list`)
        .then((response) => response.json())
        .then((objData) => {
          if (objData?.data?.length) {
            const filteredData = objData?.data.filter(
              (data) => data.status === true
            );
            setCheckedState(new Array(filteredData.length).fill(false));
            setCategory(filteredData);
          }
        })
        .catch((error) => console.log(error));
    };

    fetchCategory();
    fetchData();
  }, []);

  useEffect(() => {
    if (activeTab) {
      const activeCategory = checkedState.map(
        (item, index) => index === Number(activeTab)
      );
      setCheckedState(activeCategory);
    }
    // react-hooks/exhaustive-deps
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, activeTab]);

  useEffect(() => {
    const query = checkedState.reduce((query, currentState, index) => {
      if (currentState === true) {
        return (query += `&category_id[]=` + category[index]._id);
      }
      return query;
    }, "");  
    if(price[0] !== 0 && price[0] !== 10000) {
      query += `&price[gte]=${price[0]}&price[lte]=${price[1]}`;
    }
    // if (query !== "") fetchData(query);
    fetchData(query);
  }, [checkedState, category, price]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };
  return (
    <>
      <div className="all-product-heading">
        <div style={{ paddingTop: "26px", paddingBottom: "40px" }}>
          <div className="store-home" onClick={() => router.push("/product")}>
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
                {category.length &&
                  category.map((cat, index) => {
                    return (
                      <div
                        className="form-check mb-3 ps-4 cursor-pointer"
                        key={cat._id}
                      >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={cat?._id}
                          value={cat._id}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                        />
                        <label
                          className="form-check-product-item cursor-pointer"
                          htmlFor={cat?._id}
                        >
                          {cat?.category_name || "Category Name"}
                        </label>
                      </div>
                    );
                  })}
              </div> 
              <Slider 
                range 
                allowCross={false} 
                defaultValue={price}
                min={0}
                max={10000}
                marks={{
                  0: `₹ ${price[0]}`,
                  10000: `₹ ${price[1]}`
                }}
                value={price}
                onChange={(price) => setPrice(price)}
                />          
            </div>
          </Col>

          <Col lg={9} md={9} xs={12}>
            <Row className="pt-3 px-lg-0 px-4">
              <Col md={12}>
                {/* <div> */}
                <div className="product-38">
                  <span className="product-38-product">
                    {productData?.length} Products
                  </span>
                  <div className="product-sort-select">
                    <span className="product-sort-by">SORT BY</span>
                    <div>
                      <select
                        defaultValue={""}
                        className="product-select"
                        aria-label="Default select example"
                      >
                        <option value="">Featured</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr />
              </Col>
            </Row>

            <Row className="justify-content-center justify-content-lg-start">
              {!loading
                ? productData?.length &&
                  productData.map((product) => {
                    return (
                      <Col lg={3} md={6} sm={8} xs={12} key={product?._id} style={{margin: "2em 0em"}}>
                        <div
                          className="p-lg-2 mx-auto product-card-hover cursor-pointer"
                          onClick={() =>
                            router.push(`./product/${product?._id}`)
                          }
                        >
                          <div className="w-100 product-card-img">
                            <Image
                              src={
                                product?.images.length
                                  ? product?.images[0]?.img || ProductImageOne
                                  : ProductImageOne
                              }
                              alt="Picture of the author"
                              className="w-100"
                              width={260}
                              height={200}
                              objectFit="cover"
                            />
                          </div>

                        <p className="product-card-text mt-2" 
                        style={{
                           whiteSpace: "nowrap",
                           overflow: "hidden",
                           textOverflow: "ellipsis",
                           fontWeight: "400",
                           size: "16px",
                           marginBottom: "0px",
                        }}>
                          {product?.title}
                        </p>
                        {/* <p className="product-card-para w-100">
                          {product?.sub_title}
                        </p> */}
                        
                        <p className="product-card-para w-100">
                          {product?.description}
                        </p>
                          <div
                            className="mt-2 mb-2 product-card-text1 d-flex cursor-pointer"
                            // onClick={(e) =>{e.stopPropagation();setShowPopUp(true)}}
                          >
                            <div>
                              <span className="icon pe-2">
                                <AiFillPlusCircle />
                              </span>
                            </div>
                            {/* { showPopuUp && <Popup data={product} setShowPopUp={setShowPopUp}/> } */}
                            <div>
                              <span className="product-card-details">
                                Product Details
                              </span>
                            </div>
                          </div>
                          <span className="product-Price">
                            <span style={{ fontSize: "22px" }}>
                              ₹
                              {Number(product?.weight[0]?.price) -
                                Number(
                                  product?.weight[0]?.discount === "percentage"
                                    ? product?.weight[0]?.price *
                                        (product?.weight[0]?.discount_value /
                                          100)
                                    : product?.weight[0]?.discount_value
                                )}
                            </span>
                            {product?.weight[0]?.discount_value && (
                              <span className="fs-5 text-muted ms-2 text-decoration-line-through">
                                ₹ {product?.weight[0]?.price}
                              </span>
                            )}
                          </span>
                          {product?.weight[0]?.count > 0 ? (
                            item.some((el) => el.product === product?._id) ||
                            item.some(
                              (el) => el.product?._id === product?._id
                            ) ? (
                              <div
                                className="mt-3"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push("/shopping/Shopping");
                                }}
                              >
                                <ButtonDark
                                  type="submit"
                                  className="active"
                                  text="PRODUCT ADDED"
                                />
                              </div>
                            ) : (
                              <div
                                className="mt-3"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  addProductToCart(product, product?.weight[0]);
                                }}
                              >
                                <ButtonDark
                                  type="button"
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
                                }}
                              >
                                <ButtonDark
                                  type="button"
                                  className="Add-to-cart-button disabled"
                                  text="OUT OF STOCK"
                                  disabled={true}
                                />
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
                                <style jsx>{`
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
                  })
                : ["1", "2", "3", "4", "5", "6", "7"].map((ele) => (
                    <Col key={ele} lg={3} md={6} sm={8} xs={12}>
                      <Skeleton />
                    </Col>
                  ))}

              {/* <Col lg={3} md={6} sm={8} xs={12}>
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
              </Col> */}
            </Row>

            {totalPages !== pageNumber && (
              <div
                className="text-center load-more-product"
                onClick={() => fetchMoreData()}
              >
                <ButtonLight
                  type="submit"
                  className=""
                  text="LOAD MORE PRODUCTS"
                />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
