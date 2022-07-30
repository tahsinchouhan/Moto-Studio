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
            if (index === 2) {
              return "";
            }

            if (index % 2 === 0) {
              return (
                <Row className="justify-content-center text-center" key={row._id}>
                  <Col xxl={4} lg={5} md={6} sm={8} xs={10}>
                    <Image
                      src={row?.images[0]?.img || aboutWhoFirst}
                      className="w-100"
                      alt=""
                      width={432}
                      height={365}
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
                    className="text-md-start text-start"
                  >
                    <p className="about-second-heading">
                    The Essence of <br /> Chhattisgarh Herbals
                    </p>
                    <hr className="about-who-first-hr " />
                    <p className="about-second-para col-lg-11" style={{textAlign:"justify"}}>‘Chhattisgarh Herbals’ brand is owned by Chhattisgarh State Minor Forest Produce (Trading & Development) Co-operative Federation Ltd. (CGMFP Federation), Nava Raipur. CGMFP Fed is a three tier Co-operative organization created with an objective to promote the trade and development of Minor Forest Produce in the interest of forest dwelling gatherers, on co-operative pattern.</p>
                  </Col>
                  {index === 0 && (
                    <div className="extra-about-text">
                      <h2>
                        The CGMFP Federation is one of the largest employment
                        generation efforts of the Govt. of Chhattisgarh with
                        approximately 13.5 Lakh Sangrahaks (MFP Gatherers)
                        earning livelihood from collection of Minor Forest
                        Produce.{" "}
                      </h2>
                      <p>
                        More than 6,000 Women Self Help Groups with 71,000+
                        members, engaged in the process of Collection,
                        Procurement and Processing makes the Federation, one of
                        the largest Women empowerment efforts in the world.
                      </p>
                    </div>
                  )}
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
                    className="text-md-end me-5"
                  >
                    <p className="about-second-heading">
                    We make tribal <br /> lives better
                    </p>
                    <hr className="about-who-first-hr ms-md-auto " />
                    <p className="about-second-para col-lg-10 ms-md-auto"  style={{textAlign:"justify"}}>
                      The Federation procures 65 species of minor forest produce at Minimum Support Prices and processes them into more than 130 value added products and sells them under the brand “Chhattisgarh Herbals” across the State. ‘Chhattisgarh Herbals’ products are being manufactured in production units run by women SHG members across different locations in the State of Chhattisgarh. Many of them situated in remote corners of the state, but close to the tribal population centres.
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
                      width={435}
                      height={381}
                      unoptimized={true}
                      loading="eager"
                    />
                  </Col>
                </Row>
              );
            }
          })}
        <div className="extra-about-text pt-3">
          <h2>
            The CGMFP Federation also sells ‘Organically Certified’ raw and
            processed minor forest produce to manufacturers, traders and
            exporters. The CGMFP Fed procures almost 75% of all the minor forest
            produce collected in the country under Minimum Support Price.
          </h2>
          <p className="">
            ‘Chhattisgarh Herbals’ products’ retail reach has expanded rapidly
            in Chhattisgarh. From 30 exclusive ‘Sanjeevani’ retail stores
            ‘Chhattisgarh Herbals’ now available at more than 1500 retail stores
            and counting. Chhattisgarh Herbals has presence on leading ‘e-
            Commerce’ platforms such as AMAZON and FLIPKART and is gaining
            recognition and accessibility in the countrywide market. The CGMFP
            federation has further taken various initiatives to expand the
            market reach from domestic market to international markets for
            promoting sale of ‘Chhattisgarh Herbals’ products.
          </p>
        </div>
      </Container>
    </>
  );
}

export default WhoWeAre;
