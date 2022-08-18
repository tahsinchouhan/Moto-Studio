
const shippingPolicy = () => {
  return (
    <>
      <div className="all-product-heading">
        <div style={{ paddingTop: "26px", paddingBottom: "40px" }}>
          <div className="store-home">
            <span>Store Home &gt; </span>
          </div>
          <div className="products-header text-center">
            <h1 className="product-name-head-text">
             Shipping Policy
            </h1>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h1 className="text-center mb-4">Shipping Policy</h1>
        <section>
        The ecommerce store - is  managed. By Avani Ayurved Pvt Lt- Authorised distributor of Chhattisgarh Herbals. <br />
        Cash on delivery is available on select Indian pin-codes. COD is applicable on orders above ₹375/-. /<br />
        Shipping charges of ₹50 for COD orders below ₹500. <br/>
        Purchases are shipped from our warehouse in Mohali, Punjab by courier. Please allow following number of  days from receipt of your order.
        For domestic – 7 to 14 business days. <br />
        Order deliveries will be made between 9am – 5pm Monday – Friday. <br />
        Goods will need to be signed for upon delivery. If you cannot be there to sign for your delivery please suggest an alternative i.e. a family member, colleague, neighbor, etc. CG Herbals® takes no responsibility for goods signed by an alternative person.
        CG Herbals® is not responsible for damage after delivery. <br />
        All claims for shortages or damages must be reported to customer service on the day of delivery. <br />
        Shipping and handling rates may vary based on product, packaging, size , volume, type and other considerations. The shipping and handling charges are given at the time of check out and consumers will know about this before making payments.

        </section>
      </div>

      <style jsx>
      {`
        * {
          font-family: 'Lato';
        }

        h1, h4 {
          font-family: 'Lora';
        }
      `}
      </style>
    </>
   
  )
}

export default shippingPolicy