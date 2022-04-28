import Link from "next/link";
import React from "react";
import {  Row, Col } from "react-bootstrap";

function ShopAll({menu_data}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="all-shop-list-change py-3">
            <Row>
              {
                menu_data?.length > 0 ? menu_data.map((sub_menu,index) => {
                  return <Col md={3} lg={3} key={sub_menu?._id}>
                    <div className="grocery-gourmet-foods">
                      <h6 className="Grocery-foods">{sub_menu?.menu_name}</h6>
                      <div className="d-flex flex-column gap-2 flex-wrap text-start" style={{height:'100px'}}>
                        {
                          sub_menu?.menu_data?.length && sub_menu?.menu_data?.map(item => {
                            return <Link key={item._id} href={`/product?activeTab=${index}`}>
                                <a className="Wildforest text-black">{item?.category_name || ''}</a>
                              </Link>
                          })
                        }
                      </div>
                    </div>
                  </Col>
                }) : null
              }
              {/* <Col md={4} lg={4}>
                <div className="grocery-gourmet-foods">
                  <h6 className="Grocery-foods">Grocery & Gourmet Foods</h6>
                  <div>
                    <Row>                  
                      <Col md={6} lg={6}>
                        <div>
                          <span className="Wildforest">Wildforest Honey</span>
                          <br />
                          <span className="Wildforest">Chiroji Seeds</span>
                          <br />
                          <span className="Wildforest">Premium Organic Rice</span>
                          <br />
                          <span className="Wildforest">Premium Organic Pulses</span>
                          <br />
                          <span className="Wildforest">Premium Powders & Mixes</span>
                          <br />
                        </div>
                      </Col>
                      <Col md={6} lg={6}>
                        <div>
                          <span className="Wildforest">Amla Products</span>
                          <br />
                          <span className="Wildforest">Organic Green Tea</span>
                          <br />
                          <span className="Wildforest">Sweets</span>
                          <br />
                          <span className="Wildforest">Cashews</span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={3} lg={3}>
                <div className="grocery-gourmet-foods">
                  <h6 className="Grocery-foods">Beauty  Products</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
              </Col>
              <Col md={3} lg={3}>
                <div className="grocery-gourmet-foods">
                  <h6 className="Grocery-foods">Alternative Medicine</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
              </Col>
              <Col md={2} lg={2}>
                <div>
                  <h6 className="Grocery-foods">Health&Personal Care</h6>
                  <div>
                    <span  className="Wildforest">Wildforest Honey</span>
                    <br />
                    <span  className="Wildforest">Chiroji Seeds</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Rice</span>
                    <br />
                    <span  className="Wildforest">Premium Organic Pulses</span>
                    <br />
                    <span  className="Wildforest">Premium Powders & Mixes</span>
                    <br />
                  </div>
                </div>
              </Col> */}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopAll;
