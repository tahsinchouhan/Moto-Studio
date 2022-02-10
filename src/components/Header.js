import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import Image from "next/image";
import logo from "/public/images/CGHerbalsLogo.png";

function Header() {
  const [activeIcon, setActiveIcon] = useState(false);

  const iconHandler = () => {
    setActiveIcon(true);
    console.log("setActiveIcon");
  };
  return (
    <>
      <div>
        <Navbar className="main-haeder" collapseOnSelect expand="lg" bg="light">
          <Container>
            <Navbar.Brand href="#home">
              <div>
                <Image src={logo} width={107} height={63} alt="logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" mx-auto mb-2 mb-lg-0 ">
                <Link href="/">
                  <a className="nav-link mx-3">HOME</a>
                </Link>
                <Link href="/Product/Products">
                  <a className="nav-link mx-3">PRODUCTS</a>
                </Link>
                <Link href="/about/About">
                  <a className="nav-link mx-3">ABOUT</a>
                </Link>
                <Link href="/collaborate/Collaborate">
                  <a className="nav-link mx-3">CORPORATE</a>
                </Link>
                <Link href="/news/IntoNewsroom">
                  <a className="nav-link mx-3">NEWS</a>
                </Link>
                <Link eventKey={3} href="/contact/Contact">
                  <a className="nav-link mx-3"> CONTACT</a>
                </Link>
              </Nav>
              <Nav>
                <div>
                  <select
                    className="product-select"
                    aria-label="Default select example"
                  >
                    <option selected>INR</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                &nbsp; &nbsp;
                <div className="pt-1 d-flex">
                  <Link href="/">
                    <a className="cg-header-a-tag">
                      <BsSearch className />
                    </a>
                  </Link>
                  &nbsp; &nbsp;
                  <div onClick={iconHandler}>
                    <Link
                      href="/shopping/Shopping
"
                    >
                      <a className="cg-header-a-tag">
                        <BsFillCartFill
                          className={`${
                            activeIcon
                              ? "ch-header-cart-icon"
                              : "cg-header-a-tag"
                          }`}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
