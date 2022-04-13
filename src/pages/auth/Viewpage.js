import React, {useContext} from "react";
import Image from "next/image";
import flower from "../../../public/images/flower.png";
import ProductImageOne from "../../assets/images/product/placeholder.png";
import { CardContext } from "../../components/Layout";
import Link from "next/link";

function Viewpage({ productData }) {

  const { user } = useContext(CardContext);

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
        return <div key={product?._id}>
          <div className="row">
            <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="d-flex p-1">              
                <div>
                  <Image src={product.product_id?.images?.length > 0 ? product.product_id?.images[0]?.img || ProductImageOne : ProductImageOne} alt="" width={136} height={130} />
                </div>
                <div className="p-3">
                  <span>{product?.product_id?.title || ''}</span>
                  <p className="dreaming-midnight-x1">{product?.product_id?.category?.category_name}</p>
                  <p className="dreaming-midnight-x1">{product?.product_id?.SKU_Number}</p>
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
        <hr/>
        </div>
      })}

      <div className="shipping-details border-bottom border-secondary pt-3 text-muted">
        <h4 className="fw-bold">Shipping Details:</h4>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <strong>Recipient:</strong><br/>
            Name: {user?.full_Name} <br/> address: {user?.address || ''}<br/> mobile: {user?.mobile} <br/>
            <strong>Payment Status: {productData?.payment_status || ''}</strong>
          </div>
          {productData?.tracking.length > 0 ? (
            <div>
              
            <p>
              Tracking Code: {productData?.tracking[0]?.code || ''} <br/>
              <Link href={productData?.tracking[0]?.url || ''}>
                <a className="btn btn-info btn-sm text-white" target="_blank">Track Order</a>
              </Link>
            </p>
            </div>) : null }
        </div>
      </div>
    </div>
  );
}

export default Viewpage;
