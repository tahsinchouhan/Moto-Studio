import React from "react";
import Image from "next/image";
import flower from "../../../public/images/flower.png";

function Viewpage({ productData }) {
  console.log("productData :>> ", productData.doc);
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
      {productData?.doc?.products_?.map((product) => {
        return <div className="row" key={product?._id}>
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex p-1">
                <div>
                  <Image src={product?.images?.length > 0 ? product?.images[0]?.img || flower : flower} alt="" width={136} height={130} />
                </div>
                <div className="p-3">
                  <span>{product?.products?.title || ''}</span>
                  <p className="dreaming-midnight-x1">{product?.products?.SKU_Number}</p>
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div>
                <span>{product?.quantity || ''}</span>
              </div>
            </div>
            <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
              <div>
                <span>₹ {product?.price || ''}</span>
              </div>
            </div>
          </div>
      })}
    </div>
  );
}

export default Viewpage;
