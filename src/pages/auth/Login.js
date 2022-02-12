import { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonDark from "../../components/button/ButtonDark";

function Login() {
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
      <div className="container-fluid">
        <div className="login_main">
          <div>
            <div className="row ">
              <div className="col-lg-12 login_header">
                <h1 className="text-center m-5">Login</h1>
              </div>
            </div>
            <div className="login_div">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group user-field">
                        <label htmlFor="email">username / mobile no.</label>
                        <Field
                          className="form-control px-2"
                          type="email"
                          name="email"
                          placeholder="Enter Username"
                          autoComplete="off"
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

                      <div className="text-center pt-5">
                        <ButtonDark text="Login" className="btn btn-submit"/>
                        {/* <button type="submit" className="btn btn-submit">
                          <span className="Complete-login">Login</span>
                        </button> */}
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>

          <div className="forgot-div text-center">
            <br />
            <br />
            <Link href="/auth/ForgotPassword">
              <a className="login-forgot">forgot Password ?</a>
            </Link>
            <br />
            <br />

            <span>
              Don’t have a login ID? &nbsp;
              <Link href="/auth/Register">
                <a>Register Here</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
