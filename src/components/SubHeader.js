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
      <div onMouseLeave={() => shopHandler()}>
        <Navbar className="sub-haeder" collapseOnSelect expand="lg" bg="">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" me-auto mb-2 mb-lg-0 ">
                <ul className="nav-list">
                  <li onMouseOver={() => shopHandler(1)}>
                    <Link href="/">
                      <a className="sub-nav-link mx-3">Shop All</a>
                    </Link>
                  </li>
                  <li onMouseOver={() => shopHandler(2)}>
                    <Link href="#pricing">
                      <a className="sub-nav-link mx-3">Gourmet Foods</a>
                    </Link>
                  </li>
                  <li onMouseOver={() => shopHandler(3)}>
                    <Link href="/">
                      <a className="sub-nav-link mx-3">Beauty Products</a>
                    </Link>
                  </li>
                  <li onMouseOver={() => shopHandler(4)}>
                    <Link href="#pricing">
                      <a className="sub-nav-link mx-3">Alternative Medicine</a>
                    </Link>
                  </li>
                  <li onMouseOver={() => shopHandler(5)}>
                    <Link href="/">
                      <a className="sub-nav-link mx-3">
                        Health & Personal Care
                      </a>
                    </Link>
                  </li>
                </ul>
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
        {showShopAll == 1 ? (
          <div className="shop-page" onMouseLeave={() => shopHandler()}>
            <ShopAll />
          </div>
        ) : (
          ""
        )}
        {showShopAll == 2 ? (
          <div className="shop-page" onMouseLeave={() => shopHandler()}>
            <GourmetFoods />
          </div>
        ) : (
          ""
        )}
        {showShopAll == 3 ? (
          <div className="shop-page">
            <BeautyProducts />
          </div>
        ) : (
          ""
        )}
        {showShopAll == 4 ? (
          <div className="shop-page">
            <AlternativeMedicine />
          </div>
        ) : (
          ""
        )}
        {showShopAll == 5 ? (
          <div className="shop-page">
            <HealthPersonalCare />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SubHeader;
