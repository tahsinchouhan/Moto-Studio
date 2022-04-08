import React, { useState } from "react";
import Link from "next/link";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from 'next/router'
import { apipath } from "../../api/apiPath";

function ReEnterPassword() {

  const [reset, setReset] = useState(false);
  const router = useRouter();
  const { userId } = router.query

  const validationSchema = Yup.object({
    new_password: Yup.string().required("This field is required")
    .min(6, 'Password is too short - should be 6 chars minimum.'),
    confirm_password: Yup.string().required("This field is required")
     .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
  });

  const initialValues = {
    new_password: "",
    confirm_password: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    try {
      const res = await fetch(apipath + `/api/v1/users/password/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: values.new_password }),
      });
      const result = await res.json()
      if(result.code === 202) {
        setReset(true)
      }
    } catch (error) {
      console.log(error);
    }
    onSubmitProps.setSubmitting(false);
  };

  const TextError = (props) => {
    return <div className="text-danger">{props.children}</div>;
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="login_main pb-5">
          {!reset ?
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => (
              <div>
                <div className="row ">
                  <div className="col-lg-12 login_header">
                    <h1 className="m-2 text-center">Reset - Password</h1>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-12 col-md-5">
                    <div className="Forgot_div p-5 rounded">
                      <Form>
                        <div className="form-group user-field">
                          <label className="pb-1" htmlFor="email">
                            Generate New Password
                          </label>
                          <Field
                            className="form-control form-control-lg rounded-0"
                            type="password"
                            name="new_password"
                            autoComplete="off"
                          />
                          <ErrorMessage name="new_password" component={TextError} />
                        </div>
                        <br />
                        <div className="form-group user-field">
                          <label className="pb-1" htmlFor="email">
                            Confirm password
                          </label>
                          <Field
                            className="form-control form-control-lg rounded-0"
                            type="password"
                            name="confirm_password"
                            autoComplete="off"
                          />
                          <ErrorMessage name="confirm_password" component={TextError} />
                        </div>

                        <div className="text-center mt-5">
                          <button 
                            type="submit" 
                            className="btn btn-lg btn-success" 
                            disabled={formik.isSubmitting || !formik.isValid} >
                            Reset Password
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Formik>
          : <div className="card m-auto m-5 p-5">
            <div className="card-body text-center p-5 mb-5">
                <h2 className={'text-success fw-bold mt-4'}>Password Changed</h2>
                <div className="mt-5">
                  <button className="btn btn-lg btn-primary border me-4" onClick={()=>router.push('/auth/Login')}>LOGIN </button>
                </div>
            </div>
        </div>}
        </div>
      </div>
    </div>
  );
}

export default ReEnterPassword;