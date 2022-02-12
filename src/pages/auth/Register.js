import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
function Register() {
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
    <div>
      <Container>
        <div>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="register-header m-5 text-center">Register</h1>
            </div>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <Row className="mb-5">
                    <Col sm={12} lg={6}>
                      <div className="form-div pt-1">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card bg-light">
                              <div className="card-body p-4">
                                <div className="card-heading">
                                  <h4 className=" mb-2">Login Details</h4>
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
                                  <label htmlFor="number" className="mt-3">
                                    Mobile
                                  </label>
                                  <Field
                                    className="form-control px-2"
                                    type="number"
                                    name="number"
                                    placeholder="Enter mobile number"
                                  />
                                </div>
                                <div className="form-group user-field">
                                  <label htmlFor="password" className="mt-3">
                                    Password
                                  </label>
                                  <Field
                                    className="form-control px-2"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                  />
                                </div>
                                <div className="form-group user-field">
                                  <label htmlFor="confirm password" className="mt-3">
                                  Confirm Password
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
                    </Col>
                    <Col sm={12} lg={6}>
                      <div className="form-div pt-4 pt-lg-0">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="card bg-light">
                              <div className="card-body p-4">
                                <div className="card-heading">
                                  <h4 className=" mb-2">Basic Information</h4>
                                </div>
                                <div className="form-group user-field">
                                  <label htmlFor="email">Email Address</label>
                                  <Field
                                    className="form-control px-2"
                                    type="text"
                                    name="email"
                                    placeholder="Enter Email Address"
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
                                <div className="form-group user-field">
                                  <label htmlFor=" gender" className="mt-3">
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
                    </Col>
                  </Row>
                  <div className=" register-btn text-center mt-3 mb-5">
                    <button type="submit" className="btn btn-submit text-white">
                      <Link href="/auth/UserProfile">
                        <a className="Complete-login">Complete</a>
                      </Link>
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </Container>
    </div>
  );
}

export default Register;
