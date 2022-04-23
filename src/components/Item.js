import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { CardContext } from "./Layout";
import emptyImage from '../assets/images/product/placeholder.png';
import {apipath} from '../pages/api/apiPath';

const Item = ({ _id, product, quantity, price, SKU_Number, product_weight, weight_type }) => {
  const { user, removeItem, increament, decreament } = useContext(CardContext);

  const deleteItem = (product_id, weight_type, id) => {
    fetch(apipath + `/api/v1/cart/remove-items`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + user.token,
      },
      body:JSON.stringify({ product_id, weight_type, user: user?._id })
    })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
      removeItem(id);
    }).catch((err) => {
      console.log(err);
    });
  };

  const stockQty = product?.weight?.filter(wt=> wt.weight_type === weight_type)[0].count;

  return (
    <>
      <Row className="mx-0">
        <Col lg="6">
          <Row className="san">
            <Col lg="6" md="12" sm="12">
              <div
                className="product-img"
                style={{
                  position: "relative",
                  width: "130px",
                  height: "110px",
                }}
              >
                <Image
                  src={product?.images?.length > 0 ? product?.images[0]?.img || emptyImage : emptyImage}
                  alt="title"
                  layout="fill"
                  className="img-fluid"
                  unoptimized={true}
                  loading="eager"
                  objectFit="cover"
                />
              </div>
            </Col>
            <Col className="margin-shop-toggle" lg="6" md="12">
              <p className="fw-bold shopping-p2-size">{product?.title || ""}</p>
              <p className="shopping-p3-size">
                Quantity &nbsp; <span className="fw-bold ">{product_weight || ''}</span>
              </p>
              <p className="shopping-p3-size">
                Product Code &nbsp; <span className="fw-bold ">{SKU_Number || ''}</span>
              </p>
              <span className={stockQty === 0 ? `text-danget`: `text-success`}>
              { stockQty > 0 ? `${stockQty} stock left`: 'out of stock' }
              </span>
            </Col>
          </Row>
        </Col>

        <Col lg="2" className="mt-3">
          <div className="d-flex">
            <button
              className="btn-shopping-counter"
              onClick={() => decreament(_id)}
            >
              {" "}
              -{" "}
            </button>
            <div className="shopping-counter" id="counter">
              {quantity}
            </div>
            <button
              className="btn-shopping-counter"
              onClick={() => stockQty > quantity && increament(_id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <p className=" shop-remove shopping-p3-size">
            <span
              className="fw-bold text-danger"
              onClick={() => deleteItem(product?._id, weight_type, _id)}
            >
              REMOVE
            </span>
          </p>
        </Col>

        <Col lg="2" className="mt-5">
          <p className="fw-bold shopping-p4-size">₹ {price}</p>
        </Col>
        <Col lg="2" className="mt-5">
          <p className="fw-bold shopping-p4-size">₹ {quantity * price}</p>
          {/* <div className="shopping-edit-text mt-5">
            <p1> EDIT</p1>
          </div> */}
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default Item;
