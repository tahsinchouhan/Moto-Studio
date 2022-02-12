import React,{useState} from 'react'
import { Container } from 'react-bootstrap'
// import ButtonDark from "../../components/button/ButtonDark"
function OrderHistory() {
  const [showViewDetail,setShowViewDetail]=useState(0)

    const orderViewHandler=()=>{
      setShowViewDetail(0)
        console.log("orderViewHandler...");
    }
    return (
        <div>
            <Container>
            <div className="order-profile">
              <h3 className="">Your Order History</h3>
              <hr />
              <div className="row">
                <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div>
                    <span className="cart-detail-title">ORDER NO.</span>
                  </div>
                </div>
                <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div>
                    <span className="cart-detail-title">DATE</span>
                  </div>
                </div>

                  <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
                  <div>
                    <span className="cart-detail-title">ITEMS</span>
                  </div>
                  </div>
                  <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
                  <div>
                    <span className="cart-detail-title">AMOUNT</span>
                  </div>
                  </div>
              </div>
              <hr/>
              <div className="row">
                <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div>
                    <span>190592</span>
                    <p className="dreaming-midnight-x1"> dreaming midnight x1,</p>
                  </div>
                </div>
                <div className="col col-sm-12 col-md-3 col-lg-3 col-xl-3">
                  <div>
                    <span>04 Jun 2021</span>
                    <p className="dreaming-midnight-x1">sunshine in paradise x2</p>

                  </div>
                </div>

                  <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
                  <div>
                    <span>3</span>
                  </div>
                  </div>
                  <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
                  <div>
                    <span>₹10,500.00</span>
                  </div>
                  </div>
                  <div className="col col-sm-12 col-md-2 col-lg-2 col-xl-2">
                  <div onClick={()=>setShowViewDetail()}>
                    <button className="view-details">VIEW DETAILS</button>
                    {/* <ButtonDark text="VIEW DETAILS" className="btn btn-submit"/> */}

                  </div>
                  </div>
              </div>
              <hr/>
              {showViewDetail==0?"":"hello monika"}
            </div>
            </Container>
        </div>
    )
}

export default OrderHistory
