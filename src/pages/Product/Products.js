import { useState, useEffect, useContext } from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Image from "next/image";
import ButtonDark from "../../components/button/ButtonDark";
import ButtonLight from "../../components/button/ButtonLight";
import { AiFillPlusCircle } from "react-icons/ai";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
// import ProductImageTwo from "../../assets/images/product/productImageTwo.png";
// import ProductImageThree from "../../assets/images/product/productImageThree.png";
// import ProductImageFour from "../../assets/images/product/productImageFour.png";
// import ProductImageFive from "../../assets/images/product/productImageFive.png";
// import ProductImageSix from "../../assets/images/product/productImageSix.png";
import Popup from "./PopUp";
import { useRouter } from "next/router";
import { apipath } from "../api/apiPath";
import { CardContext } from '../../components/Layout';

function Products() {
  
  const router = useRouter();
  const { activeTab } = router.query;
  const { isLogin, user, item, addToCart } = useContext(CardContext); 

  console.log('item :>> ', item);

  const [showPopuUp, setShowPopUp] = useState(false);
  const [category, setCategory] = useState([]);
  const [productData, setProductData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [show, setShow] = useState(false);
  
  const [checkedState, setCheckedState] = useState(
    new Array(category.length).fill(false)
  );

  const fetchMoreData = () => {
    fetch(apipath + `/api/v1/products/list?page=${pageNumber}`)
      .then((res) => res.json())
      .then((jsonData) => {
        if (jsonData?.data?.length) {
          setProductData((prevState) => [...prevState, ...jsonData?.data]);
          setPageNumber((prevNum) => prevNum + 1);
        }
      })
      .catch((error) => console.log(error));
  };

  const fetchData = async (query = '') => {
    try {
      const res = await fetch(`${apipath}/api/v1/product/list?${query.substring(1)}`);
      const objData = await res.json();
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
            setCheckedState(new Array(objData?.data.length).fill(false))
            setCategory(objData?.data);
          }
        })
        .catch((error) => console.log(error));
    };

    fetchCategory();
    fetchData();
  }, []);

  useEffect(() => {
    if(activeTab) {
      const activeCategory = checkedState.map((item, index) =>
        index === Number(activeTab)
      );
      setCheckedState(activeCategory);
    }
  }, [category, activeTab])
  
  useEffect(() => {
    const query = checkedState.reduce(
      (query, currentState, index) => {
        if (currentState === true) {
          return query += `&category_id[]=` + category[index]._id;
        }
        return query;
      },
      ''
    );
    fetchData(query);
  }, [checkedState])

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const addProduct = data => {
    if(!isLogin) router.push('/auth/Login');
    console.log('data :>> ', data);
    const params = {
      cart_items: {
        product: data._id,
        quantity: 1,
        price: data?.price || 0
      },
    };
    console.log('params :>> ', params);
    fetch(apipath + `/api/v1/cart/add-items`, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        Authorization: "Bearer " + user.token
      },
      body: JSON.stringify(params)
    })
    .then((res) => res.json())
    .then((result) => {
      if (result?.cart) {
        addToCart(result?.cart?.cart_items)
        setShow(true)
      }
    }).catch((error) => console.log(error));
  }

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
                      <div className="form-check mb-3" key={cat._id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexCheckDefault"
                          value={cat._id}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                        />
                        <label className="form-check-product-item">
                          {cat?.category_name || "Category Name"}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </Col>

          <Col lg={9} md={9} xs={12}>
            <Row className="pt-3 px-lg-0 px-4">
              <Col md={12}>
                {/* <div> */}
                <div className="product-38">
                  <span className="product-38-product">
                    {productData.length} Products
                  </span>
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
                <hr />
              </Col>
            </Row>

            <Row className="justify-content-start">
              {productData.length &&
                productData.map((product) => {
                  return (
                    <Col lg={3} md={6} sm={8} xs={12} key={product?._id}>
                      <div className="p-md-3 p-5 mx-auto product-card-hover">
                        <div className="w-100">
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

                        <h1 className="product-card-text ">{product?.title}</h1>
                        <p className="product-card-para w-100">
                          {product?.description}
                        </p>
                        <div className="mt-2 mb-2 product-card-text1 d-flex ">
                          <div>
                            <span className="icon ">
                              <AiFillPlusCircle
                                onClick={() => popupHandler()}
                              />
                            </span>
                          </div>
                          <div>
                            <Popup
                              showPopuUp={showPopuUp}
                              close={closeHander}
                            />

                            <span className="product-card-details">
                              Product Details
                            </span>
                          </div>
                        </div>
                        <span className="product-Price">
                          ₹ {product?.price}
                        </span>
                        <div className="mt-2"  onClick={() => addProduct(product)}>
                          <ButtonDark
                            type="submit"
                            className="Add-to-cart-button"
                            text="ADD TO CART"
                           
                          />
                        </div>
                      </div>
                    </Col>
                  );
                })}
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
            
          <ToastContainer className="p-3 position-fixed" position={`bottom-end`}>
            <Toast className="bg-success text-white rounded" onClose={() => setShow(false)} show={show} delay={3000} autohide >
              <Toast.Body>Product successfully add to cart!</Toast.Body>
            </Toast>
          </ToastContainer>

            {totalPages !== pageNumber && (
              <div className="text-center load-more-product">
                <ButtonLight
                  type="submit"
                  className=""
                  text="LOAD MORE PRODUCTS"
                  onClick={() => fetchMoreData()}
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
