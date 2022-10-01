import Image from "next/image";
import React, { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductImageOne from "../../assets/images/product/placeholder.png";
import { CardContext } from "../../components/Layout";
import { apipath } from "../api/apiPath";

function ReturnView({ productData }) {
  const { user } = useContext(CardContext);
  const id = productData?._id || "";

  const [retunIssue, setReturnIssue] = useState("");

  console.log(retunIssue);
  const CancelOrder = async () => {
    try {
      const response = await fetch(apipath + `/api/v1/order/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_status: "633707861e92d82174a69159",
        }),
      });
      const result = await response.json();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const ReturnOrder = async () => {
    try {
      const response = await fetch(apipath + `/api/v1/order/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order_status: "63370b741e92d82174a69191",
          return_reason: retunIssue,
        }),
      });
      const result = await response.json();
      toast("Email Send To Support Successfully");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // filter product data by payment_status
  const filterData = productData?.order_items.filter(
    (item) => item.payment_status === "success"
  );

  console.log(filterData);
  return (
    <div>
      <div className="row">
        <ToastContainer />

        <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div>
            <span className="cart-detail-title">ORDER NO.</span>
          </div>
        </div>
        <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <div>
            <span className="cart-detail-title">ITEMS</span>
          </div>
        </div>
        <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
          <div>
            <span className="cart-detail-title">AMOUNT</span>
          </div>
        </div>
      </div>
      <hr />
      {filterData?.products_?.map((product) => {
        return (
          <div key={product?._id}>
            <div className="row">
              <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="d-flex p-1">
                  <div>
                    <Image
                      src={
                        product.product_id?.images?.length > 0
                          ? product.product_id?.images[0]?.img ||
                            ProductImageOne
                          : ProductImageOne
                      }
                      alt=""
                      width={136}
                      height={130}
                    />
                  </div>
                  <div className="p-3">
                    <span>{product?.product_id?.title || ""}</span>
                    <p className="dreaming-midnight-x1">
                      {product?.product_id?.category?.category_name}
                    </p>
                    <p className="dreaming-midnight-x1">
                      {product?.product_id?.SKU_Number}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div>
                  <span>{product?.quantity || ""}</span>
                </div>
              </div>
              <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <div>
                  <span>₹ {product?.price || ""}</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        );
      })}

      <div className="shipping-details border-bottom border-secondary pt-3 text-muted">
        <h4 className="fw-bold">Shipping Details:</h4>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <strong>Recipient:</strong>
            <br />
            Name: {filterData?.shippingAddress.full_name ||
              user?.full_Name}{" "}
            <br />
            address:{" "}
            {filterData?.shippingAddress?.address || user?.address || ""}{" "}
            {filterData?.shippingAddress?.city || ""},{" "}
            {filterData?.shippingAddress?.state || ""} -{" "}
            {filterData?.shippingAddress?.pincode || ""}
            <br />
            mobile: {filterData?.shippingAddress?.mobile || user?.mobile} <br />
            <strong>Payment Status: {filterData?.payment_status || ""}</strong>
            <br />
            <strong>
              Order Status: {filterData?.order_status?.status || ""}
            </strong>
          </div>

          {filterData?.order_status?.status == "Delevired" ? (
            <div>
              <select
                onChange={(e) => {
                  setReturnIssue(e.target.value);
                  ReturnOrder();
                }}
                name="return_reason"
                id=""
                className="btn"
                style={{
                  border: "2px solid gray",
                }}
              >
                <option defaultValue>Cancel Order</option>
                <option value="Damaged">Product Damaged </option>
                <option value="Defective">Quality Issue </option>
                <option value="WrongProduct">Wrong Product</option>
                <option value="Other">Other</option>
              </select>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ReturnView;
