import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { CardContext } from "../../components/Layout";
import { apipath } from "../api/apiPath";
import ReturnView from "./ReturnView";
// import ButtonDark from "../../components/button/ButtonDark"

function OrderReturn() {
  const [expanded, setExpanded] = useState({ expandedId: null, status: false });
  const [viewDetail, setViewDetail] = useState({});

  const [showViewDetail, setShowViewDetail] = useState(0);
  const [orderList, setOrderList] = useState(null);

  const { user } = useContext(CardContext);
  const user_id = user?._id || "";

  useEffect(() => {
    const getOrderHistory = async () => {
      try {
        const response = await fetch(apipath + `/api/v1/order/user`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user_id }),
        });
        const result = await response.json();
        setOrderList(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrderHistory();
  }, [user_id]);

  const toggleExpander = (id) => {
    fetch(apipath + `/api/v1/order/${id}`)
      .then((res) => res.json())
      .then((jsonData) => {
        setViewDetail(jsonData);
        if (!expanded.status) {
          setExpanded({ expandedId: id, status: true });
        } else {
          setExpanded({ expandedId: id, status: false });
        }
      })
      .catch((error) => console.log(error));
  };

  const orderViewHandler = () => {
    setShowViewDetail(0);
    console.log("orderViewHandler...");
  };

  return (
    <div>
      <Container>
        <div className="order-profile table-responsive">
          <h3 className="pt-4 pt-lg-0 ">Your Order History</h3>
          <hr />
          <div className="row">
            <div className="col col-md-3 col-lg-3 col-xl-3">
              <div>
                <span className="cart-detail-title">ORDER NO.</span>
              </div>
            </div>
            <div className="col col-md-3 col-lg-3 col-xl-3">
              <div>
                <span className="cart-detail-title">DATE</span>
              </div>
            </div>

            <div className="col col-md-2 col-lg-2 col-xl-2">
              <div>
                <span className="cart-detail-title">ITEMS</span>
              </div>
            </div>
            <div className="col col-md-2 col-lg-2 col-xl-2">
              <div>
                <span className="cart-detail-title">AMOUNT</span>
              </div>
            </div>
          </div>
          <hr />
          {orderList?.length > 0 &&
            orderList.map((order) => {
              return [
                <div className="row mb-1 " key={order._id}>
                  <div className="col col-md-3 col-lg-3 col-xl-3">
                    <div>
                      <span>{order?.order_id || ""}</span>
                      {/* <p className="dreaming-midnight-x1"> dreaming midnight x1,</p> */}
                    </div>
                  </div>
                  <div className="col col-md-3 col-lg-3 col-xl-3">
                    <div>
                      <span>{new Date(order.createdAt).toDateString()}</span>
                      {/* <p className="dreaming-midnight-x1">sunshine in paradise x2</p> */}
                    </div>
                  </div>

                  <div className="col col-md-2 col-lg-2 col-xl-2">
                    <div>
                      <span>{order.total_quantity}</span>
                    </div>
                  </div>
                  <div className="col col-md-2 col-lg-2 col-xl-2">
                    <div>
                      <span>₹ {order?.total_amount}</span>
                    </div>
                  </div>
                  <div className="col col-md-12 col-lg-2 col-xl-2">
                    <div onClick={() => toggleExpander(order._id)}>
                      <button className="view-details">VIEW DETAILS</button>
                    </div>
                  </div>
                </div>,
                expanded.status && expanded.expandedId === order._id && (
                  <ReturnView key={`detail`} productData={viewDetail} />
                ),
              ];
            })}

          <hr />
          {/* {showViewDetail == 0 ? (
            ""
          ) : (
            <>
              <Viewpage />
            </>
          )} */}
        </div>
      </Container>
    </div>
  );
}

export default OrderReturn;
