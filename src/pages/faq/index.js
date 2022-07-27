import React from "react";
import { Accordion } from "react-bootstrap";
import { apipath } from "../api/apiPath";

const faq = ({faqList}) => {
  return (
    <>
      <div className="my-5">
        <p className="about-empowered-heading">FAQ</p>
        <hr className="about-empowered-top-hr mx-auto mt-3"></hr>
      </div>
      <div className="reducefaqwidth">
        <Accordion>
          {
            faqList.map((item, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            );
          })
          }
        </Accordion>
      </div>
    </>
  );
};

export default faq;

export async function getServerSideProps() {
  const response = await fetch(`${apipath}/api/v1/faq/faqs`);
  const result = await response.json();
  return { props: {faqList: result.FAQs} };
}