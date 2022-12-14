import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import * as Yup from "yup";
import OrderHistory from "./OrderHistory";
// import PaymentMethods from "./PaymentMethods";
import { getSession, useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import ButtonDark from "../../components/button/ButtonDark";
import { CardContext } from "../../components/Layout";
import TextError from "../../components/TextError";
import { apipath } from "../api/apiPath";
import OrderReturn from "./OrderReturn";

function UserProfile() {
  const router = useRouter();
  const { activeTab } = router.query;
  const [showProfile, setShowProfile] = useState(0);
  const [profileActive, setProfileActive] = useState(activeTab || 0);
  const [message, setMessage] = useState("");
  const { user, loading } = useContext(CardContext);
  const { data: session } = useSession();
  // console.log('user informaton is: ',user);

  useEffect(() => {
    if (!session) {
      Router.push("/auth/Login");
    }
  }, [session]);

  useEffect(() => {
    setProfileActive(activeTab || 0);
  }, [activeTab]);

  const userPofileHandler = () => {
    setShowProfile(0);
    setProfileActive(0);
  };

  const validationSchema = Yup.object({
    full_Name: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    address: Yup.string().required("This field is required"),
    city: Yup.string().required("This field is required"),
    state: Yup.string().required("This field is required"),
    pincode: Yup.string().required("This field is required").min(6).max(6),
    country: Yup.string().required("This field is required"),
  });

  let initialValues = {};
  if (loading) return <h1>Loading..</h1>;
  if (!loading) {
    initialValues = {
      full_Name: user?.full_Name || "",
      email: user?.email || "",
      password: "",
      mobile: user?.mobile || "",
      dob: user?.dob || "",
      gender: user?.gender || "",
      address: user?.billingAddress[0]?.address || "",
      city: user?.billingAddress[0]?.city || "",
      state: user?.billingAddress[0]?.state || "",
      pincode: user?.billingAddress[0]?.pincode || "",
      country: user?.billingAddress[0]?.country || "",
    };
  }

  const onSubmit = async (values) => {
    try {
      const res = await fetch(apipath + `/api/v1/users/update/${user?._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_Name: values.full_Name,
          mobile: values.mobile,
          password: values.password,
          dob: values.dob,
          gender: values.gender,
          address: values.address,
          billingAddress: [
            {
              first_name: user?.billingAddress[0]?.first_name || "",
              last_name: user?.billingAddress[0]?.last_name || "",
              email: user?.billingAddress[0]?.email || "",
              mobile: user?.billingAddress[0]?.mobile || "",
              address: values.address,
              pincode: values.pincode,
              country: values.country,
              city: values.city,
              state: values.state,
            },
          ],
        }),
      });
      const result = await res.json();
      if (result) {
        setMessage("Update Successfully!");
      }
      user.billingAddress = [
        {
          first_name: user?.billingAddress[0]?.first_name || "",
          last_name: user?.billingAddress[0]?.last_name || "",
          email: user?.billingAddress[0]?.email || "",
          mobile: user?.billingAddress[0]?.mobile || "",
          address: values?.address,
          pincode: values?.pincode || "",
          country: values?.country || "",
          city: values?.city || "",
          state: values?.state || "",
        },
      ];
    } catch (error) {
      console.log("error :>> ", error);
    }
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
    <>
      <div>
        <Container>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h1 className="register-header mt-4 text-center p-3">
                  Hello {user?.full_Name}
                </h1>
              </div>
            </div>

            <Row className="pt-4">
              <Col sm={12} md={12} lg={3}>
                <div className="user-Detail">
                  <div className="user-detail-profile d-flex justify-content-evenly d-sm-block">
                    <Row className="py-2">
                      <Col>
                        <div
                          className={
                            profileActive == 0 ? "active-color" : "User-Profile"
                          }
                          onClick={() => setProfileActive(0)}
                        >
                          <span>User Profile</span>
                          <BsChevronRight className="d-none d-md-block" />
                        </div>
                      </Col>
                    </Row>
                    <div className="user-Hr d-none d-md-block">
                      <hr />
                    </div>

                    <Row className="py-2">
                      <Col>
                        <div
                          className={
                            profileActive == 2 ? "active-color" : "User-Profile"
                          }
                          onClick={() => setProfileActive(2)}
                        >
                          <span>Order History</span>
                          <BsChevronRight className="d-none d-md-block" />
                        </div>
                      </Col>
                    </Row>
                    <div className="user-Hr d-none d-md-block">
                      <hr />
                    </div>

                    <Row>
                      <Col>
                        <div
                          className={
                            profileActive == 3 ? "active-color" : "User-Profile"
                          }
                          onClick={() => setProfileActive(3)}
                        >
                          <span>Return Order</span>
                          <BsChevronRight />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12} lg={9}>
                {profileActive == 0 ? (
                  <>
                    <Row>
                      <Col sm={12} md={8} lg={8}>
                        <Formik
                          initialValues={initialValues}
                          validationSchema={validationSchema}
                          onSubmit={onSubmit}
                        >
                          {(formik) => {
                            return (
                              <Form>
                                <div className="form-div pt-1 mt-5 mt-lg-0">
                                  <div className="row">
                                    <div className="col-md-12">
                                      {!initialValues.mobile ||
                                      !initialValues.address ? (
                                        <div
                                          className="alert alert-primary"
                                          role="alert"
                                        >
                                          Please Update your Profile Details.
                                        </div>
                                      ) : null}

                                      <div className="card bg-light">
                                        <div className="card-body p-4">
                                          <div className="card-heading d-flex justify-content-between">
                                            <h4 className=" mb-2">
                                              User Details
                                            </h4>
                                          </div>
                                          <div className="form-group user-field">
                                            <label htmlFor="name">Name</label>
                                            <Field
                                              className="form-control px-2"
                                              type="text"
                                              name="full_Name"
                                              placeholder="Entername"
                                              autoComplete="off"
                                            />
                                            <ErrorMessage
                                              name="full_Name"
                                              component={TextError}
                                            />
                                          </div>
                                          <div className="form-group user-field">
                                            <label
                                              htmlFor="number"
                                              className="mt-3"
                                            >
                                              Mobile
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="text"
                                              name="mobile"
                                            />
                                            <ErrorMessage
                                              name="mobile"
                                              component={TextError}
                                            />
                                          </div>
                                          <div className="form-group user-field">
                                            <label
                                              htmlFor="password"
                                              className="mt-3"
                                            >
                                              Password
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="password"
                                              name="password"
                                              placeholder="Enter password"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="form-div pt-4">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="card bg-light">
                                        <div className="card-body p-4">
                                          <div className="card-heading">
                                            <h4 className=" mb-2">
                                              Basic Information
                                            </h4>
                                          </div>
                                          <div className="form-group user-field">
                                            <label htmlFor="email">
                                              Email Address
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="email"
                                              name="email"
                                              placeholder="Entername"
                                              autoComplete="off"
                                              readOnly
                                            />
                                            <ErrorMessage
                                              name="email"
                                              component={TextError}
                                            />
                                          </div>
                                          <div className="form-group user-field">
                                            <label
                                              htmlFor="dob"
                                              className="mt-3"
                                            >
                                              DOB
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="date"
                                              id="dob"
                                              name="dob"
                                              autoComplete="off"
                                            />
                                            <ErrorMessage
                                              name="dob"
                                              component={TextError}
                                            />
                                          </div>

                                          <div className="mb-3">
                                            <label
                                              htmlFor="text"
                                              className="register-field mt-3 mb-1"
                                            >
                                              Gender
                                            </label>
                                            <div className="row">
                                              <div className="col col-sm-4 col-md-4 px-0">
                                                <div className="form-check">
                                                  <Field
                                                    className="gender-field"
                                                    type="radio"
                                                    name="gender"
                                                    value="Male"
                                                  />
                                                  <label className="gender-span mx-1">
                                                    Male
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col col-sm-4 col-md-4 px-0">
                                                <div className="form-check">
                                                  <Field
                                                    className="gender-field"
                                                    type="radio"
                                                    name="gender"
                                                    value="Female"
                                                  />
                                                  <label className="gender-span mx-1">
                                                    Female
                                                  </label>
                                                </div>
                                              </div>
                                              <div className="col col-sm-4 col-md-4 px-0">
                                                <div className="form-check">
                                                  <Field
                                                    className="gender-field"
                                                    type="radio"
                                                    name="gender"
                                                    value="Other"
                                                    // checked={"Other"}
                                                  />
                                                  <label className="gender-span mx-1">
                                                    Other
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* <div className="form-div pt-4">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="userprofile-card bg-light">
                                    <div className="card-body p-4" >
                                      <div className="card-heading">
                                        <h4 className=" mb-2">
                                          Shipping Information
                                        </h4>
                                      </div>
                                      <div className="form-group user-field">
                                        <label htmlFor="Address">Enter Full Address</label>
                                        <Field as ='textarea'
                                          className="form-control px-2"
                                          type="text"
                                          name="address"
                                          rows="4"
                                        />
                                         <ErrorMessage name="address" component={TextError} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}

                                <div className="form-div pt-4">
                                  <div className="row">
                                    <div className="col-md-12">
                                      <div className="userprofile-card bg-light">
                                        <div className="card-body p-4">
                                          <div className="card-heading">
                                            <h4 className="pb-2">
                                              Billing Address
                                            </h4>
                                          </div>
                                          {/* add billing addresss */}

                                          <Row>
                                            <Col>
                                              <div className="form-group user-field mb-4">
                                                <label
                                                  className="lableFontWeight"
                                                  htmlFor="address"
                                                >
                                                  Street Address{" "}
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <Field
                                                  className="form-control"
                                                  type="text"
                                                  name="address"
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
                                                  City{" "}
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <Field
                                                  className="form-control"
                                                  type="text"
                                                  name="city"
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
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <div className="form-group user-field  mb-4">
                                                  <Field
                                                    className="form-control"
                                                    type="text"
                                                    name="state"
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
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <Field
                                                  className="form-control"
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
                                                  <span className="text-danger">
                                                    *
                                                  </span>
                                                </label>
                                                <Field
                                                  className="form-control"
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
                                          {/* end billing add */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="text-center mb-4">
                                  <ButtonDark
                                    type="submit"
                                    text="Update"
                                    className="btn btn-submit"
                                  />
                                  <span className="text-success">
                                    {message}
                                  </span>
                                </div>
                              </Form>
                            );
                          }}
                        </Formik>
                      </Col>
                      {/* <Col sm={12} md={4} lg={4}>
                   <div className="hello-user-hand d-none d-md-block">
                   <Image src={HelloUser} alt="evd" />
                   </div>
                  </Col> */}
                    </Row>
                  </>
                ) : (
                  ""
                )}
                {/* {profileActive == 1 ?  <><PaymentMethods/></>:"" } */}
                {profileActive == 2 ? <OrderHistory /> : ""}
                {profileActive == 3 ? <OrderReturn /> : ""}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: "/auth/Login" },
    };
  }
  return {
    props: { session },
  };
}

export default UserProfile;
