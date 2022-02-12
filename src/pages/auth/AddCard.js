import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Router, useRouter } from "next/router";
import { BsFillCreditCardFill } from "react-icons/bs";

import Image from "next/image";

function AddCard() {
  const router = useRouter();

  const initialValues = {
    cardType: "",
    cardnumber: "",
    expires: "",
    cvv: "",
    cvv: "",
    holdername: "",
  };

  const validationSchema = Yup.object({
    cardType: Yup.string().required("This field is required"),
    cardnumber: Yup.string().required("This field is required"),
    expires: Yup.string().required("This field is required"),
    cvv: Yup.string().required("This field is required"),
    holdername: Yup.string().required("This field is required"),
  });

  const onSubmit = async (value) => {
      console.log("addcarddd");
  };

  return (
    <div>
      <div className="py-5">
        <div className="atm-card-detail">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <div className="form-group user-field">
                    <label htmlFor="text" className="mt-3 fw-bold">
                      Card Type
                    </label>
                    <Field
                      className="input-field px-2"
                      as="select"
                      name="cardType"
                      placeholder="Select your card type"
                      autoComplete="off"
                      id="exampleFormControlSelect1"
                      // value={query.platform}
                      // onChange={handleChange()}
                    >
                      <option value="debit">Debit Card</option>
                      <option value="credit">Credit Card</option>
                    </Field>
                  </div>
                  <div className="form-group user-field">
                    <label htmlFor="text" className="mt-3 fw-bold">
                      Card Holder Name
                    </label>
                    <Field
                      className="input-field px-2"
                      type="text"
                      name="holdername"
                      placeholder="Enter your card holder name"
                    />
                  </div>

                  <div className="form-group user-field">
                    <label htmlFor="number" className="mt-3 fw-bold">
                      Card Number
                    </label>
                    <Field
                      className="input-field px-2"
                      type="number"
                      name="cardnumber"
                      placeholder="16-Digit card number"
                    />
                  </div>
                  <div>
                    <Row>
                      <Col sm={6} md={6}>
                        <div className="form-group user-field">
                          <label htmlFor="date" className="mt-3 fw-bold">
                            Expires on
                          </label>
                          <Field
                            className="input-field px-2"
                            type="date"
                            name="expires"
                            placeholder="MM/YY"
                          />
                        </div>
                      </Col>
                      <Col sm={6} md={6}>
                        <div className="form-group user-field">
                          <label htmlFor="three" className="mt-3 fw-bold">
                            CVV
                          </label>
                          <div className="d-flex">
                            <Field
                              className="input-field px-2"
                              type="number"
                              name="cvv"
                              placeholder="3 Digit CVV"
                            />
                            <BsFillCreditCardFill className="credit-card-icon" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn Complete-save"
                      // disabled={formik.isSubmitting || !formik.isValid}
                    >
                      <span className="Complete-login">save</span>
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
