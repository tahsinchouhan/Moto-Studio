import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BsFillLockFill } from "react-icons/bs";
import ButtonDark from "../../components/button/ButtonDark"

function ForgotPassword() {

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const initialValues = {
    email: "",
  };
  const onSubmit = () => {
    console.log("onSubmit");
  };
  

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="login_main">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <div>
                <div className="row ">
                  <div className="col-lg-12 login_header">
                    <h1 className="m-2 text-center">Forgot - Password</h1>
                  </div>
                </div>
                <div className="Forgot_div">
                  <Form>
                    <div className="text-center pt-2">
                        <BsFillLockFill style={{width:"300px",height:"250px"}}
                        />
                      {/* <Image
                        src="/images/Forgot Chatting.png"
                        alt="forgotImage"
                        width={338}
                        height={290}
                      /> */}
                    </div>
                    <div className="d-flex justify-content-center">
                    <div className="forgot-yuor-monile text-center pt-2">
                      <h3> Forgot your Password?</h3>
                      <p className="forgot-para">
                        No problem. It happens to the best of us! Enter your
                        mobile number and we will send you a link to reset your
                        password.
                      </p>
                    </div>
                    </div>
                   <div className="forgot-input">
                   <div className="form-group user-field">
                      <label className="pb-1 pt-2 fw-bold" htmlFor="email">
                        Email Address
                      </label>
                      <Field
                        className="form-control px-3"
                        type="email"
                        name="email"
                        placeholder=""
                        autoComplete="off"
                      />
                    </div>
                   </div>

                    <div className="text-center">
                    <ButtonDark text="Login" className="btn btn-submit"/>
                    </div>
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
