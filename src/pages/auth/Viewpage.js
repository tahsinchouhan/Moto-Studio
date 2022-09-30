import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import ProductImageOne from "../../assets/images/product/placeholder.png";
import { CardContext } from "../../components/Layout";

function Viewpage({ productData }) {
  const { user } = useContext(CardContext);
  const id = productData?._id || "";
  const CancelOrder = async () => {
    try {
      const response = await fetch(
        `https://api.cgherbals.shop/api/v1/order/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_status: "633707861e92d82174a69159",
          }),
        }
      );
      const result = await response.json();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const ReturnOrder = async () => {
    try {
      const response = await fetch(
        `https://api.cgherbals.shop/api/v1/order/update/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            order_status: "63370b741e92d82174a69191",
          }),
        }
      );
      const result = await response.json();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="row">
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
      {productData?.products_?.map((product) => {
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
            Name: {productData?.shippingAddress.full_name ||
              user?.full_Name}{" "}
            <br />
            address:{" "}
            {productData?.shippingAddress?.address || user?.address || ""}{" "}
            {productData?.shippingAddress?.city || ""},{" "}
            {productData?.shippingAddress?.state || ""} -{" "}
            {productData?.shippingAddress?.pincode || ""}
            <br />
            mobile: {productData?.shippingAddress?.mobile || user?.mobile}{" "}
            <br />
            <strong>Payment Status: {productData?.payment_status || ""}</strong>
            <br />
            <strong>
              Order Status: {productData?.order_status?.status || ""}
            </strong>
          </div>
          {productData?.order_status?.status == "Placed" ? (
            <div>
              <br />
              <button onClick={CancelOrder} className="btn btn-danger">
                Cancel Order
              </button>
            </div>
          ) : (
            ""
          )}
          {productData?.order_status?.status == "Processing" ? (
            <div>
              <br />
              <button onClick={CancelOrder} className="btn btn-danger">
                Cancel Order
              </button>
            </div>
          ) : (
            ""
          )}

          {productData?.order_status?.status == "Delevired" ? (
            <div>
              <br />
              <button onClick={ReturnOrder} className="btn btn-danger">
                Return Order
              </button>
            </div>
          ) : (
            ""
          )}
          {productData?.tracking.length > 0 ? (
            <div>
              <p>
                Tracking Code: {productData?.tracking[0]?.code || ""} <br />
                <Link href={productData?.tracking[0]?.url || ""}>
                  <a className="btn btn-info btn-sm text-white" target="_blank">
                    Track Order
                  </a>
                </Link>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Viewpage;
