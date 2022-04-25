import { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Image from "next/image";
import aboutWhoFirst from "../../assets/images/about/aboutWhoFirst.jpg";
import aboutWhoSecond from "../../assets/images/about/aboutWhoSecond.jpg";
import { apipath } from "../../pages/api/apiPath";

function WhoWeAre() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/about/list`);
        const objData = await res.json();
        setAboutData(objData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  // console.log(aboutData);

  return (
    <>
      <Container fluid>
        {aboutData.length &&
          aboutData.map((row, index) => {
            if (index % 2 === 0) {
              return (
                <Row className="justify-content-center my-5" key={row._id}>
                  <Col xxl={4} lg={5} md={6} sm={8} xs={10} className="">
                    <Image
                      src={row?.images[0]?.img || aboutWhoFirst}
                      className="w-100"
                      alt=""
                      width={550}
                      height={400}
                      unoptimized={true}
                      loading="eager"
                    />
                  </Col>

                  <Col
                    xxl={4}
                    lg={5}
                    md={6}
                    sm={8}
                    xs={10}
                    className="text-md-start  text-start"
                  >
                    <p className="about-second-heading mt-lg-4 mt-md-2">
                      {row.title}
                    </p>
                    <hr className="about-who-first-hr " />
                    <p className="about-second-para">{row.description}</p>
                  </Col>
                </Row>
              );
            } else {
              return (
                <Row
                  className="my-5 justify-content-center mobile-layout"
                  key={row._id}
                >
                  <Col
                    xxl={4}
                    lg={5}
                    md={6}
                    sm={8}
                    xs={10}
                    className="text-md-end"
                  >
                    <p className="about-second-heading mt-lg-4 mt-md-2">
                      {row.title || "Title"}
                    </p>
                    <hr className="about-who-first-hr ms-md-auto " />
                    <p className="about-second-para">
                      {row.description || "Description"}
                    </p>
                  </Col>

                  <Col
                    xxl={4}
                    lg={5}
                    md={6}
                    sm={8}
                    xs={10}
                    className="order-md-last order-sm-first"
                  >
                    <Image
                      src={row?.images[0]?.img || aboutWhoSecond}
                      className="w-100"
                      alt=""
                      width={550}
                      height={400}
                      unoptimized={true}
                      loading="eager"
                    />
                  </Col>
                </Row>
              );
            }
          })}
      </Container>
    </>
  );
}

export default WhoWeAre;
