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
import Image from "next/image";

export default function Login() {
  const [message, setMessage] = useState(null);
  const [providers, setProviders] = useState(null);
  const router = useRouter();
  console.log("providers :>> ", providers);
  const {
    authenticating,
    isLogin,
    loginRequest,
    loginSuccess,
    loginFailure,
    fetchCartData,
  } = useContext(CardContext);

  useEffect(() => {
    if (isLogin) {
      router.push("/auth/UserProfile");
    }
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
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
      loginRequest();
      const options = {
        redirect: false,
        email: values.email,
        password: values.password,
      };
      const result = await signIn("credentials", options);
      // console.log('login', result)
      if (!result?.error) {
        const session = await getSession();
        loginSuccess(session);
        fetchCartData(session);
        localStorage.setItem("cg-herbal-userData", JSON.stringify(session));
        router.replace(`/`);
      } else {
        loginFailure(result.error);
        setMessage(result.error);
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
            <h1>Login</h1>
          </div>
        </div>
      </div>

      <div className="login-into-ur-acc pt-5">
        <h1>Login into your account</h1>
        <hr style={{ width: "3rem", margin: "2rem auto 1rem" }} />
      </div>

      <div className="container-fluid">
        <div className="login_main">
          <div>
            <div className="login_div">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form>
                      {/* <h3 style={{fontFamily:'Lora', textDecoration: 'underline', marginBottom:'1.5rem'}}>Login Here</h3> */}
                      {message && (
                        <div className="text-center text-danger fw-bold fs-5 pb-2">
                          {message}
                        </div>
                      )}
                      <div className="form-group user-field mb-4">
                        {/* <label htmlFor="email">Username / Mobile no.</label> */}
                        <Field
                          className="form-control form-control-lg px-2"
                          type="text"
                          name="email"
                          placeholder="Enter email / mobile"
                          autoComplete="off"
                          style={formControl}
                        />
                        <ErrorMessage name="email" component={TextError} />
                      </div>
                      <div className="form-group user-field mb-4">
                        {/* <label htmlFor="password" className="mt-3">Password</label> */}
                        <Field
                          className="form-control form-control-lg px-2"
                          type="password"
                          name="password"
                          placeholder="Enter password"
                          style={formControl}
                        />
                        <ErrorMessage name="password" component={TextError} />
                      </div>

                      <div className="text-center d-flex align-items-center justify-content-center">
                        <button
                          type="submit"
                          className="btn visit-the-shop-button w-30 py-2 rounded-0"
                          disabled={authenticating}
                        >
                          {authenticating ? "Authenticating..." : "LOGIN"}
                        </button>
                        {/*<p style={{ margin: "0 1rem 0" }}>
                          or{" "}
                          <span style={{ textDecoration: "underline" }}>
                            login via OTP
                          </span>
                      </p>*/}
                        {/* <ButtonDark
                         type="submit" 
                          text={authenticating ? 'Authenticating...' : 'Login'}
                          className="btn btn-submit"
                          disabled={authenticating}
                        /> */}
                      </div>

                      <div className="text-center mt-3">
                        <Link href="/auth/ForgotPassword">
                          <a className="login-forgot">
                            Forgot Password? Click here
                          </a>
                        </Link>
                      </div>

                      <div
                        className="divider position-relative mt-5"
                        style={{ height: 50 }}
                      >
                        <hr style={{ color: "#000" }} />
                        <span
                          className="position-absolute"
                          style={{
                            width: 50,
                            height: 50,
                            lineHeight: "50px",
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

                      {providers && (
                        <div className="social-login-btn d-flex justify-content-center">
                          {Object?.values(providers).map((provider) => {
                            if (provider.id === "credentials") return false;
                            return (
                              <div
                                key={provider.id}
                                className="shadow w-100 py-3"
                                style={{
                                  backgroundColor: "#E88069",
                                }}
                              >
                                <button
                                  type="button"
                                  className="border-0 w-100 fw-bold bg-transparent rounded-0"
                                  style={{
                                    fontFamily: "Lora",
                                    fontSize: 18,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center0",
                                    gap: "2rem",
                                    outline: "none",
                                    color: "#fff",
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
                                    alt="cgherbals"
                                  />
                                  Login with {provider.name}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div className="forgot-div text-center fw-bold mt-5">
                        <span>
                          Don’t have an Account? &nbsp;
                          <Link href="/auth/Register">
                            <a
                              className="fw-bold text-black"
                              style={{ textDecoration: "underline !important" }}
                            >
                              SIGN UP here
                            </a>
                          </Link>
                        </span>
                      </div>

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
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const session = await getSession(context);
//   const providers = await getProviders(context);
//   if (session) {
//     return {
//       redirect : {destination: "/"}
//     }
//   }
//   return {
//     props: { providers }
//   };
// }
