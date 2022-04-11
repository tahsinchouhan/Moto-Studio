import { useState, useEffect, useContext } from "react";
import Link from "next/link";
// import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { apipath } from "../api/apiPath";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "../../components/TextError";
import * as Yup from "yup";
import ButtonDark from "../../components/button/ButtonDark";
import { CardContext } from "../../components/Layout";
import { signIn, getProviders, getSession } from "next-auth/react";

function Login({ providers }) {
  const [message, setMessage] = useState(null);
  const router = useRouter();
  // console.log("providers :>> ", providers);
  const { authenticating, isLogin, loginRequest, loginSuccess, loginFailure, fetchCartData } = useContext(CardContext);

  useEffect(() => {
    if (isLogin) {
      router.push("/auth/UserProfile");
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const onSubmit = async (values, onSubmitProps) => {
    try {
      loginRequest()
      const options = {redirect: false, email:values.email, password:values.password}
      const result  = await signIn('credentials', options)
      console.log('login', result)
      if(!result?.error){
        const session = await getSession();
        loginSuccess(session)
        fetchCartData(session)
        localStorage.setItem("cg-herbal-userData", JSON.stringify(session));
        router.replace(`/`)
      } else {
        loginFailure(result.error)
        setMessage(result.error)
      }

      // const response = await fetch(apipath + `/api/v1/users/signin`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: values.email,
      //     password: values.password,
      //   }),
      // });
      // const result = await response.json();
      // if (result.user && result.token) {
      //   localStorage.setItem("cg-herbal-userData", JSON.stringify(result));
      //   // router.push('/auth/UserProfile');
      //   router.reload("/auth/UserProfile");
      // }
      // if (result.error) setMessage(result.message);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
    }
    onSubmitProps.setSubmitting(false);
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
            {message && (
              <div className="text-center text-danger fw-bold fs-5 pb-5">
                {message}
              </div>
            )}
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
                        <label htmlFor="email">Username / Mobile no.</label>
                        <Field
                          className="form-control px-2"
                          type="text"
                          name="email"
                          placeholder="Enter Username"
                          autoComplete="off"
                        />
                        <ErrorMessage name="email" component={TextError} />
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

                      <div className="text-center pt-5">
                        <ButtonDark
                          type="submit"
                          text={authenticating ? 'Authenticating...' : 'Login'}
                          className="btn btn-submit"
                          disabled={authenticating}
                        />
                      </div>

                      {providers && <div className="social-login-btn d-flex justify-content-center mt-4">
                        {Object?.values(providers).map((provider) => {
                          if(provider.id === 'credentials') return false
                          return <div key={provider.id} className="w-50 text-center">
                            <button type="button" className="btn btn-outline-primary" onClick={() => signIn(provider.id)}>
                              Sign in with {provider.name}
                            </button>
                          </div>
                        })}
                      </div> }

                      {/* <div
                        className="text-center pt-4"
                        onClick={() => signIn()}
                      >
                        <ButtonDark
                          type="button"
                          text="Login With Social Account"
                          className="btn btn-submit"
                        />
                      </div> */}
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
              <a className="login-forgot">Forgot Password ?</a>
            </Link>
            <br />
            <br />

            <span>
              Don’t have a login ID? &nbsp;
              <Link href="/auth/Register">
                <a className="text-primary">Register Here</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders(context);
  if (session) {
    return {
      redirect : {destination: "/"}
    }
  }
  return {
    props: { providers }
  };
}

export default Login;
