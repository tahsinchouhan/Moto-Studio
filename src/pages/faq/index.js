import React,{useEffect,useState} from "react";
import { Accordion } from "react-bootstrap";
import { apipath } from "../api/apiPath";

const faq = () => {
  const [faq, setFAQ] = useState([]);
  useEffect(() => {
    const fetchFAQ = () => {
      fetch(`${apipath}/api/v1/faq/faqs`)
        .then((response) => response.json())
        .then((objData) => {
          if (objData?.FAQs?.length) {
            const filteredData = objData?.FAQs;
            console.log(filteredData);
            setFAQ(filteredData);
          }
        })
        .catch((error) => console.log(error));
    };
    fetchFAQ();
  }, []);

  return (
    <div className="m-5">
      <Accordion>
        {
          faq.map((item, index) => {
          return (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })
        }
      </Accordion>
    </div>
  );
};

export default faq;
