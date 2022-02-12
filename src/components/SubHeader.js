import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import ShopAll from "../pages/subHeader/shopAll";
import GourmetFoods from "../pages/subHeader/GourmetFoods";
import BeautyProducts from "../pages/subHeader/BeautyProducts";
import AlternativeMedicine from "../pages/subHeader/AlternativeMedicine";
import HealthPersonalCare from "../pages/subHeader/HealthPersonalCare";
import {apipath} from '../pages/api/apiPath';
// import Common from "../pages/subHeader/common";

function SubHeader() {
  const [showShopAll, setShowShopAll] = useState(0);
  const [gourmet, setGourmet] = useState();
  const [menuData, setMenuData] = useState([])
  const [subMenu, setSubMenu] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/product`);
        const objData = await res.json();
        setMenuData(objData.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])
    // console.log(menuData);

  const shopHandler = (index, menu_data) => {
    setSubMenu(menu_data)
    setShowShopAll(index);
    setGourmet(index);
  };

  const clickShopHandler = () => {
    setShowShopAll(true);
  };
  console.log(showShopAll);

  return (
    <>
      <div onMouseLeave={() => shopHandler()}>
        <Navbar className="sub-haeder sub-header-padding-fix d-none d-lg-block" collapseOnSelect expand="lg" bg=""  variant="dark">
          <Container className="sub-header-container">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" me-auto mb-2 mb-lg-0 ">
                <ul className="nav-list">
                  <li onMouseOver={() => shopHandler(1, menuData[0])}>
                    <Link href="/">                                
                      <a className="sub-nav-link mx-3">Shop All</a>
                    </Link>
                  </li>
                  {
                    menuData.length && menuData[1].length && menuData[1].map((menu, index)=>{
                      return <li key={menu._id} onMouseOver={() => shopHandler(2 + index, menu.menu_data)}>
                        <Link href={`/Product/Products?activeTab=${index}`}>
                          <a className="sub-nav-link mx-3">{menu?.menu_name || menu}</a>
                        </Link>
                      </li>
                    })
                  }
                  {/* <li onMouseOver={() => shopHandler(2)}>
                    <Link href="/">
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
                  </li> */}
                </ul>
              </Nav>
              <Nav className="sub-header-gift-box">
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

        {showShopAll === 1 && showShopAll !== 0 && showShopAll ? (
          <div className="shop-page" onMouseLeave={() => shopHandler(0, null)}>
            <ShopAll {...subMenu} />
          </div>
        ) : ("") }
        
        { showShopAll !== 0 && showShopAll !== 1 && showShopAll ? (
          <div  className="shop-page" onMouseLeave={() => shopHandler(0, null)}><Common menuData={subMenu} /></div>
        ) : ("") }
        
        {/* {showShopAll == 2 ? (
          <div className="shop-page" onMouseLeave={() => shopHandler()}>
            <GourmetFoods />
          </div>
        ) : ("")}

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
        )} */}
      </div>
    </>
  );
}

export default SubHeader;
