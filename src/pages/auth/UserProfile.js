import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Image from "next/image";
import HelloUser from "../../assets/images/auth/Saly-8.png";
import { BsChevronRight } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import OrderHistory from "./OrderHistory";
import PaymentMethods from "./PaymentMethods";
import { CardContext } from '../../components/Layout';
import Router from 'next/router';
import TextError from '../../components/TextError';
import { useSession, signOut } from "next-auth/react";

function UserProfile() {
  const [showProfile, setShowProfile] = useState(0);
  const [profileActive, setProfileActive] = useState(0);
  const { data: session } = useSession();
  const { isLogin, user } = useContext(CardContext);

  useEffect(() => {
    if (!isLogin) {
      Router.push('/auth/Login')
    }
  }, [isLogin])

  const userPofileHandler = () => {
    setShowProfile(0);
    setProfileActive(0);
    console.log("setProfileActive....");
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const initialValues = {
    full_Name: user?.userData?.full_Name || '',
    email: user?.userData?.email || '',
    mobile: user?.userData?.mobile || '',
    dob: user?.userData?.dob || '',
    gender: user?.userData?.gender || '',
    address: user?.userData?.address || '',
    city: user?.userData?.city || '',
    pin_code: user?.userData?.pin_code || '',
    state: user?.userData?.state || '',
    country: user?.userData?.country || '',

  };
  const onSubmit = () => {
    console.log("onSubmit");
  };

  const Logout = () => {
    if(session) signOut();
    localStorage.removeItem("cg-herbal-userData");
    Router.reload("/auth/Login");
  };
  return (
    <>
      <div>
        <Container>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h1 className="register-header mt-4 text-center p-3">
                  Hello {user?.userData?.full_Name}
                </h1>
              </div>
            </div>
            <Row className="pt-4">
              <Col sm={12} md={12} lg={3}>
                <div className="user-Detail">
                  <div className="user-detail-profile">
                    <Row>
                      <Col>
                        <div
                          className={
                            profileActive == 0 ? "active-color" : "User-Profile"
                          }
                          onClick={() => setProfileActive(0)}
                        >
                          <span>User Profile</span>
                          <BsChevronRight />
                        </div>
                      </Col>
                    </Row>
                    <div className="user-Hr">
                      <hr />
                    </div>
                    <Row>
                      <Col>
                        <div
                          className={
                            profileActive == 1 ? "active-color" : "User-Profile"
                          }
                          onClick={() => setProfileActive(1)}
                        >
                          <span className="user-payment-methods">
                            Payment Methods
                          </span>
                          <BsChevronRight />
                        </div>
                      </Col>
                    </Row>
                    <div className="user-Hr">
                      <hr />
                    </div>

                    <Row>
                      <Col>
                        <div
                          className={
                            profileActive == 2 ? "active-color" : "User-Profile"
                          }
                          onClick={() => setProfileActive(2)}
                        >
                          <span>Order History</span>
                          <BsChevronRight />
                        </div>
                      </Col>
                    </Row>
                    <div className="user-Hr">
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
                          <span>Support</span>
                          <BsChevronRight />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12
              } lg={9}>
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
                                  <div className="card bg-light">
                                    <div className="card-body p-4">
                                      <div className="card-heading d-flex justify-content-between">
                                        <h4 className=" mb-2">User Details</h4>
                                        <button type="button" onClick={Logout}>SignOut</button>
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
                                        <ErrorMessage name="full_Name" component={TextError} />
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
                                          type="number"
                                          name="mobile"
                                        />
                                        <ErrorMessage name="mobile" component={TextError} />
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
                                          type="text"
                                          name="email"
                                          placeholder="Entername"
                                          autoComplete="off"
                                        />
                                        <ErrorMessage name="email" component={TextError} />
                                      </div>
                                      <div className="form-group user-field">
                                        <label htmlFor="dob" className="mt-3">
                                          DOB
                                        </label>
                                        <Field
                                          className="form-control px-2"
                                          type="date"
                                          id="dob"
                                          name="dob"
                                          autoComplete="off"
                                        />
                                        <ErrorMessage name="dob" component={TextError} />
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

                            <div className="form-div pt-4 pb-5">
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
                                        <label htmlFor="Address">Address</label>
                                        <Field
                                          className="form-control px-2"
                                          type="text"
                                          name="address"
                                          autoComplete="off"
                                        />
                                      </div>
                                      <div className="form-group user-field">
                                        <Row>
                                          <Col sm={12} md={6}>
                                            <label
                                              htmlFor="address"
                                              className="mt-3"
                                            >
                                              Town/City
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="text"
                                              name="city"
                                              placeholder="Type here"
                                            />
                                          </Col>
                                          <Col sm={12} md={6}>
                                            <label
                                              htmlFor="number"
                                              className="mt-3"
                                            >
                                              Pincode
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="number"
                                              name="pin_code"
                                              placeholder="Enter password"
                                            />
                                          </Col>
                                        </Row>
                                      </div>
                                      <div className="form-group user-field">
                                        <Row>
                                          <Col sm={12} md={6}>
                                            <label
                                              htmlFor="text"
                                              className="mt-3"
                                            >
                                              State
                                            </label>
                                            <Field as="select"
                                              name="state"
                                              className="form-select"
                                              aria-label="Default select example"
                                            >
                                              <option value="">Select State</option>
                                              <option value="1">Korba</option>
                                              <option value="2">Raipur</option>
                                              <option value="3">Nagpur</option>
                                            </Field>
                                          </Col>
                                          <Col sm={12} md={6}>
                                            <label
                                              htmlFor="text"
                                              className="mt-3"
                                            >
                                              Country
                                            </label>
                                            <Field
                                              className="form-control px-2"
                                              type="text"
                                              name="country"
                                              placeholder="INDIA"
                                            />
                                          </Col>
                                        </Row>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                </Col>
                  <Col sm={12} md={4} lg={4}>
                   <div className="hello-user-hand d-none d-md-block">
                   <Image src={HelloUser} alt="evd" />
                   </div>
                  </Col>
                </Row>
                </>
                ) : (
                  ""
                )}
                {profileActive == 1 ?  <><PaymentMethods/></>:"" }
                {profileActive == 2 ? <><OrderHistory/></> : ""}
                {profileActive == 3 ? "o3hrpqi3hfnkwa" : ""}
              </Col>
             
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default UserProfile;
