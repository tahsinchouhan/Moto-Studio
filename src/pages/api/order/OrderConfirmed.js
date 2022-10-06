import { apipath } from "../apiPath";

export default async function handler(req, res) {
  const endpoint = req.headers.host.includes("localhost")
    ? process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL_LOCAL
    : process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL;
  if (req.method === "POST") {
    const { mihpayid, status, email, mode, txnid, amount } = req.body;
    if (status === "success") {
      const order_id = txnid.split("-")[2];
      const response = await fetch(`${apipath}/api/v1/order/payment_verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id, email, mode, mihpayid }),
      });
      const jsonData = await response.json();
      console.log(jsonData);
      const data = jsonData.data;
      const ShipRocket = async (createOrder) => {
        console.log("createOrder is:", createOrder);
        const Token = localStorage.getItem("ship-token");
        try {
          const res = await fetch(`${apipath}/api/v1/order/shiprocket/order`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${Token}`,
            },
            body: JSON.stringify({
              order_id: data.order_id,
              order_date: data.createdAt,
              pickup_location: "Sundar Nagar",
              channel_id: "2939322",
              comment: "",
              billing_customer_name: data.billingAddress?.first_name,
              billing_last_name: data.billingAddress?.last_name,
              billing_address: data.billingAddress?.address,
              billing_address_2: data.billingAddress?.address,
              billing_city: data.billingAddress?.city,
              billing_pincode: data.billingAddress?.pincode,
              billing_state: data.billingAddress?.state,
              billing_country: data.billingAddress?.country,
              billing_email: data.billingAddress?.email,
              billing_phone: data.billingAddress?.mobile,
              shipping_is_billing: true,
              shipping_customer_name: data.shippingAddress?.gift_firstname,
              shipping_last_name: data.shippingAddress?.gift_lastname,
              shipping_address: data.shippingAddress?.gift_address,
              shipping_address_2: data.shippingAddress?.gift_address,
              shipping_city: data.shippingAddress?.gift_city,
              shipping_pincode: data.shippingAddress?.gift_pincode,
              shipping_country: data.shippingAddress?.gift_country,
              shipping_state: data.shippingAddress?.gift_state,
              shipping_email: data.shippingAddress?.gift_email,
              shipping_phone: data.shippingAddress?.gift_mobile,
              order_items: data.products_.map((item) => ({
                name: item.product_id,
                sku: item._id,
                units: item.quantity,
                selling_price: item.price,
                discount: item.discount_value,
                tax: item.taxable_amount,
                hsn: 1,
              })),
              payment_method: data.payment_status,
              shipping_charges: data.total_shippingAmount,
              giftwrap_charges: 0,
              transaction_charges: 0,
              total_discount: 0,
              sub_total: data.total_amount,
              length: 10,
              breadth: 15,
              height: 20,
              weight: 2.5,
            }),
          });
          const result = await res.json();
          console.log("shiprocket result is:", result);
        } catch (error) {
          console.log("error is:", error);
        }
      };
      console.log(ShipRocket(data));
      console.log("payment verified----------------->");
      const paymentresponse = await fetch(apipath + "/api/v1/payments/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          order_id,
          user_id: jsonData.data.user_id,
          products: jsonData.data.products_,
        }),
      });
      await paymentresponse.json();
      console.log("Payment & Cart Updated----------------->");
      res.writeHead(302, { Location: endpoint.replace("api/", "") }).end();
    }
  } else {
    res.writeHead(302, { Location: endpoint }).end();
  }
}
