import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import ShopAll from "../pages/subHeader/shopAll";
import GourmetFoods from "../pages/subHeader/GourmetFoods";
import BeautyProducts from "../pages/subHeader/BeautyProducts";
import AlternativeMedicine from "../pages/subHeader/AlternativeMedicine";
import HealthPersonalCare from "../pages/subHeader/HealthPersonalCare";

function SubHeader() {
  const [showShopAll, setShowShopAll] = useState(0);
  const [gourmet, setGourmet] = useState();

  const shopHandler = (index) => {
    console.log("index", index);
    setShowShopAll(index);
    setGourmet(index);
  };

  const clickShopHandler = () => {
    setShowShopAll(true);
  };
  return (
    <>
      <div>
        <Navbar className="sub-haeder" collapseOnSelect expand="lg" bg="">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" me-auto mb-2 mb-lg-0 ">
                <div
                  // onClick={() => clickShopHandler(1)}
                  onMouseOver={() => shopHandler(1)}
                  onMouseLeave={() => shopHandler()}
                >
                  <Link href="/">
                    <a className="sub-nav-link mx-3">Shop All</a>
                  </Link>
                </div>
                <div
                  // onClick={() => shopHandler(2)}
                  onMouseOver={() => shopHandler(2)}
                  onMouseLeave={() => shopHandler()}
                >
                  <Link href="#pricing">
                    <a className="sub-nav-link mx-3">Gourmet Foods</a>
                  </Link>
                </div>

                <div
                  // onClick={() => shopHandler(3)}
                  onMouseOver={() => shopHandler(3)}
                  onMouseLeave={() => shopHandler()}
                >
                  <Link href="/">
                    <a className="sub-nav-link mx-3">Beauty Products</a>
                  </Link>
                </div>

                <div
                  // onClick={() => shopHandler(4)}
                  onMouseOver={() => shopHandler(4)}
                  onMouseLeave={() => shopHandler()}
                >
                  <Link href="#pricing">
                    <a className="sub-nav-link mx-3">Alternative Medicine</a>
                  </Link>
                </div>

                <div
                  // onClick={() => shopHandler(5)}
                  onMouseOver={() => shopHandler(5)}
                  onMouseLeave={() => shopHandler()}
                >
                  <Link href="/">
                    <a className="sub-nav-link mx-3">Health & Personal Care</a>
                  </Link>
                </div>
              </Nav>
              <Nav>
                <Link eventKey={3} href="#memes">
                  <a className="sub-nav-link mx-2"> Gift Boxes</a>
                </Link>
                <Link eventKey={3} href="#memes">
                  <a className="sub-nav-new">NEW!</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {showShopAll == 1 ? (
        <div className="shop-page">
          <ShopAll />
        </div>
      ) : (
        ""
      )}
      {showShopAll == 2 ? (
        <div className="shop-page">
          <GourmetFoods />
        </div>
      ) : (
        ""
      )}
       {showShopAll == 3 ? (
        <div className="shop-page">
          <BeautyProducts/>
        </div>
      ) : (
        ""
      )}
       {showShopAll == 4 ? (
        <div className="shop-page">
          <AlternativeMedicine/>
        </div>
      ) : (
        ""
      )}
       {showShopAll == 5 ? (
        <div className="shop-page">
          <HealthPersonalCare/>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SubHeader;
