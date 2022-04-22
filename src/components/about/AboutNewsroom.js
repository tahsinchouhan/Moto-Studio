import { useState, useEffect } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Button from "../button/ButtonLight"
import Microenterprises from "../../assets/images/about/microenterprises.png";
import { apipath } from '../../pages/api/apiPath';

function AboutNewsroom() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/newsroom/list`);
        const objData = await res.json();
        setNewsData(objData?.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
// console.log(newsData);

  return (
    <>
      <div className="about-newsroom-container">
        <Row className="d-flex about-newsroom-gutter justify-content-center">
          <Col xs={12} className="mx-auto px-0">
            <p className="about-newsroom-heading">Newsroom</p>
            <hr className="about-newsroom-hr mt-3" />
          </Col>
        </Row>
      </div>

      <Container>
        <Row className=" row-cols-1 row-cols-md-3 g-4 mt-4 mb-5 justify-content-center">
          {
            newsData.length && newsData?.slice(0,3)?.map(news => {
              return <div className="col-lg-4 col-md-6" key={news._id}>
                <div className="card h-100 border-2">
                  <Image
                    src={news.images[0]?.img || Microenterprises}
                    className="w-100 card-img-top"
                    alt="Microinterprises"
                    width={300}
                    height={300}
                    unoptimized={true}
                    loading="eager"
                    objectFit='cover'
                  />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <small className="about-newsroom-date">{new Date(news.date).toDateString()}</small>
                    <p className="card-text about-newsroom-card-para mt-3">{news.content}</p>
                    <Button className="mb-2 mt-3 about-newsroom-button" text="READ MORE" />
                  </div>
                </div>
              </div>
            })
          }
        </Row>
      </Container>
    </>
  );
}

export default AboutNewsroom;
