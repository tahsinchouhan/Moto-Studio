import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import Item from "../../components/Item";
import { CardContext } from "../../components/Layout";
import { apipath } from "../api/apiPath";
// import axios from "axios";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import TextError from "../../components/TextError";

function Shopping({ weightData }) {
  const { user, item, totalAmount, totalItem, fetchCartData, clearCart } =
    useContext(CardContext);
  const giftAddress = useRef(null);

  const router = useRouter();
  const [show, setShow] = useState(false);
  const [promoList, setPromoList] = useState([]);
  const [promoValue, setPromoValue] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [billingAddress, setBillingAddress] = useState(null);
  const [step, setStep] = useState(0);
  const [addressList, setAddressList] = useState(false);
  const [shippingCharge, setShippingCharge] = useState(0);
  const { data: session, status } = useSession();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (item?.length > 0) {
      let data = [];
      let shipping = 0;
      for (let i = 0; i < item?.length; i++) {
        let filterData = weightData.filter(
          (a) => a._id === item[i]?.weight_type
        );
        data.push({
          ...item[i],
          shippingAmount: filterData[0].shipping_amount || 0,
        });
        shipping +=
          Number(filterData[0].shipping_amount || 0) * (item[i]?.quantity || 0);
      }
      setProducts(data);
      setShippingCharge(shipping);
    } else {
      setProducts([]);
    }
  }, [item]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const giftCheckBoxYes = useRef(null);
  const giftCheckBoxNo = useRef(null);

  // Shipping address configurations
  const [giftMsg, setGiftMsg] = useState("");
  const handleChange = (event, values) => {
    // console.log('change field name: ',values)
    setShippingAddress({
      ...shippingAddress,
      [event.target.name]: event.target.value,
    });
    values[event.target.name] = event.target.value;
  };

  const chackedGift = (e, values) => {
    // if (e.target.id === "flexCheckCheckedNo") {
    giftAddress.current.classList.add("hiddGiftAddress");
    giftAddress.current.classList.remove("visibleGiftAddress");
    // setShippingAddress({
    //   gift_firstname: values?.first_name || '',
    //   gift_lastname: values?.last_name || '',
    //   gift_email: values?.email || '',
    //   gift_mobile: values?.mobile || '',
    //   gift_pincode: values?.pincode || '',
    //   gift_address: values?.address || '',
    //   gift_country: values?.country || '',
    //   gift_city: values?.city || '',
    //   gift_state: values?.state || '',
    // });
    values.gift_firstname = values.first_name;
    values.gift_lastname = values.last_name;
    values.gift_email = values.email;
    values.gift_mobile = values.mobile;
    values.gift_address = values.address;
    values.gift_city = values.city;
    values.gift_state = values.state;
    values.gift_pincode = values.pincode;
    values.gift_country = values.country;
    setGiftMsg("Sender Address and Recipient address will be same");
    // }
    // if (e.target.id === "flexCheckCheckedYes") {
    //   giftAddress.current.classList.remove("hiddGiftAddress");
    //   giftAddress.current.classList.add("visibleGiftAddress");
    //   values.gift_firstname = "";
    //   values.gift_lastname = "";
    //   values.gift_email = "";
    //   values.gift_mobile = "";
    //   values.gift_address = "";
    //   values.gift_city = "";
    //   values.gift_state = "";
    //   values.gift_pincode = "";
    //   values.gift_country = "";
    //   setShippingAddress({
    //     gift_firstname: "",
    //     gift_lastname: "",
    //     gift_email: "",
    //     gift_mobile: "",
    //     gift_pincode: "",
    //     gift_address: "",
    //     gift_country: "",
    //     gift_city: "",
    //     gift_state: "",
    //   });
    //   console.log("cart2 shipping add values is: ", values);
    //   setGiftMsg("");
    // }
  };
  // End shipping Address

  const initialValues = {
    full_name: billingAddress?.full_name || "",
    first_name:
      billingAddress?.first_name || user?.billingAddress[0]?.first_name || "",
    last_name:
      billingAddress?.last_name || user?.billingAddress[0]?.last_name || "",
    email: billingAddress?.email || user?.billingAddress[0]?.email || "",
    mobile: billingAddress?.mobile || user?.billingAddress[0]?.mobile || "",
    pincode: billingAddress?.pincode || user?.billingAddress[0]?.pincode || "",
    address: billingAddress?.address || user?.billingAddress[0]?.address || "",
    country: billingAddress?.country || user?.billingAddress[0]?.country || "",
    city: billingAddress?.city || user?.billingAddress[0]?.city || "",
    state: billingAddress?.state || user?.billingAddress[0]?.state || "",
    gift_firstname: shippingAddress?.gift_firstname || "",
    gift_lastname: shippingAddress?.gift_lastname || "",
    gift_email: shippingAddress?.gift_email || "",
    gift_mobile: shippingAddress?.gift_mobile || "",
    gift_pincode: shippingAddress?.gift_pincode || "",
    gift_address: shippingAddress?.gift_address || "",
    gift_country: shippingAddress?.gift_country || "",
    gift_city: shippingAddress?.gift_city || "",
    gift_state: shippingAddress?.gift_state || "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("This field is required"),
    last_name: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    mobile: Yup.string().required("This field is required").min(10).max(10),
    address: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    pincode: Yup.string().required("This field is required").min(6).max(6),
    country: Yup.string().required("This field is required"),
    gift_firstname: Yup.string().required("This field is required"),
    gift_lastname: Yup.string().required("This field is required"),
    gift_email: Yup.string().required("This field is required"),
    gift_mobile: Yup.string()
      .required("This field is required")
      .min(10)
      .max(10),
    gift_address: Yup.string().required("This field is required"),
    gift_city: Yup.string().required("This field is required"),
    gift_state: Yup.string().required("This field is required"),
    gift_pincode: Yup.string().required("This field is required").min(6).max(6),
    gift_country: Yup.string().required("This field is required"),
  });

  const getToken = async () => {
    try {
      const res = await fetch(
        "https://apiv2.shiprocket.in/v1/external/auth/login",
        {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "bd.bhuwnesh@gmail.com",
            password: "123456",
          }),
        }
      );

      const data = await res?.json();
      localStorage.setItem("ship-token", data.token);
      return data.token;
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (values, onSubmitProps) => {
    user.billingAddress = [
      {
        full_name: values?.first_name + " " + values?.last_name || "",
        first_name: values?.first_name || "",
        last_name: values?.last_name || "",
        email: values?.email || "",
        mobile: values?.mobile || "",
        pincode: values?.pincode || "",
        address: values?.address || "",
        country: values?.country || "",
        city: values?.city || "",
        state: values?.state || "",
      },
    ];
    user.shippingAddress = [
      {
        firstname: values?.gift_firstname || "",
        lastname: values?.gift_lastname || "",
        email: values?.gift_email || "",
        mobile: values?.gift_mobile || "",
        pincode: values?.gift_pincode || "",
        address: values?.gift_address || "",
        country: values?.gift_country || "",
        city: values?.gift_city || "",
        state: values?.gift_state || "",
      },
    ];
    user.address =
      values.gift_address +
      " " +
      values.gift_city +
      " " +
      values.gift_state +
      " " +
      values.gift_pincode;

    setShippingAddress({
      gift_firstname: values?.gift_firstname || "",
      gift_lastname: values?.gift_lastname || "",
      gift_email: values?.gift_email || "",
      gift_mobile: values?.gift_mobile || "",
      gift_pincode: values?.gift_pincode || "",
      gift_address: values?.gift_address || "",
      gift_country: values?.gift_country || "",
      gift_city: values?.gift_city || "",
      gift_state: values?.gift_state || "",
    });
    setBillingAddress({
      full_name: values?.first_name + " " + values?.last_name || "",
      first_name: values?.first_name || "",
      last_name: values?.last_name || "",
      email: values?.email || "",
      mobile: values?.mobile || "",
      pincode: values?.pincode || "",
      address: values?.address || "",
      // area: values?.area || "",
      // landmark: values?.landmark || "",
      country: values?.country || "",
      city: values?.city || "",
      state: values?.state || "",
    });
    try {
      await fetch(apipath + `/api/v1/users/update/${user?._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          billingAddress: [
            {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
              mobile: values.mobile,
              pincode: values.pincode,
              address: values.address,
              country: values.country,
              city: values.city,
              state: values.state,
            },
          ],
          shippingAddress: [
            {
              firstname: values.gift_firstname,
              lastname: values.gift_lastname,
              email: values.gift_email,
              mobile: values.gift_mobile,
              pincode: values.gift_pincode,
              address: values.gift_address,
              country: values.gift_country,
              city: values.gift_city,
              state: values.gift_state,
            },
          ],
          address:
            values.gift_address +
            " " +
            values.gift_city +
            " " +
            values.gift_state +
            " " +
            values.gift_pincode,
        }),
      });
    } catch (error) {
      console.log("error :>> ", error);
    }
    setAddressList(true);
    PaymentPayU(item);

    scrollToTop();
  };

  const fetchPromoList = async () => {
    try {
      const res = await fetch(apipath + `/api/v1/payments/promo-code/list`);
      const result = await res.json();
      setPromoList(result?.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    if (session && status !== "loading") {
      fetchCartData(session);
    }
    fetchPromoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const promoHandler = (data) => {
    setPromoValue({
      type: data?.amount ? "amount" : "percentage",
      value: data?.amount || (totalAmount * data.percentage) / 100,
      code: data?.code || "",
      promocode_id: data?._id || "",
    });
    setShow(false);
  };

  // console.log(
  //   "second",
  //   shippingAddress,
  //   billingAddress,
  //   shippingCharge,
  //   products
  // );

  const PaymentPayU = async (data) => {
    const form = document.getElementById("payUform");
    if (!user) {
      router.push("/auth/Login");
      return;
    }
    if (data.length === 0) return false;

    if (!shippingAddress || !billingAddress) {
      setStep(1);
      return;
    }

    let result = [];
    let products_id = [];

    data.map((val) => {
      result.push({
        product_id: val.product?._id,
        weight_type: val.weight_type,
        quantity: val.quantity,
        price: val.price,
        discount_value: val.discount,
        gst_amount: val.gst_amount * val.quantity,
        taxable_amount: val.taxable_amount * val.quantity,
      });
      products_id.push(val.product?._id);
    });

    const createOrder = await axios.post(`${apipath}/api/v1/order/create`, {
      products: result,
      total_amount:
        data.reduce((a, v) => (a = a + v.price * v.quantity), 0) +
        shippingCharge,
      total_quantity: data.reduce((a, v) => (a = a + v.quantity), 0),
      total_items: data?.length || 1,
      total_shippingAmount: shippingCharge,
      user_id: user._id,
      address: "",
      billingAddress,
      shippingAddress,
      email: user.email,
    });
    console.log("createOrder is:", createOrder);
    // call  ShipRocket(createOrder)
    ShipRocket(createOrder);

    // if (createOrder.data) {
    //   const hashPayload = {
    //     key: "fkU5mt", //"oZ7oo9", //"gtKFFx",
    //     txnid:
    //       "txnid-" + Date.now().toString() + "-" + createOrder.data.data._id,
    //     amount:
    //       data.reduce((a, v) => (a = a + v.price * v.quantity), 0) +
    //       shippingCharge -
    //       (promoValue?.value || 0),
    //     productinfo: result,
    //     firstname: user?.first_Name || user?.full_Name,
    //     email: user?.email,
    //     SALT: "ePEMLITZqPois1PMk19WjPiWTZ4k3l1Q", //"UkojH5TS", //"wia56q6O",
    //   };
    //   const hash = sha512(
    //     `${hashPayload.key}|${hashPayload.txnid}|${
    //       hashPayload.amount
    //     }|${hashPayload.productinfo.toString()}|${hashPayload.firstname}|${
    //       hashPayload.email
    //     }|||||||||||${hashPayload.SALT}`
    //   );
    //   form.key.value = hashPayload.key;
    //   form.txnid.value = hashPayload.txnid;
    //   form.productinfo.value = hashPayload.productinfo.toString();
    //   form.amount.value = hashPayload.amount;
    //   form.email.value = hashPayload.email;
    //   form.phone.value = user?.mobile || billingAddress?.mobile;
    //   form.firstname.value =
    //     hashPayload.firstname || billingAddress?.first_name;
    //   form.lastname.value = billingAddress?.last_name;
    //   form.city.value = billingAddress?.city;
    //   form.state.value = billingAddress?.state;
    //   form.country.value = billingAddress?.country;
    //   form.zipcode.value = billingAddress?.pincode;
    //   form.address1.value = JSON.stringify(billingAddress);
    //   form.address2.value = JSON.stringify(shippingAddress);
    //   form.hash.value = hash;
    //   form.submit();
    // }
  };

  // const token =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI5MTU2MjQsImlzcyI6Imh0dHBzOi8vYXBpdjIuc2hpcHJvY2tldC5pbi92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNjY0MzM4MTE2LCJleHAiOjE2NjUyMDIxMTYsIm5iZiI6MTY2NDMzODExNiwianRpIjoicEFoY2ZicjdHaE5Tb3d3MyJ9.GL0GCefTf2Ru8wTiwyBOuTiIZPjdGWIMvlh_rvln0iU";

  // login to https://apiv2.shiprocket.in/v1/external/auth/login with email bd.bhuwnesh@gmail.com and pasword 123456 and get token

  const ShipRocket = async (createOrder) => {
    console.log("createOrder is:", createOrder);
    const data = createOrder.data.data;
    const token = await getToken();
    console.log("token is:", token);
    await fetch("https://apiv2.shiprocket.in/v1/external/orders/create/adhoc", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
    console.log("shiprocket data is:", data);
  };

  const formControl = {
    borderColor: "#e5e5e5 !important",
    color: "#666666",
    outline: "none",
    boxShadow: "none",
    borderRadius: 0,
    fontSize: 16,
  };

  const payUform = (
    <form action="https://secure.payu.in/_payment" method="post" id="payUform">
      <input type="hidden" name="key" />
      <input type="hidden" name="txnid" />
      <input type="hidden" name="productinfo" />
      <input type="hidden" name="amount" />
      <input type="hidden" name="email" />
      <input type="hidden" name="firstname" />
      <input type="hidden" name="lastname" />
      <input type="hidden" name="city" />
      <input type="hidden" name="state" />
      <input type="hidden" name="country" />
      <input type="hidden" name="zipcode" />
      <input type="hidden" name="address1" />
      <input type="hidden" name="address2" />
      <input
        type="hidden"
        name="surl"
        value="https://www.chhattisgarhherbals.org/api/order/OrderConfirmed"
      />
      <input
        type="hidden"
        name="furl"
        value="https://www.chhattisgarhherbals.org/api/order/paymentFailed"
      />
      <input type="hidden" name="phone" />
      <input type="hidden" name="hash" />
    </form>
  );
  return (
    <div>
      <Container className="shopping-container">
        {payUform}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <Row className="p-3">
                  {step === 0 && (
                    <Col lg={8} md={12} className="mb-4 text-center">
                      <h1 className="shopping-cart-heading mb-4 text-start">
                        Shopping Cart
                      </h1>
                      <hr className="d-none d-lg-flex" />
                      <Row className="d-none d-lg-flex">
                        <Col>
                          <p className="m-0 ms-3 shopping-p-size text-start">
                            PRODUCT DETAILS
                          </p>
                        </Col>
                        <Col lg="2">
                          <p className="m-0 shopping-p-size">QUANTITY</p>
                        </Col>
                        <Col lg="1">
                          <p className="m-0 shopping-p-size">PRICE</p>
                        </Col>
                        <Col lg="1">
                          <p className="m-0 shopping-p-size">GST</p>
                        </Col>
                        <Col lg="1">
                          <p className="m-0 shopping-p-size">TAXABLE</p>
                        </Col>
                        <Col lg="1">
                          <p className="m-0 shopping-p-size">TOTAL</p>
                        </Col>
                      </Row>
                      <hr />
                      <div
                        className="card-container card-div"
                        style={{ height: "450px", overflow: "auto" }}
                      >
                        {products.map((elem, index) => {
                          return <Item key={index} {...elem} />;
                        })}
                        <div className="text-start text-uppercase fw-lighter mt-lg-4">
                          <span
                            className="text-decoration-underline cursor-pointer"
                            onClick={() => router.push("/product")}
                          >
                            Continue Shopping
                          </span>
                        </div>
                      </div>
                    </Col>
                  )}
                  {step === 1 && (
                    <Col lg={8} md={12} className="mb-4 ">
                      <h1 className="shopping-cart-heading mb-3">
                        Delivery Details
                      </h1>
                      <div
                        className="text-primary mb-2 text-center"
                        style={{ fontFamily: "Georgia", fontSize: "18px" }}
                      >
                        {giftMsg}
                      </div>
                      <p
                        style={{
                          color: "#5ABF77",
                          fontWeight: "bold",
                          fontFamily: "serif",
                          marginBottom: "3px",
                        }}
                      >
                        BILLING DETAILS
                      </p>
                      <div className="card-container card-div">
                        {!addressList ? (
                          <>
                            <Row>
                              <Col>
                                <div className="form-group user-field mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="first_name"
                                  >
                                    First Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="text"
                                    name="first_name"
                                    placeholder="Enter your first name here"
                                    autoComplete="off"
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="first_name"
                                    component={TextError}
                                  />
                                </div>
                              </Col>
                              <Col>
                                <div className="form-group user-field mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="last_name"
                                  >
                                    Last Name{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="text"
                                    name="last_name"
                                    placeholder="Enter your last name here"
                                    autoComplete="off"
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="last_name"
                                    component={TextError}
                                  />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col>
                                <div className="form-group user-field mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="email"
                                  >
                                    Email Address{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address here"
                                    autoComplete="off"
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="email"
                                    component={TextError}
                                  />
                                </div>
                              </Col>
                              <Col>
                                <div className="col-md-12">
                                  <div className="form-group user-field mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="mobile"
                                    >
                                      Mobile Number{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="number"
                                      name="mobile"
                                      placeholder="Enter your mobile number here"
                                      style={formControl}
                                    />
                                    <ErrorMessage
                                      name="mobile"
                                      component={TextError}
                                    />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="form-group user-field mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="address"
                                  >
                                    Street Address{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="text"
                                    name="address"
                                    // placeholder=""
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="address"
                                    component={TextError}
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="form-group user-field  mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="city"
                                  >
                                    City <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="text"
                                    name="city"
                                    // placeholder="Locality / Area (Optional)"
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="city"
                                    component={TextError}
                                  />
                                </div>
                              </Col>

                              <Col>
                                <div className="form-group user-field  mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="state"
                                  >
                                    State/Province{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="form-group user-field  mb-4">
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="text"
                                      name="state"
                                      // placeholder="Landmark (Optional)"
                                      style={formControl}
                                    />
                                    <ErrorMessage
                                      name="state"
                                      component={TextError}
                                    />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="form-group user-field  mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="pincode"
                                  >
                                    Pincode{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="number"
                                    name="pincode"
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="pincode"
                                    component={TextError}
                                  />
                                </div>
                              </Col>
                              <Col>
                                <div className="form-group user-field  mb-4">
                                  <label
                                    className="lableFontWeight"
                                    htmlFor="country"
                                  >
                                    Country{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="text"
                                    name="country"
                                    style={formControl}
                                  />
                                  <ErrorMessage
                                    name="country"
                                    component={TextError}
                                  />
                                </div>
                              </Col>
                            </Row>

                            {/* <p
                              style={{
                                color: "#5ABF77",
                                fontWeight: "bold",
                                fontFamily: "serif",
                              }}
                              className="mt-3"
                            >
                              IS THIS ORDER A GIFT?
                            </p> */}

                            <Row className="w-25 ms-2 invisible">
                              <Col className="d-flex mb-1">
                                <div className="form-check invisible">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="flexCheckCheckedYes"
                                    name="giftaddressorder"
                                    onClick={(e) =>
                                      chackedGift(e, formik.values)
                                    }
                                    ref={giftCheckBoxYes}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckCheckedYes"
                                  >
                                    YES
                                  </label>
                                </div>
                              </Col>
                              <Col className="d-flex">
                                <div className="form-check invisible">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    id="flexCheckCheckedNo"
                                    name="giftaddressorder"
                                    onClick={(e) =>
                                      chackedGift(e, formik.values)
                                    }
                                    ref={giftCheckBoxNo}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckCheckedNo"
                                  >
                                    No
                                  </label>
                                </div>
                              </Col>
                            </Row>

                            <div ref={giftAddress} className="giftaddressForm">
                              <p className="mt-2 lableFontWeight fs-5">
                                Enter the details of the recipient:
                              </p>
                              <Row>
                                <Col>
                                  <div className="form-group user-field mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_firstname"
                                    >
                                      First Name{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="text"
                                      name="gift_firstname"
                                      placeholder="Enter your first name here"
                                      autoComplete="off"
                                      style={formControl}
                                      value={formik.values?.gift_firstname}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_firstname"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>
                                <Col>
                                  <div className="form-group user-field mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_lastname"
                                    >
                                      Last Name{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="text"
                                      name="gift_lastname"
                                      placeholder="Enter your last name here"
                                      autoComplete="off"
                                      style={formControl}
                                      value={formik.values?.gift_lastname}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_lastname"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="form-group user-field mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_email"
                                    >
                                      Email Address{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="email"
                                      name="gift_email"
                                      placeholder="Enter your email address here"
                                      autoComplete="off"
                                      style={formControl}
                                      value={formik.values?.gift_email}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_email"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>
                                <Col>
                                  <div className="col-md-12">
                                    <div className="form-group user-field mb-4">
                                      <label
                                        className="lableFontWeight"
                                        htmlFor="gift_mobile"
                                      >
                                        Mobile Number{" "}
                                        <span className="text-danger">*</span>
                                      </label>
                                      <Field
                                        className="Contact-Us-form-input form-control"
                                        type="number"
                                        name="gift_mobile"
                                        placeholder="Enter your mobile number here"
                                        style={formControl}
                                        value={formik.values?.gift_mobile}
                                        onChange={(event) =>
                                          handleChange(event, formik.values)
                                        }
                                      />
                                      <ErrorMessage
                                        name="gift_mobile"
                                        component={TextError}
                                      />
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="form-group user-field mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_address"
                                    >
                                      Street Address{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="text"
                                      name="gift_address"
                                      // placeholder=""
                                      style={formControl}
                                      value={formik.values?.gift_address}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_address"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="form-group user-field  mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_city"
                                    >
                                      City{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="text"
                                      name="gift_city"
                                      // placeholder="Locality / Area (Optional)"
                                      style={formControl}
                                      value={formik.values?.gift_city}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_city"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>

                                <Col>
                                  <div className="form-group user-field  mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_state"
                                    >
                                      State/Province{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group user-field  mb-4">
                                      <Field
                                        className="Contact-Us-form-input form-control"
                                        type="text"
                                        name="gift_state"
                                        // placeholder="Landmark (Optional)"
                                        style={formControl}
                                        value={formik.values?.gift_state}
                                        onChange={(event) =>
                                          handleChange(event, formik.values)
                                        }
                                      />
                                      <ErrorMessage
                                        name="gift_state"
                                        component={TextError}
                                      />
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="form-group user-field  mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_pincode"
                                    >
                                      Pincode{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="number"
                                      name="gift_pincode"
                                      // placeholder="Pincode"
                                      style={formControl}
                                      value={formik.values?.gift_pincode}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_pincode"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>
                                <Col>
                                  <div className="form-group user-field  mb-4">
                                    <label
                                      className="lableFontWeight"
                                      htmlFor="gift_country"
                                    >
                                      Country{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <Field
                                      className="Contact-Us-form-input form-control"
                                      type="text"
                                      name="gift_country"
                                      // placeholder="Pincode"
                                      style={formControl}
                                      value={formik.values?.gift_country}
                                      onChange={(event) =>
                                        handleChange(event, formik.values)
                                      }
                                    />
                                    <ErrorMessage
                                      name="gift_country"
                                      component={TextError}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </div>

                            {/* <div className="col-md-4">
                            <div className="form-group user-field my-4">
                              <ButtonDark type="submit" text="SAVE ADDRESS" />
                            </div>
                          </div> */}
                          </>
                        ) : (
                          <div className="shipping-address">
                            <h5
                              className="mb-3"
                              style={{ fontFamily: "serif" }}
                            >
                              Billing to
                            </h5>
                            <div className="d-flex justify-content-between">
                              <div
                                className="address-details"
                                style={{ lineHeight: 0.3 }}
                              >
                                <p>
                                  <strong>Recipient: </strong>
                                  {billingAddress.first_name}{" "}
                                  {billingAddress.last_name}
                                </p>
                                <p className="address-details-p">
                                  <strong>Address: </strong>
                                  {billingAddress.address} {billingAddress.city}
                                  , {billingAddress.state} -{" "}
                                  {billingAddress.pincode}
                                </p>
                                <p>
                                  <strong>Mobile: </strong>
                                  {billingAddress.mobile}
                                </p>
                              </div>
                              <div>
                                <button
                                  className="btn btn-success rounded-0"
                                  onClick={() => {
                                    setStep(1);
                                    setAddressList(false);
                                  }}
                                >
                                  Change
                                </button>
                              </div>
                            </div>
                            <h6
                              className="mt-3"
                              style={{
                                color: "#5ABF77",
                                fontWeight: "bold",
                                fontFamily: "serif",
                              }}
                            >
                              SHIPPING DETAILS
                            </h6>
                            <h5
                              className="mb-3"
                              style={{ fontFamily: "serif" }}
                            >
                              Shipping to
                            </h5>
                            <div className="d-flex justify-content-between">
                              <div
                                className="address-details"
                                style={{ lineHeight: 0.3 }}
                              >
                                <p>
                                  <strong>Recipient: </strong>
                                  {shippingAddress.gift_firstname}{" "}
                                  {shippingAddress.gift_lastname}
                                </p>
                                <p className="address-details-p">
                                  <strong>Address: </strong>
                                  {shippingAddress.gift_address}{" "}
                                  {shippingAddress.gift_city},{" "}
                                  {shippingAddress.gift_state} -{" "}
                                  {shippingAddress.gift_pincode}
                                </p>
                                <p>
                                  <strong>Mobile: </strong>
                                  {shippingAddress.gift_mobile}
                                </p>
                              </div>
                              {/* <div>
                                <button
                                  className="btn btn-success rounded-0"
                                  onClick={() => {
                                    setStep(1);
                                    setAddressList(false);
                                  }}
                                >
                                  Change
                                </button>
                              </div> */}
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                  )}
                  <Col lg={4} md={12}>
                    <div className="order-summary-card p-4 pb-3">
                      <h6 className="fw-bold order-summary-text">
                        ORDER SUMMARY
                      </h6>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="order-summary-p1 text-uppercase">
                            {totalItem} x Items
                          </p>
                        </div>
                        <div>
                          <p className="fw-bold order-summary-p2">
                            {" "}
                            ₹ {totalAmount}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="order-summary-p1 text-uppercase">
                            SHIPPING
                          </p>
                        </div>
                        <div>
                          <p className="fw-bold order-summary-p2">
                            {" "}
                            ₹ {shippingCharge}
                          </p>
                        </div>
                      </div>
                      {promoValue ? (
                        <div className="free-home-delivery-div">
                          <p className=" m-0 px-2 pt-1 free-home-delivery-p">
                            <span>APPLIED PROMO CODE</span>
                            <span className="fw-bold free-home-delivery-p2 ">
                              {promoValue.code}
                            </span>
                          </p>
                        </div>
                      ) : (
                        <p>{""}</p>
                      )}
                      <hr className="mt-2" />
                      {promoValue && (
                        <div className="d-flex justify-content-between">
                          <div>
                            <p className="order-summary-p1">
                              APPLIED PROMO CODE
                            </p>
                          </div>
                          <div>
                            <p className="fw-bold order-summary-p2">
                              ₹ {promoValue.value}
                            </p>
                          </div>
                        </div>
                      )}
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="order-summary-p1">TOTAL COST</p>
                        </div>
                        <div>
                          {promoValue ? (
                            <p className="fw-bold order-summary-p2">
                              {" "}
                              ₹{" "}
                              {totalAmount + shippingCharge - promoValue.value}
                            </p>
                          ) : (
                            <p className="fw-bold order-summary-p2">
                              {" "}
                              ₹ {totalAmount + shippingCharge}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="w-100 border-0 checkout-button">
                          {step === 0 ? (
                            <div className="w-100 border-0 checkout-button">
                              <button
                                type="button"
                                style={{ backgroundColor: "#5ABF6B" }}
                                className="w-100 py-2 text-white border-0"
                                onClick={() => {
                                  if (!user) {
                                    router.push("/auth/Login");
                                  }
                                  setStep(1);
                                  scrollToTop();
                                }}
                              >
                                PLACE ORDER
                              </button>
                            </div>
                          ) : (
                            <div className="w-100 border-0 checkout-button">
                              <button
                                type="submit"
                                style={{ backgroundColor: "#5ABF6B" }}
                                className="w-100 py-2 text-white border-0"
                                onClick={() => {
                                  let checkeddNO =
                                    giftCheckBoxNo?.current?.checked;
                                  let checkeddYES =
                                    giftCheckBoxYes?.current?.checked;
                                  if (!checkeddNO && !checkeddYES) {
                                    document
                                      .getElementById("flexCheckCheckedNo")
                                      .click();
                                    // alert(
                                    //   "PLEASE CHECK IS THIS ORDER A GIFT? "
                                    // );
                                  }
                                }}
                              >
                                CHECKOUT
                              </button>
                            </div>
                          )}
                          {/* <ButtonDark type="submit" text="CHECKOUT" onClick={()=>{
                            console.log('checkout working')
                          }} /> */}
                        </div>
                        {/* <div
                          className="w-100 border-0 checkout-button"
                          onClick={() => PaymentPayU(item)}
                        >
                          {" "}
                          <ButtonDark type="button" text="CHECKOUT" />
                        </div> */}
                      </div>
                      {/* <div className="d-flex align-items-center justify-content-between cursor-pointer">
                        <p
                          className="order-summary-p1 mt-3 hover"
                          onClick={() => setShow(true)}
                        >
                          ADD PROMO CODE
                        </p>
                        <span onClick={() => setShow(true)}>
                          +
                        </span>
                      </div> */}
                    </div>
                  </Col>
                </Row>
              </Form>
            );
          }}
        </Formik>

        {/* <Col lg={4} md={12}>
            <div className="order-summary-card p-4 pb-2">
              <h6 className="fw-bold order-summary-text">ORDER SUMMARY</h6>
              <hr className="my-4" />

              <div className="d-flex justify-content-between">
                <div>
                  <p className="order-summary-p1 text-uppercase">
                    {totalItem} x Items
                  </p>
                </div>
                <div>
                  <p className="fw-bold order-summary-p2"> ₹ {totalAmount}</p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="order-summary-p1">SHIPPING</p>
                <span style={{ fontSize: "13px" }}>₹0.00</span>
              </div>
              {
                <div className="free-home-delivery-div">
                  <p className=" m-0 px-2 pt-1 free-home-delivery-p">
                    <span>APPLIED PROMO CODE</span>
                    <span className="fw-bold free-home-delivery-p2 ">
                      CODE50
                    </span>
                  </p>
                </div>
              }
              <hr className="mt-2" />
              {promoValue && (
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="order-summary-p1">APPLIED PROMO CODE</p>
                  </div>
                  <div>
                    <p className="fw-bold order-summary-p2">
                      ₹ {promoValue.value}
                    </p>
                  </div>
                </div>
              )}
              <div className="d-flex justify-content-between">
                <div>
                  <p className="order-summary-p1">TOTAL COST</p>
                </div>
                <div>
                  {promoValue ? (
                    <p className="fw-bold order-summary-p2">
                      {" "}
                      ₹ {totalAmount - promoValue.value}
                    </p>
                  ) : (
                    <p className="fw-bold order-summary-p2"> ₹ {totalAmount}</p>
                  )}
                </div>
              </div>
              
              <div className="text-center">
                <div
                  className="w-100 border-0 checkout-button"
                  onClick={() => PaymentPayU(item)}
                >
                  {" "}
                  <ButtonDark type="button" text="CHECKOUT" />
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between cursor-pointer">
                <p
                  className="order-summary-p1 mt-3 hover"
                  onClick={() => setShow(true)}
                >
                  ADD PROMO CODE
                </p>
                <span onClick={() => setShow(true)}>+</span>
              </div>
            </div>
          </Col> */}

        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Body className="py-5">
            <h5 className="text-center pb-4">Select Promo Code</h5>
            <ul className="list-group list-group-flush">
              {promoList.length > 0
                ? promoList.map((promo) => {
                    return (
                      <li
                        key={`promo${promo._id}`}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {promo?.description || "Description"}
                        <span
                          className="badge bg-primary rounded-pill"
                          onClick={() => promoHandler(promo)}
                        >
                          {promo?.code || ""}
                        </span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Shopping;

export async function getServerSideProps(context) {
  const response = await fetch(`${apipath}/api/v1/units/weight/list`);
  const result = await response.json();

  return { props: { weightData: result.data } };
}
