import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import footerlogo from "../../../public/images/footerlogo.png";
import { GrFacebook, GrInstagram, GrAmazon } from "react-icons/gr";
import LastFooter from "./LastFooter";
import { apipath } from "../../pages/api/apiPath";
import Link from "next/link";
import { useSession } from "next-auth/react";

function CenterFooter() {
  const [category, setCategory] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apipath}/api/v1/category/list`);
      const result = await response.json();
      // get only active category
      const filterData = result?.data.filter((list) => list.status);
      setCategory(filterData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="center-footer ">
        <Container>
          <div className="cg-center-div">
            <Row>
              <Col sm={12} lg={3} className="text-center">
                <div>
                  <Image
                    src={footerlogo}
                    alt="footerlogo"
                    unoptimized={true}
                    loading="eager"
                  />
                </div>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <Row>
                  <Col sm={4} md={4} lg={4}>
                    <div className="footer-cg-herbal">
                      <h6 className="footer-center-header ">SHOP</h6>
                      <div className="d-flex flex-column">
                        {category.length
                          ? category.map((cat, index) => (
                              <Link
                                href={`/product?activeTab=${index}`}
                                key={cat._id}
                              >
                                <a className="footer-cg-para">
                                  {cat.category_name}
                                </a>
                              </Link>
                            ))
                          : null}
                      </div>
                    </div>
                  </Col>

                  <Col sm={4} md={4} lg={4}>
                    <div className="footer-cg-herbal">
                      <h6 className="footer-center-header">SUPPORT</h6>
                      <div className="d-flex flex-column">
                        {[
                          { title: "Contact", href: "/contact" },
                          { title: "Privacy Policy", href: "/privacy-policy" },
                          {
                            title: "Terms of Service",
                            href: "/terms-of-service",
                          },
                          {
                            title: "Shipping Policy",
                            href: "/shipping-policy",
                          },
                          { title: "Refund Policy", href: "/refund-policy" },
                        ].map((ele, index) => (
                          <Link href={ele.href} key={index}>
                            <a className="footer-cg-para">{ele.title}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col sm={4} md={4} lg={4}>
                    <div className="footer-cg-herbal">
                      <h6 className="footer-center-header">MY ACCOUNT</h6>
                      <div className="d-flex flex-column">
                        {session ? (
                          <>
                            <Link href={`/shopping/Shopping`}>
                              <a className="footer-cg-para">My Cart</a>
                            </Link>
                            <Link href={`/auth/UserProfile?activeTab=2`}>
                              <a className="footer-cg-para">My Order</a>
                            </Link>
                          </>
                        ) : (
                          <Link href={`/auth/Login`}>
                            <a className="footer-cg-para">Login</a>
                          </Link>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={12} lg={3}>
                <div className="footer-cg-herbal ">
                  <h6 className="footer-center-header text-lg-start text-center">
                    DIGITAL PRESENCE
                  </h6>
                  <div className="footer-center-icon  text-lg-start text-center mt-4">
                    <GrFacebook className="cg-footer-icon" /> &nbsp; &nbsp;
                    &nbsp;
                    <GrInstagram className="cg-footer-icon" /> &nbsp; &nbsp;
                    &nbsp;
                    <GrAmazon className="cg-footer-icon" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <LastFooter />
    </>
  );
}

export default CenterFooter;
