import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from '../../components/TextError';
import * as Yup from "yup";
import { apipath } from '../api/apiPath';
import {useRouter} from "next/router";
// import Link from "next/link";

function Register() {

  const [message, setMessage] = useState(null)
  const router = useRouter();
  
  const initialValues = {
    name: "",
    mobile: "",
    password: "",
    confirm_password: "",
    email: "",
    dob: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    mobile: Yup.string().required("This field is required").min(10).max(10),
    password: Yup.string().required("This field is required")
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .max(25, 'Password is too long - should be 25 chars maximum.'),
    confirm_password: Yup.string().required("This field is required")
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().email("Invalid email address").required("Required"),
    dob: Yup.string().required("This field is required"),
    // gender: Yup.string().required("This field is required"),
    // address: Yup.string().required("This field is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    // console.log('values',values)
    try {
      const response = await fetch(apipath + `/api/v1/users/signup`, {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          full_Name: values.name,
          mobile: values.mobile,
          password: values.password,
          email: values.email,
          dob: values.dob,
          gender: values.gender,
          // address: values.address,
        })
      });
      const result = await response.json();
      if (result.data) router.push('/auth/Login')
      setMessage(result.message);
    } catch (error) {
      setMessage(error);
    }
    onSubmitProps.setSubmitting(false);
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
          {message && <div className="text-center text-danger fw-bold fs-5 pb-5">{message}</div> }
          
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
                                  <ErrorMessage name="name" component={TextError} />
                                </div>
                                <div className="form-group user-field">
                                  <label htmlFor="number" className="mt-3">
                                    Mobile
                                  </label>
                                  <Field
                                    className="form-control px-2"
                                    type="number"
                                    name="mobile"
                                    placeholder="Enter mobile number"
                                  />
                                  <ErrorMessage name="mobile" component={TextError} />
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
                                  <ErrorMessage name="password" component={TextError} />
                                </div>
                                <div className="form-group user-field">
                                  <label
                                    htmlFor="confirm password"
                                    className="mt-3"
                                  >
                                    Confirm Password
                                  </label>
                                  <Field
                                    className="form-control px-2"
                                    type="password"
                                    name="confirm_password"
                                    placeholder="Enter password"
                                  />
                                  <ErrorMessage name="confirm_password" component={TextError} />
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
                                    max={new Date().toISOString().split("T")[0]}
                                    placeholder="dd / mm / yyyy"
                                  />
                                  <ErrorMessage name="dob" component={TextError} />
                                </div>
                                <div className="form-group user-field">
                                  <label htmlFor=" gender" className="mt-3">
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
                    </Col>
                  </Row>
                  <div className=" register-btn text-center mt-3 mb-5">
                    <button type="submit" className="btn btn-submit text-white">
                      <a className="Complete-login">Complete</a>
                      {/* <Link href="/auth/UserProfile">
                        <a className="Complete-login">Complete</a>
                      </Link> */}
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
