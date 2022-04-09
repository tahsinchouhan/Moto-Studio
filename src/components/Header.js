import React, { useState, useContext, useEffect, useRef } from "react";
import { Container, Navbar, Nav, NavDropdown, Offcanvas} from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import Image from "next/image";
import logo from "/public/images/CGHerbalsLogo.png";
import menubar from "../../public/images/MenuBurger.png";
import { CardContext } from '../components/Layout';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

function Header() {
  const { user, totalItem } = useContext(CardContext);
  // console.log('user :>> ', user);
  const { data: session } = useSession();
  const [activeIcon, setActiveIcon] = useState(false);
  const [viewDropDown, setViewDropDown] = useState(false);
  const [expand, setExpand] = useState(false);
  const usermenuRef = useRef();
  const router = useRouter();

  const handleClose = () => setExpand(false);
  const handleShow = () => setExpand("expanded");

  const iconHandler = () => {
    setActiveIcon(true);
  };

  useEffect(() => {
    const closedDropdown = e => { 
      console.log('usermenuRef :>> ', viewDropDown);
      if(viewDropDown && !usermenuRef.current.contains(e.target)){
        setViewDropDown(false)
      }
      // if(e.path[0] !== usermenuRef.current){
      //   setViewDropDown(false)
      // }
    }
    document.body.addEventListener('mousedown', closedDropdown)
  
    return () => document.body.removeEventListener('mousedown', closedDropdown)
  })
  

  const originalHandler = () => {
    setExpand(false);
    handleClose();
    // router.push('/common/Originals')
  };

  const Logout = () => {
    if(session) signOut();
    localStorage.removeItem("cg-herbal-userData");
    router.reload("/auth/Login");
  };

  const menus = [
    {id:1,title:'HOME',href:'/'},
    {id:2,title:'PRODUCTS',href:'/product'},
    {id:3,title:'ABOUT',href:'/about'},
    {id:4,title:'CORPORATE',href:'/collaborate'},
    {id:5,title:'BLOGS',href:'/blogs'},
    {id:6,title:'NEWS',href:'/news'},
    {id:7,title:'CONTACT',href:'/contact'}
  ]
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" mx-auto mb-2 mb-lg-0 ">
                {menus.map(menu => (
                  <Link href={menu.href} key={menu.id}>
                    <a className="nav-link mx-3">{menu.title}</a>
                  </Link>
                ))}
                {/* eslint-disable-next-line  */}
              </Nav>
              <Nav>
                <div className="pt-1 d-flex align-items-center">
                {user ? (
                  <>
                  <div className="user-profile position-relative" ref={usermenuRef} >
                    <button className="btn border-0" onClick={() => setViewDropDown(!viewDropDown)}>
                      {/* <MdAccountCircle style={{fontSize:24}} className="cursor-pointer" /> */}
                      {user?.userData?.full_Name?.split(' ')[0] || 'Profile'}
                    </button>
                    { viewDropDown && <ul className="dropdown-menu show position-absolute shadow rounded">
                        <li onClick={()=>setViewDropDown(false)}>
                          <Link href="/auth/UserProfile?activeTab=0">
                            <a className="dropdown-item text-black">Your Profile</a>
                          </Link>
                        </li>
                        <li onClick={()=>setViewDropDown(false)}>
                          <Link href="/auth/UserProfile?activeTab=2">
                            <a className="dropdown-item text-black">Your Order</a>
                          </Link>
                        </li>
                        <li onClick={Logout}>
                          <Link href="/#">
                            <a className="dropdown-item text-black">Sign Out</a>
                          </Link>
                        </li>
                      </ul>
                    }
                  </div>
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
                        {totalItem || ''}
                      </a>
                    </Link>
                  </div>
                </>
              ) : (
            <div>
              <Link href="/auth/Login">
                <a className="nav-Login text-black">Sign In</a>
              </Link>
              <Link href="/auth/Register">
                <a className="nav-Login btn btn-primary btn-sm ms-2">Sign Up</a>
              </Link>
            </div>
          )}
                {/* <select defaultValue={''} 
                    className="product-select"
                    aria-label="Default select example"
                  >
                    <option value="">INR</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select> */}
                </div>
                {/* &nbsp; &nbsp;
                <div className="pt-1 d-flex">
                  <Link href="/">
                    <a className="cg-header-a-tag">
                      <BsSearch className />
                    </a>
                  </Link>
                   */}
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
                {menus.map(menu => (
                    <Link href={menu.href} key={menu.id}>
                      <a className="nav-link mx-3">{menu.title}</a>
                    </Link>
                  ))}
                  {/* eslint-disable-next-line  */}
              </Nav>
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