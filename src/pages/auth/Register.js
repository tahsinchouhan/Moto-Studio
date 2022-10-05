import { ErrorMessage, Field, Form, Formik } from "formik";
import { getProviders } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import TextError from "../../components/TextError";
import { apipath } from "../api/apiPath";

import "react-toastify/dist/ReactToastify.css";

// import Link from "next/link";

function Register() {
  const [providers, setProviders] = useState(null);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  console.log("providers", providers);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  const notify = () => toast("Please verify your email before login");
  const initialValues = {
    name: "",
    mobile: "",
    password: "",
    // confirm_password: "",
    email: "",
    // dob: "",
    // gender: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    mobile: Yup.string().required("This field is required").min(10).max(10),
    password: Yup.string()
      .required("This field is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .max(25, "Password is too long - should be 25 chars maximum."),
    // confirm_password: Yup.string().required("This field is required")
    //  .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    email: Yup.string().email("Invalid email address").required("Required"),
    // dob: Yup.string().required("This field is required"),
    // gender: Yup.string().required("This field is required"),
    // address: Yup.string().required("This field is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    // console.log('values',values)
    try {
      const response = await fetch(apipath + `/api/v1/users/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_Name: values.name,
          mobile: values.mobile,
          password: values.password,
          email: values.email,
          // dob: values.dob,
          // gender: values.gender,
          // address: values.address,
        }),
      });
      const result = await response.json();

      notify();
      setTimeout(() => {
        if (result.data) router.push("/auth/Login");
      }, 3000);

      setMessage(result.message);
    } catch (error) {
      setMessage(error);
    }
    onSubmitProps.setSubmitting(false);
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
      <div className="all-product-heading">
        <div
          style={{
            paddingTop: "26px",
            paddingBottom: "30px",
            fontFamily: "Lora",
          }}
        >
          <div className="store-home">
            <span>Home &gt; </span>
          </div>
          <div className="products-header text-center">
            <h1>Signup Here</h1>
          </div>
        </div>
      </div>
      <Container className="py-5" style={{ fontFamily: "Lora" }}>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  {message && (
                    <div className="text-center text-danger fw-bold fs-5 pb-2">
                      {message}
                    </div>
                  )}
                  <ToastContainer />

                  <Row className="justify-content-center">
                    <Col md={4}>
                      <div className="form-div pt-1">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group user-field mb-4">
                              {/* <label htmlFor="name">Name</label> */}
                              <Field
                                className="form-control form-control-lg px-2"
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                autoComplete="off"
                                style={formControl}
                              />
                              <ErrorMessage name="name" component={TextError} />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group user-field mb-4">
                              {/* <label htmlFor="email">Email Address</label> */}
                              <Field
                                className="form-control form-control-lg px-2"
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                autoComplete="off"
                                style={formControl}
                              />
                              <ErrorMessage
                                name="email"
                                component={TextError}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group user-field  mb-4">
                              {/* <label htmlFor="number" className="mt-3">
                                  Mobile
                                </label> */}
                              <Field
                                className="form-control form-control-lg px-2"
                                type="number"
                                name="mobile"
                                placeholder="Mobile number"
                                style={formControl}
                              />
                              <ErrorMessage
                                name="mobile"
                                component={TextError}
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group user-field  mb-4">
                              {/* <label htmlFor="password" className="mt-3">
                                  Password
                                </label> */}
                              <Field
                                className="form-control form-control-lg px-2"
                                type="password"
                                name="password"
                                placeholder="Create password"
                                style={formControl}
                              />
                              <ErrorMessage
                                name="password"
                                component={TextError}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <div className="text-center">
                              <button
                                type="submit"
                                className="btn btn-success w-100 py-2 rounded-0"
                              >
                                SIGNUP
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="justify-content-center">
                    <Col md={4}>
                      <div
                        className="divider position-relative mt-5"
                        style={{ height: 20 }}
                      >
                        <hr />
                        <span
                          className="position-absolute"
                          style={{
                            width: 50,
                            height: 20,
                            lineHeight: "20px",
                            textAlign: "center",
                            top: "-50%",
                            left: "50%",
                            transform: "translate(-50%, 0%)",
                            background: "#ffffff",
                          }}
                        >
                          OR
                        </span>
                      </div>
                      <div className="col-md-12 d-flex align-items-center mt-4">
                        <span className="fw-bold">
                          Already Register? &nbsp;
                          <Link href="/auth/Login">
                            <a className="text-success">LOGIN NOW</a>
                          </Link>
                        </span>
                      </div>
                      {/* {providers && (
                        <div className="social-login-btn d-flex justify-content-center">
                          {Object?.values(providers).map((provider) => {
                            if (provider.id === "credentials") return false;
                            return (
                              <div
                                key={provider.id}
                                className="shadow w-100 py-3"
                              >
                                <button
                                  type="button"
                                  className="border-0 w-100 fw-bold bg-transparent rounded-0"
                                  style={{
                                    fontFamily: "Lora",
                                    fontSize: 16,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center0",
                                    gap: "2rem",
                                    outline: "none",
                                  }}
                                  onClick={() =>
                                    signIn(provider.id, {
                                      callbackUrl: "/auth/UserProfile",
                                    })
                                  }
                                >
                                  <Image
                                    src="/google.png"
                                    width={30}
                                    height={30}
                                  />
                                  Signup with {provider.name}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )} */}
                    </Col>
                  </Row>
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
