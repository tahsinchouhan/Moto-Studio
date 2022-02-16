import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ButtonDark from "../../components/button/ButtonDark";
// import image1 from "../../assets/images/product/image1.png";
import image1 from '../../assets/images/product/placeholder.png';
import Popup from "../../pages/Product/PopUp";
import ProductImageOne from "../../assets/images/product/productImageOne.png";
import { MdLocalShipping } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { apipath } from "../api/apiPath";


function ProductDetail() {
    const [showPopuUp, setShowPopUp] = useState(false);
    const [productData, setProductData] = useState(null);

    const router = useRouter();
    const { productId } = router.query;

    useEffect(() => {
      if(!productId) return
      const fetchData = () => {
        fetch(`${apipath}/api/v1/product/${productId}`)
        .then((response) => response.json())
        .then((result) => {
          setProductData(result.data)
          // console.log('result :>> ', result.data);
        })
        .catch((error) => console.log(error));
      }
      fetchData();
    }, [productId])
    

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
            <h1 className="product-name-head-text">{productData?.title || 'Product Name'}</h1>
          </div>
        </div>
      </div>

      <div className="my-5 d-flex">
        <div className="popup-div mx-auto">
          <Row className="popup-modal-main p-0">
            <Col xs={12} md={7}>
              <div className="p-3 p-md-2">
                <h1 className="product-name-text">{productData?.title || 'Product Name'}</h1>
                <p className="popup-paragraph1">{productData?.sub_title || 'sub_title'}</p>
                <p className="popup-paragraph2 fw-bold">PRODUCT INFORMATION</p>
                <div className="popup-ul fw-bold mb-5" style={{whiteSpace:'pre-wrap'}}>{productData?.description || 'description'}</div>
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
                  {
                    productData?.weight?.length && productData?.weight?.map(wt => {
                      return <Col xs={3} sm={3} className="sanju" key={wt?._id}>
                        <div className="product-radio-div py-2">
                          <div className="ss">
                            <input
                              className="product-radio "
                              type="radio"
                              name="flexRadioDefault"
                              id={wt?._id}
                            />
                            <label className="form-check-label ps-1 productName-kg" htmlFor={wt?._id}>
                              {wt.weight_type?.weight_gram}
                            </label>
                          </div>
                        </div>
                      </Col>
                    })
                  }
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
                <Image src={productData?.images?.length ? productData?.images[0]?.img || image1 : image1} width={500} height={500} alt="image1" />
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
