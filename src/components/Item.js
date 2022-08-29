import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { CardContext } from "./Layout";
import emptyImage from "../assets/images/product/placeholder.png";
import { apipath } from "../pages/api/apiPath";

const Item = ({
  _id,
  product,
  quantity,
  price,
  SKU_Number,
  product_weight,
  weight_type
}) => {
  const { user, removeItem, increament, decreament, isLogin, item } = useContext(CardContext);
  const deleteItem = (product_id, weight_type, id) => {
    if(!isLogin) {
      const localCartData = localStorage.getItem("cg-herbal-cartData");
      if (localCartData) {
        localCartData = JSON.parse(localCartData);
        const result = localCartData.filter(data => data.product._id !== product_id && data.product.weight_type !== weight_type )
        localStorage.setItem(
          "cg-herbal-cartData",
          JSON.stringify(result)
        );
        removeItem(product_id);
      }
      return false;
    }

    fetch(apipath + `/api/v1/cart/remove-items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.token,
      },
      body: JSON.stringify({ product_id, weight_type, user: user?._id }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        removeItem(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const stockQty = product?.weight?.filter(
    (wt) => wt.weight_type === weight_type
  )[0].count;

  return (
    <>
      <Row className="mx-0 py-2" style={{ textAlign: "center" }}>
        <Col lg="6">
          <Row className="san">
            <Col lg="6" md="12" sm="12">
              <div className="shop-product-img tablet-btn-shopping-image">
                <Image
                  src={
                    product?.images?.length > 0
                      ? product?.images[0]?.img || emptyImage
                      : emptyImage
                  }
                  alt="title"
                  layout="fill"
                  className="img-fluid"
                  unoptimized={true}
                  loading="eager"
                  objectFit="fill"
                />
              </div>
            </Col>
            <Col className="margin-shop-toggle" lg="6" md="12">
              <p className="fw-bold shopping-p2-size mobile-shopping-p2-size ">{product?.title || ""}</p>
              <p className="shopping-p3-size py-lg-4 mobile-shopping-p2-weight">
                Quantity &nbsp;{" "}
                <span className="fw-bold ">{product_weight || ""}</span>
              </p>
              <p className="shopping-p3-size mobile-shopping-p2-weight">
                Product Code &nbsp;{" "}
                <span className="fw-bold ">{SKU_Number || ""}</span>
              </p>
              {/* <span className={stockQty === 0 ? `text-danget` : `text-success`}>
                {stockQty > 0 ? `${stockQty} stock left` : "out of stock"}
              </span> */}
            </Col>
          </Row>
        </Col>

        <Col lg="2" className="mt-3">
          <div className="d-flex mobile-shopping-p2-quantity">
            <button
              type="button"
              className="btn-shopping-counter mobile-btn-shopping-counter"
              onClick={() => decreament(product._id)}
            >
              {" "}
              -{" "}
            </button>
            <div className="shopping-counter mobile-btn-shopping-counter" id="counter">
              {quantity}
            </div>
            <button
              type="button"
              className="btn-shopping-counter mobile-btn-shopping-counter"
              onClick={() => stockQty > quantity && increament(product._id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <p className=" shop-remove shopping-p3-size text-lg-start text-lg-start">
            <span
              className="fw-bold text-danger text-decoration-underline mobile-btn-shopping-remove cursor-pointer"
              onClick={() => deleteItem(product?._id, weight_type, _id)}
            >
              REMOVE
            </span>
          </p>
        </Col>

        <Col lg="2" className="mt-0 mt-lg-4 text-start text-lg-center">
          <span className="m-0 d-block d-lg-none shopping-p-size mobile-btn-shopping-price">PRICE</span>
          <p className="fw-bold shopping-p4-size mobile-btn-shopping-price">₹ {price}</p>
        </Col>
        <Col lg="2" className="mt-0 mt-lg-4 text-start text-lg-center">
          <span className="m-0 d-block d-lg-none shopping-p-size mobile-btn-shopping-total">TOTAL</span>
          <p className="fw-bold shopping-p4-size mobile-btn-shopping-total">₹ {quantity * price}</p>
        </Col>

        {/* add gst and taxable amount code */}

        {/* <Col lg="1" className="mt-0 mt-lg-4 text-start text-lg-center">
          <span className="m-0 d-block d-lg-none shopping-p-size">GST Amount</span>
            {
              product?.weight ? (
                <p className="fw-bold shopping-p4-size">₹ {product?.weight[0]?.gst_amount || 0}</p>
              ) : (
                <p className="fw-bold shopping-p4-size">₹ {0} </p>
              )
            }
          
        </Col>
        <Col lg="1" className="mt-0 mt-lg-4 text-start text-lg-center">
          <span className="m-0 d-block d-lg-none shopping-p-size">Taxable Amount</span>
          {
              product?.weight ? (
                <p className="fw-bold shopping-p4-size">₹ {product?.weight[0]?.taxable_amount || 0 }</p>
              ) : (
                <p className="fw-bold shopping-p4-size">₹ {0} </p>
              )
          }
        </Col> */}

        {/* <Col lg="1" className="mt-0 mt-lg-4 text-start text-lg-center">
          <span className="m-0 d-block d-lg-none shopping-p-size">TOTAL</span>
          {
              product?.weight ? (
                <p className="fw-bold shopping-p4-size">₹ {quantity * (price + (product.weight[0].gst_amount || 0) + (product?.weight[0].taxable_amount || 0) )}</p>
              ) : (
                <p className="fw-bold shopping-p4-size">₹ {price} </p>
              )
          }
        </Col> */}
        {/* end changes */}

        
      </Row>
      <hr />
    </>
  );
};

export default Item;
