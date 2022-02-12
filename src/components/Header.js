import React, { useState, useContext } from "react";
import { Container, Navbar, Nav, NavDropdown,Offcanvas} from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import Image from "next/image";
import logo from "/public/images/CGHerbalsLogo.png";
import menubar from "../../public/images/MenuBurger.png";
import { CardContext } from '../components/Layout';

function Header() {
  const { user, totalItem } = useContext(CardContext);

  const [activeIcon, setActiveIcon] = useState(false);

  const [expand, setExpand] = useState(false);


  const handleClose = () => setExpand(false);
  const handleShow = () => setExpand("expanded");

  const iconHandler = () => {
    setActiveIcon(true);
    console.log("setActiveIcon");
  };

  const originalHandler = () => {
    console.log("originalll");
    setExpand(false);
    handleClose();
    // router.push('/common/Originals')
  };
  return (
    <>
     {/* Destop-view */}
      <div>
        <Navbar className="main-haeder d-none d-md-block" collapseOnSelect bg="light" expanded={expand}>
          <Container>
            <Navbar.Brand href="/">
              <div>
                <Image src={logo} width={107} height={63} alt="logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" mx-auto mb-2 mb-lg-0 ">
                    {/* eslint-disable-next-line  */}
                <Link href="/">
                  <a className="nav-link mx-3">HOME</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/Product/Products">
                  <a className="nav-link mx-3">PRODUCTS</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/about/About">
                  <a className="nav-link mx-3">ABOUT</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/collaborate/Collaborate">
                  <a className="nav-link mx-3">CORPORATE</a>
                </Link>
                  {/* eslint-disable-next-line  */}
                  {/* <Link href="/blog/Blogs">
                  <a className="nav-link mx-3">BLOGS</a>
                </Link>  {/* eslint-disable-next-line  *
                <Link href="/storie/Stoies">
                  <a className="nav-link mx-3">STORIES</a>
                </Link> */}
                    {/* eslint-disable-next-line  */}
                <Link href="/news/IntoNewsroom">
                  <a className="nav-link mx-3">NEWS</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link eventKey={3} href="/contact/Contact">
                  <a className="nav-link mx-3"> CONTACT</a>
                </Link>
              </Nav>
              <Nav>
                <div className="pt-1">
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
                    <Link href="/shopping/Shopping">
                      <a className="cg-header-a-tag">
                        <BsFillCartFill
                          className={`${
                            activeIcon
                              ? "ch-header-cart-icon"
                              : "cg-header-a-tag"
                          }`}
                        />{" "}
                        {totalItem}
                      </a>
                    </Link>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

{/* Mobile-view */}
<div className="mobile-view-home d-md-none">
          {/* <button onClick={()=>handleShow()}>show</button> */}
          <Navbar bg="light" expanded={expand}>
            <Navbar.Brand href="/" className="Logo_brand">
              <Image className="Logo_icon" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              // expanded={expand}
            >
              <Offcanvas.Header closeButton>
                {/* {!searchFlag ? (
                  <div className="search-home-img">
                  </div>
                ) : (
                  <SearchComponent />
                )} */}
              </Offcanvas.Header>
              <Offcanvas.Body onClick={handleClose}>
              <Nav className=" mx-auto mb-2 mb-lg-0 ">
                    {/* eslint-disable-next-line  */}
                <Link href="/">
                  <a className="nav-link mx-3">HOME</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/Product/Products">
                  <a className="nav-link mx-3">PRODUCTS</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/about/About">
                  <a className="nav-link mx-3">ABOUT</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/collaborate/Collaborate">
                  <a className="nav-link mx-3">CORPORATE</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link href="/news/IntoNewsroom">
                  <a className="nav-link mx-3">NEWS</a>
                </Link>
                    {/* eslint-disable-next-line  */}
                <Link eventKey={3} href="/contact/Contact">
                  <a className="nav-link mx-3"> CONTACT</a>
                </Link>
              </Nav>
              {/* <Nav>
                <div>
                <select
                    className="product-select"
                    aria-label="Default select example"
                  >
                    <option selected>NRI</option>
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
                    <Link href="/shopping/Shopping
">
                      <a className="cg-header-a-tag">
                      <BsFillCartFill
                          className={`${
                            activeIcon ? "ch-header-cart-icon" : "cg-header-a-tag"
                          }`}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </Nav> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* </Container> */}
            <div>
              <button
                className="home-menubar-icon"
                onClick={() => handleShow()}
              >
                <Image src={menubar} alt="menubar" width={30} height={15} />
              </button>
            </div>
          </Navbar>
        </div>

      </div>
    </>
  );
}

export default Header;
