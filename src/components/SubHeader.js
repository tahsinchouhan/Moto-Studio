import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import ShopAll from "../pages/subHeader/Shopall";
import ShopAll from "../components/ShopAll";
// import GourmetFoods from "../pages/subHeader/GourmetFoods";
// import BeautyProducts from "../pages/subHeader/BeautyProducts";
// import AlternativeMedicine from "../pages/subHeader/AlternativeMedicine";
// import HealthPersonalCare from "../pages/subHeader/HealthPersonalCare";
import { apipath } from "../pages/api/apiPath";
import Common from "../pages/subHeader/Common";

function SubHeader() {
  const [showShopAll, setShowShopAll] = useState(0);
  const [gourmet, setGourmet] = useState();
  const [menuData, setMenuData] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const [isShrunk, setShrunk] = useState(false);
  const [shopall, setShopall] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/product`);
        const objData = await res.json();

        let newobj = JSON.stringify(objData.data);
        newobj = JSON.parse(newobj);

        // newobj[0].menu_data = newobj[0].menu_data.filter((ele, ind) => ind < 3);
        newobj[1] = newobj[1].filter((ele, ind) => ind < 4);

        // setMenuData(objData.data)
        setMenuData(newobj);
        setShopall(newobj[1]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
          document.body.scrollTop < 10 &&
          document.documentElement.scrollTop < 10
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

  const shopHandler = (index, menu_data) => {
    setSubMenu(menu_data);
    setShowShopAll(index);
    setGourmet(index);
  };

  const clickShopHandler = () => {
    setShowShopAll(true);
  };

  return (
    <>
      <div
        onMouseLeave={() => shopHandler()}
        style={{
          position: "sticky",
          zIndex: "10",
          top: `${isShrunk ? "78px" : "100px"}`,
        }}
      >
        <Navbar
          className="sub-haeder sub-header-padding-fix d-none d-lg-block"
          collapseOnSelect
          expand="lg"
          bg=""
          variant="dark"
        >
          <Container className="sub-header-container">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto me-auto mb-2 mb-lg-0 ">
                <ul className="nav-list">
                  <li
                    onMouseOver={() => {
                      shopHandler(1, menuData[0]);
                    }}
                  >
                    <Link href="/">
                      <a className="sub-nav-link mx-4">Shop All</a>
                    </Link>
                  </li>

                  {menuData.length &&
                    menuData[1].length &&
                    [...menuData[1]].reverse().map((menu, index) => {
                      return (
                        <li
                          key={menu._id}
                          onMouseOver={() =>
                            shopHandler(2 + index, menu.menu_data)
                          }
                        >
                          {/* <Link href={`/product?activeTab=${index}`}> */}
                          <Link href={`/product/category/${menu?._id}`}>
                            <a
                              className="sub-nav-link mx-3"
                              style={{ width: "fitContent" }}
                            >
                              {menu?.menu_name || menu}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {showShopAll === 1 && showShopAll !== 0 && showShopAll ? (
          <div className="shop-page" onMouseLeave={() => shopHandler(0, null)}>
            <ShopAll {...subMenu} />
          </div>
        ) : (
          ""
        )}

        {showShopAll !== 0 && showShopAll !== 1 && showShopAll ? (
          <div className="shop-page" onMouseLeave={() => shopHandler(0, null)}>
            <Common menuData={subMenu} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SubHeader;
