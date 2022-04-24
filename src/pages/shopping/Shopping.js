import { useState, useEffect, useContext } from "react";
import ButtonDark from "../../components/button/ButtonDark";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { CardContext } from "../../components/Layout";
import Item from "../../components/Item";
import { apipath } from "../api/apiPath";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";
import * as Yup from "yup";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function Shopping() {
  const { user, item, totalAmount, totalItem, fetchCartData, clearCart } =
    useContext(CardContext);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [promoList, setPromoList] = useState([]);
  const [promoValue, setPromoValue] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);
  const [step, setStep] = useState(0);
  const [addressList, setAddressList] = useState(false);
  const { data: session, status } = useSession();

  const initialValues = {
    full_name: shippingAddress?.full_name || "",
    mobile: shippingAddress?.mobile || "",
    pincode: shippingAddress?.pincode || "",
    address: shippingAddress?.address || "",
    area: shippingAddress?.area || "",
    landmark: shippingAddress?.landmark || "",
    city: shippingAddress?.city || "",
    state: shippingAddress?.state || "",
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required("This field is required"),
    mobile: Yup.string().required("This field is required").min(10).max(10),
    pincode: Yup.string().required("This field is required").min(6).max(6),
    address: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    setShippingAddress(values);
    setAddressList(true);
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

  const varifyPayment = async (data) => {
    try {
      const response = await fetch(`${apipath}/api/v1/payments/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.status === 200 && result.message === "Payment Successfull!")
        // clear cart data
        clearCart();
      router.push("/order/OrderConfirmed");
    } catch (error) {
      console.log(error);
    }
  };

  const displayRazorpay = async (data) => {
    if (!user) {
      router.push("/auth/Login");
      return;
    }
    if (data.length === 0) return false;

    if (!shippingAddress || !addressList) {
      setStep(1);
      return;
    }

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load . Are you online!");
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
      });
      products_id.push(val.product?._id);
    });

    if (
      data.reduce((a, v) => (a = a + v.price * v.quantity), 0) -
        (promoValue?.value || 0) >
      40000
    ) {
      alert("Amount exceeds the limit rs.40000 for per Transaction");
      return false;
    }

    // const createOrder = await axios.post(`${apipath}/api/v1/order/create`, {
    //   products: result,
    //   total_amount: data.reduce((a, v) => (a = a + v.price * v.quantity), 0),
    //   total_quantity: data.reduce((a, v) => (a = a + v.quantity), 0),
    //   total_items: data.reduce((a, v) => (a = a + v.quantity), 0),
    //   customer_id: userData.user._id,
    //   address:'Raipur'
    // })

    const orderPost = await fetch(apipath + "/api/v1/payments/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount:
          data.reduce((a, v) => (a = a + v.price * v.quantity), 0) -
          (promoValue?.value || 0),
      }),
      // { amount: createOrder.data.data.total_amount }
    });
    const orderResponse = await orderPost.json();

    const options = {
      key: "rzp_test_i3mv91RQEsOYo6",
      currency: orderResponse?.currency || "INR",
      amount: orderResponse?.amount?.toString() || "",
      order_id: orderResponse?.id || "",
      name: "CG HERBAL",
      description: "",
      image: "/images/CGHerbalsLogo.png",
      handler: function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;

        fetch(`${apipath}/api/v1/order/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: user._id,
            email: user.email,
            products: result,
            promocode: promoValue
              ? {
                  promocode_id: promoValue?.promocode_id || "",
                  value: promoValue?.value || 0,
                  code: promoValue?.code || "",
                }
              : null,
            address: user.address,
            shippingAddress: shippingAddress,
            total_amount:
              data.reduce((a, v) => (a = a + v.price * v.quantity), 0) -
              (promoValue?.value || 0),
            total_quantity: data.reduce((a, v) => (a = a + v.quantity), 0),
          }),
        })
          .then((res) => res.json())
          .then((createOrder) => {
            console.log("createOrder :>> ", createOrder);
            if (!createOrder.error) {
              varifyPayment({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                order_id: createOrder.data._id,
                products_id,
                user: user._id,
              });
            }
          })
          .catch((err) => {
            console.log("err :>> ", err);
          });
      },
      prefill: {
        name: user?.full_Name || "",
        email: user?.email || "",
        contact: user?.mobile || "",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    paymentObject.open();
  };

  const formControl = {
    borderColor: "#e5e5e5 !important",
    color: "#666666",
    outline: "none",
    boxShadow: "none",
    borderRadius: 0,
    fontSize: 16,
  };

  return (
    <div>
      <Container className="shopping-container">
        <Row className="p-3">
          {step === 0 && (
            <Col lg={8} md={12} className="mb-4 text-center">
              <h1 className="shopping-cart-heading mb-4">Shopping Cart</h1>
              <hr />
              <Row>
                <Col>
                  <p className="m-0 shopping-p-size">PRODUCT DETAILS</p>
                </Col>
                <Col lg="2">
                  <p className="m-0 shopping-p-size">QUANTITY</p>
                </Col>
                <Col lg="2">
                  <p className="m-0 shopping-p-size">PRICE</p>
                </Col>
                <Col lg="2">
                  <p className="m-0 shopping-p-size">TOTAL</p>
                </Col>
              </Row>
              <hr />
              <div
                className="card-container card-div"
                style={{ height: "450px", overflow: "auto" }}
              >
                {item?.length > 0 &&
                  item.map((elem) => {
                    return <Item key={elem._id} {...elem} />;
                  })}
                <span
                  className="text-decoration-underline cursor-pointer"
                  onClick={() => router.push("/product")}
                >
                  Continue Shopping
                </span>
              </div>
            </Col>
          )}
          {step === 1 && (
            <Col lg={8} md={12} className="mb-4 ">
              <h1 className="shopping-cart-heading mb-4">Shipping Address</h1>
              {/* <hr /> */}
              <div className="card-container card-div">
                {!addressList ? (
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {(formik) => {
                      return (
                        <Form>
                          <Row>
                            <Col>
                              <div className="form-group user-field mb-4">
                                {/* <label htmlFor="name">Name</label> */}
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="text"
                                  name="full_name"
                                  placeholder="Full name"
                                  autoComplete="off"
                                  style={formControl}
                                />
                                <ErrorMessage
                                  name="full_name"
                                  component={TextError}
                                />
                              </div>
                            </Col>
                            <Col>
                              <div className="col-md-12">
                                <div className="form-group user-field mb-4">
                                  <Field
                                    className="Contact-Us-form-input form-control"
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile Number"
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
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="text"
                                  name="address"
                                  placeholder="Address"
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
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="text"
                                  name="area"
                                  placeholder="Localaty / Area (Optional)"
                                  style={formControl}
                                />
                              </div>
                            </Col>

                            <Col>
                              <div className="form-group user-field  mb-4">
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="text"
                                  name="landmark"
                                  placeholder="Landmark (Optional)"
                                  style={formControl}
                                />
                              </div>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                              <div className="form-group user-field  mb-4">
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="number"
                                  name="pincode"
                                  placeholder="Pincode"
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
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="text"
                                  name="city"
                                  placeholder="City"
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
                                <Field
                                  className="Contact-Us-form-input form-control"
                                  type="text"
                                  name="state"
                                  placeholder="State"
                                  style={formControl}
                                />
                                <ErrorMessage
                                  name="state"
                                  component={TextError}
                                />
                              </div>
                            </Col>
                          </Row>

                          <div className="col-md-4">
                            <div className="form-group user-field my-4">
                              <ButtonDark type="submit" text="SAVE ADDRESS" />
                            </div>
                          </div>
                        </Form>
                      );
                    }}
                  </Formik>
                ) : (
                  <div className="shipping-address">
                    <h5 className="mb-3">Shipping to</h5>
                    <div className="d-flex justify-content-between">
                      <div
                        className="address-details"
                        style={{ lineHeight: 0.3 }}
                      >
                        <p>
                          <strong>Recipient: </strong>
                          {shippingAddress.full_name}
                        </p>
                        <p>
                          <strong>Address: </strong>
                          {shippingAddress.address} {shippingAddress.city},{" "}
                          {shippingAddress.state} - {shippingAddress.pincode}
                        </p>
                        <p>
                          <strong>Mobile: </strong>
                          {shippingAddress.mobile}
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
                  </div>
                )}
              </div>
            </Col>
          )}

          <Col lg={4} md={12}>
            <div className="order-summary-card p-4">
              <h6 className="fw-bold order-summary-text">ORDER SUMMARY</h6>
              <hr className="my-4" />

              <div className="d-flex justify-content-between">
                <div>
                  <p className="order-summary-p1">ITEMS-{totalItem}</p>
                </div>
                <div>
                  <p className="fw-bold order-summary-p2"> ₹ {totalAmount}</p>
                </div>
              </div>
              <p className="order-summary-p1">SHIPPING</p>
              <div className="free-home-delivery-div">
                {" "}
                <p className=" m-0 px-2 pt-1 free-home-delivery-p">
                  FREE HOME DELIVERY{" "}
                  <span className="fw-bold free-home-delivery-p2 ">₹0.00</span>
                </p>
              </div>
              <hr className="my-4" />
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
                  onClick={() => displayRazorpay(item)}
                >
                  {" "}
                  <ButtonDark type="button" text="CHECKOUT" />
                </div>
              </div>
              <p
                className="order-summary-p1 mt-3 hover"
                onClick={() => setShow(true)}
              >
                ADD PROMO CODE
              </p>
            </div>
          </Col>
        </Row>

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
