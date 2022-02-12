import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import BrahmiChurna from "../../../public/images/bramkumari.png";
import Image from "next/image";

function Common({ menuData }) {
  return (
    <Container fluid>
      <Container>
        <Row className="all-shop-list-change py-3 my-3">
          {menuData?.length &&
            menuData.map((menu) => {
              return (
                <Col sm={12} md={4} lg={4} className="alternative-div" key={menu._id}>
                  <div className="d-flex gap-3">
                    <div className="image-block">
                      <Image src={menu?.images?.length ? menu.images[0]?.img || BrahmiChurna : BrahmiChurna } alt={menu?.title || ''} width={100} height={100} />
                    </div>
                    <div className="sub-menu-block">
                      <h6 className="Grocery-foods">{menu?.category_name || ''}</h6>
                      <div className="d-flex flex-column gap-2 flex-wrap text-start" style={{height:'100px'}}>
                        {
                          menu?.products_data?.length && menu?.products_data?.map(product => {
                            return <span key={product._id} className="Wildforest">{product?.title || ''}</span>
                          })
                        }
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
}

export default Common;
