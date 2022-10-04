import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BsFillCartFill, BsSearch, BsX } from "react-icons/bs";
// import logo from "/public/images/CGHerbalsLogo.png";
import logo from "/public/images/logo.png";
// import menubar from "../../public/images/MenuBurger.png";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import { CardContext } from "../components/Layout";
import { apipath } from "../pages/api/apiPath";

function Header() {
  const { totalItem, userLogout } = useContext(CardContext);
  const { data: session } = useSession();
  const [activeIcon, setActiveIcon] = useState(false);
  const [viewDropDown, setViewDropDown] = useState(false);
  const [connectViewDropDown, setConnectViewDropDown] = useState(false);
  const [expand, setExpand] = useState(false);
  const [searchSideBar, setSearchSideBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isShrunk, setShrunk] = useState(false);
  const usermenuRef = useRef();
  const connectmenuRef = useRef();

  const router = useRouter();

  const handleClose = () => setExpand(false);
  const handleShow = () => setExpand("expanded");

  const iconHandler = () => {
    setActiveIcon(true);
  };

  useEffect(() => {
    if (!searchText) {
      setSearchData([]);
      return;
    }
    const fetchSearchData = async () => {
      const res = await fetch(
        apipath + `/api/v1/product/list/search?search=${searchText}`
      );
      const data = await res.json();
      setSearchData(data.listData);
    };
    fetchSearchData();
  }, [searchText]);

  useEffect(() => {
    const closedDropdown = (e) => {
      if (e.target.innerHTML !== "CONNECT") {
        if (
          connectViewDropDown &&
          !connectmenuRef?.current?.contains(e.target)
        ) {
          setConnectViewDropDown(false);
        }
      }
      if (viewDropDown && !usermenuRef?.current?.contains(e.target)) {
        setViewDropDown(false);
      }
    };
    document.body.addEventListener("mousedown", closedDropdown);

    return () => document.body.removeEventListener("mousedown", closedDropdown);
  });

  const menus = [
    { id: 1, title: "HOME", href: "/", icon: "" },
    { id: 2, title: "PRODUCTS", href: "/product" },
    { id: 3, title: "ABOUT", href: "/about" },
    { id: 4, title: "BUSINESS", href: "/collaborate" },
    { id: 5, title: "BLOGS", href: "/blogs" },
    { id: 6, title: "NEWS", href: "/news" },
    // { id: 7, title: "CONNECT", href: "/connect/consumerProgram" },
    // {id:7,title:'CONTACT',href:'/contact'}
    { id: 7, title: "FAQ", href: "/faq" },
    { id: 8, title: "CONTACT", href: "/contact" },
  ];

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 40 ||
            document.documentElement.scrollTop > 40)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    // Previous logic.
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // console.log(isShrunk);

  return (
    <>
      {/* Destop-view */}
      <div className="navbar-container">
        <Navbar
          className={`main-header d-none d-md-block ${
            isShrunk ? "main-header-shrunk" : ""
          }`}
          collapseOnSelect
          bg="light"
          expanded={expand}
        >
          <Container
            style={{
              maxWidth: "1140px",
            }}
          >
            <Navbar.Brand href="/">
              <div>
                <Image
                  src={logo}
                  width={isShrunk ? 100 : 160}
                  height={isShrunk ? 46 : 80}
                  alt="logo"
                  unoptimized={true}
                  loading="eager"
                  layout="fixed"
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" mx-auto mb-2 mb-lg-0 responsive-navbar-nav-marginleft">
                {menus.map((menu) => (
                  <Link href={menu.href} key={menu.id}>
                    <a
                      className={`nav-link reduce-margin-gap-header px-3 ${
                        router.pathname == menu.href ? "active" : ""
                      }`}
                    >
                      {menu.title}
                    </a>
                  </Link>
                ))}
                {/* eslint-disable-next-line  */}

                <div className="position-relative" ref={connectmenuRef}>
                  <button
                    className="bg-transparent border-0 nav-link reduce-margin-gap-header"
                    onClick={() => setConnectViewDropDown(!connectViewDropDown)}
                  >
                    CONNECT
                  </button>
                  {connectViewDropDown && (
                    <ul
                      className="dropdown-menu show position-absolute shadow rounded connect-dropdown-responsive"
                      style={{
                        width: "16.5em",
                      }}
                    >
                      <li onClick={() => setConnectViewDropDown(false)}>
                        <Link href="/connect/consumerProgram">
                          <a className=" nav-link mx-3 connect-dropdown-responsive-list">
                            CONSUMER CONNECT PROGRAM
                          </a>
                        </Link>
                      </li>
                      <li onClick={() => setConnectViewDropDown(false)}>
                        <Link href="/connect/forestLover">
                          <a className=" nav-link mx-3">FOREST LOVERS CLUB</a>
                        </Link>
                      </li>
                      {/* <li onClick={() => setConnectViewDropDown(false)}>
                        <Link href="/connect/successStory">
                          <a className=" nav-link mx-3">SUCCESS STORIES</a>
                        </Link>
                      </li> */}
                    </ul>
                  )}
                </div>
              </Nav>
              <Nav>
                <div className="pt-1 d-flex align-items-center">
                  {session ? (
                    <>
                      <div
                        className="user-profile position-relative"
                        ref={usermenuRef}
                      >
                        <button
                          className="btn border-0"
                          onClick={() => setViewDropDown(!viewDropDown)}
                        >
                          {/* <MdAccountCircle style={{fontSize:24}} className="cursor-pointer" /> */}
                          {session?.user?.name?.split(" ")[0] || "Profile"}
                        </button>
                        {viewDropDown && (
                          <ul
                            className="dropdown-menu show position-absolute shadow rounded"
                            style={{
                              width: "16.5em",
                            }}
                          >
                            <li onClick={() => setViewDropDown(false)}>
                              <Link href="/auth/UserProfile?activeTab=0">
                                <a className="dropdown-item text-black">
                                  Your Profile
                                </a>
                              </Link>
                            </li>
                            <li onClick={() => setViewDropDown(false)}>
                              <Link href="/auth/UserProfile?activeTab=2">
                                <a className="dropdown-item text-black">
                                  Your Order
                                </a>
                              </Link>
                            </li>
                            <li
                              onClick={() => {
                                signOut({ redirect: false }).then((result) => {
                                  userLogout();
                                  localStorage.removeItem("cg-herbal-userData");
                                });
                              }}
                            >
                              <Link href="#0">
                                <a className="dropdown-item text-black">
                                  Sign Out
                                </a>
                              </Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/*<Link href="/auth/Login">
                        <a className="nav-Login text-black login me-3">Login</a>
                       </Link>*/}
                      <Link href="/auth/Login">
                        <a className="nav-Login btn btn-success btn-sm ms-2 py-2 px-3 signup-btn">
                          LOGIN
                        </a>
                      </Link>
                    </>
                  )}
                  <BsSearch
                    size="14px"
                    className="ms-3 cursor-pointer"
                    style={{ marginTop: "5px" }}
                    onClick={() => setSearchSideBar(true)}
                  />
                  <Link href="/shopping/Shopping" onClick={iconHandler}>
                    <a className="cg-header-a-tag ps-3 position-relative">
                      <BsFillCartFill
                        size="16px"
                        className={`${
                          activeIcon ? "ch-header-cart-icon" : "cg-header-a-tag"
                        }`}
                      />{" "}
                      {totalItem ? (
                        <span className="total-cart-item">
                          {totalItem || ""}
                        </span>
                      ) : null}
                    </a>
                  </Link>
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
              <Image
                className="Logo_icon"
                width={70}
                height={40}
                src={logo}
                alt="logo"
                unoptimized={true}
                loading="eager"
                layout="fixed"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              // expanded={expand}
            >
              <Offcanvas.Header>
                {/* {!searchFlag ? (
                  <div className="search-home-img">
                  </div>
                ) : (
                  <SearchComponent />
                )} */}
                <AiOutlineClose
                  style={{ width: 30, fontSize: 28 }}
                  onClick={handleClose}
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="mx-auto mb-2 mb-lg-0 ">
                  {menus.map((menu) => (
                    <Link href={menu.href} key={menu.id}>
                      <a className="nav-link mx-3" onClick={handleClose}>
                        {menu.title}
                      </a>
                    </Link>
                  ))}
                  <div className="position-relative mx-3" ref={connectmenuRef}>
                    <button
                      className="bg-transparent border-0 nav-link"
                      onClick={() =>
                        setConnectViewDropDown(!connectViewDropDown)
                      }
                    >
                      CONNECT
                    </button>
                    {connectViewDropDown && (
                      <ul
                        className="dropdown-menu show position-absolute shadow rounded"
                        style={{
                          width: "16.5em",
                          zIndex: 100,
                        }}
                      >
                        <li onClick={() => setConnectViewDropDown(false)}>
                          <Link href="/connect/consumerProgram">
                            <a className="dropdown-item text-black">
                              CONSUMER CONNECT PROGRAM
                            </a>
                          </Link>
                        </li>
                        <li onClick={() => setConnectViewDropDown(false)}>
                          <Link href="/connect/forestLover">
                            <a className="dropdown-item text-black">
                              FOREST LOVERS CLUB
                            </a>
                          </Link>
                        </li>
                        {/*

                          <li onClick={() => setConnectViewDropDown(false)}>
                          <Link href="/connect/successStory">
                          <a className="dropdown-item text-black">
                          SUCCESS STORIES
                          </a>
                          </Link>
                          </li>
                        */}
                      </ul>
                    )}
                  </div>
                  {/* eslint-disable-next-line  */}
                  {session ? (
                    <>
                      <Link href="/auth/UserProfile">
                        <a className="nav-link mx-3" onClick={handleClose}>
                          YOUR PROFILE
                        </a>
                      </Link>
                      <Link href="/shopping/Shopping">
                        <a className="nav-link mx-3" onClick={handleClose}>
                          MY CART
                        </a>
                      </Link>
                      <Link href="/auth/Login">
                        <a
                          className="nav-link mx-3"
                          onClick={() => {
                            signOut({
                              redirect: false,
                              callbackUrl: "/auth/Login",
                            }).then((result) => {
                              userLogout();
                              handleClose();
                              localStorage.removeItem("cg-herbal-userData");
                            });
                          }}
                        >
                          SIGN OUT
                        </a>
                      </Link>
                    </>
                  ) : (
                    <Link href="/auth/Login">
                      <a className="nav-link mx-3" onClick={handleClose}>
                        LOGIN
                      </a>
                    </Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            {/* </Container> */}
            <div className="d-flex align-items-center">
              <span
                className="mobile-search-icon"
                onClick={() => setSearchSideBar(!searchSideBar)}
              >
                <BsSearch style={{ width: 30, fontSize: "22px" }} />
              </span>

              <Link href="/shopping/Shopping" onClick={iconHandler}>
                <a className="mobile-cart-icon">
                  <BsFillCartFill
                    style={{ width: 30, fontSize: "22px" }}
                    className={`${
                      activeIcon ? "ch-header-cart-icon" : "cg-header-a-tag"
                    }`}
                  />{" "}
                  {totalItem ? (
                    <span
                      className="total-cart-item"
                      style={{
                        color: "black",
                        fontSize: "16px",
                      }}
                    >
                      {totalItem || ""}
                    </span>
                  ) : null}
                </a>
              </Link>

              <button
                className="btn home-menubar-icon"
                onClick={() => handleShow()}
              >
                {/* <Image src={menubar} alt="menubar" width={30} height={15} /> */}
                <AiOutlineMenuFold style={{ width: 30, fontSize: 28 }} />
              </button>
            </div>
          </Navbar>
        </div>

        {/* search sidebar       */}
        {searchSideBar && (
          <div className="right-sidebar">
            <div className="sidebar-content h-100 position-relative p-4 mt-4">
              <input
                type="text"
                className="form-control rounded-0"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <div className="search-icon cursor-pointer">
                <BsSearch />
              </div>
              <div className="cursor-pointer cross-icon">
                <BsX size="2.5rem" onClick={() => setSearchSideBar(false)} />
              </div>

              <div className="item-search-list">
                {searchData.map((d) => {
                  return (
                    <div
                      key={d._id}
                      className="d-flex gap-2 p-3 cursor-pointer search-item"
                      onClick={() => {
                        setSearchSideBar(false);
                        router.push(`/product/${d._id}`);
                      }}
                    >
                      <Image
                        src={d.images[0].img}
                        alt={d.title}
                        width={50}
                        height={50}
                      />
                      <span className="flex-grow-1">{d.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .signup-btn {
          background-color: #065934 !important;
          font-family: "Lora";
          padding: 0.3rem 1rem !important;
          border-radius: 0 !important;
          font-size: 13px;
      }
        }

        .login {
          font-family: "Lora";
          color: #666666 !important;
        }

        .total-cart-item {
          position: absolute;
          width: 25px;
          height: 25px;
          line-height: 20px;
          border: 1px solid;
          border-radius: 50%;
          text-align: center;
          top: -15px;
          left: 30px;
          background: #065934 !important;
          color: white;
        }

        .right-sidebar {
          position: fixed;
          width: 500px;
          height: 90vh;
          top: 100px;
          right: 0;
          background: white;
          border: 1px solid #eee;
          z-index: 10;
        }

        .sidebar-content {
          z-index: 9999;
          background:white;
        }

        .form-control {
          padding-left: 2.2rem;
          width: 90%;
          outline: 0;
          box-shadow: none;
        }

        .form-control:focus {
          outline: 0;
          box-shadow: none;
        }

        .search-icon {
          position: absolute;
          left: 1.5rem;
          top: 21px;
          width: 40px;
          height: 37px;
          line-height: 36px;
          text-align: center;
        }

        .cross-icon {
          position: absolute;
          right: 20px;
          top: 21px;
          width: 40px;
          height: 37px;
          line-height: 36px;
          text-align: center;
        }

        .item-search-list {
          position: absolute;
          width: calc(100% - 3rem);
          top: 60px;
          bottom: 33px;
          overflow: auto;
        }

        .search-item:hover {
          background: #eee;
        }
      `}</style>
    </>
  );
}

export default Header;
