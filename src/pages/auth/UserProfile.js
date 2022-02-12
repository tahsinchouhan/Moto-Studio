import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import OrderHistory from "./OrderHistory";
import PaymentMethods from "./PaymentMethods";

function UserProfile() {
  const [showProfile, setShowProfile] = useState(0);
  const [profileActive, setProfileActive] = useState(0);

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
    email: "",
    password: "",
  };
  const onSubmit = () => {
    console.log("onSubmit");
  };
  return (
    <>
      <div>
        <Container>
          <div>
            <div className="row">
              <div className="col-lg-12">
                <h1 className="register-header mt-4 text-center p-3">
                  Hello Sandeep
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
                            <div className="form-div pt-1">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="card bg-light">
                                    <div className="card-body">
                                      <div className="card-heading">
                                        <h4 className=" mb-2">User Details</h4>
                                      </div>
                                      <div className="form-group user-field">
                                        <label htmlFor="name">Name</label>
                                        <Field
                                          className="form-control px-2"
                                          type="text"
                                          name="name"
                                          placeholder="Entername"
                                          autoComplete="off"
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
                                          type="number"
                                          name="number"
                                          placeholder="Enter password"
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
                                    <div className="card-body">
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
                                          placeholder="Enter password"
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
                                              <input
                                                className="gender-field"
                                                type="radio"
                                                name="gender"
                                                value="male"
                                              />
                                              <label className="gender-span mx-1">
                                                Male
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col col-sm-4 col-md-4 px-0">
                                            <div className="form-check">
                                              <input
                                                className="gender-field"
                                                type="radio"
                                                name="gender"
                                                value="female"
                                              />
                                              <label className="gender-span mx-1">
                                                Female
                                              </label>
                                            </div>
                                          </div>
                                          <div className="col col-sm-4 col-md-4 px-0">
                                            <div className="form-check">
                                              <input
                                                className="gender-field"
                                                type="radio"
                                                name="gender"
                                                value="other"
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
                                    <div className="card-body">
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
                                          name="Address"
                                          placeholder="Entername"
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
                                              type="address"
                                              name="address"
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
                                              name="number"
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
                                            <select
                                              className="form-select"
                                              aria-label="Default select example"
                                            >
                                              <option selected>
                                              Select State
                                              </option>
                                              <option value="1">Korba</option>
                                              <option value="2">Raipur</option>
                                              <option value="3">Nagpur</option>
                                            </select>
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
                                              name="text"
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
                    adbl
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
