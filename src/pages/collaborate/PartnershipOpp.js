import Image from "next/image";
import React from "react";
import { Button, Card } from "react-bootstrap";
import scanner from "../../assets/images/collaborate/scanner.png";
import etendering from "../../assets/images/business/e-tendering.png";
import empanelment from "../../assets/images/business/empanelment.png";
import exportproduct from "../../assets/images/business/export.png";
import wholesale from "../../assets/images/business/wholesale.png";


const PartnershipOpp = () => {
  return (
    <div className="container-fluid partnership-opp">
      <div className="container-fluid partnership-opp-wrapper">
        <div className="text">
          <h2>Partnership Opportunities</h2>
          <hr />
        </div>
        {/* <div className="btns">
          <button className="active">e-trending</button>
          <button>wholesale at fixed prices</button>
          <button>empanelment of bulk buyes</button>
          <button>distributorship</button>
        </div> */}

        <div className="d-flex justify-content-center mt-5 service-card-display-configuration">
        <Card className="border-0 service-card-marginright" style={{ width: '238px', marginRight:"60px" }}>
          <Image className="service-card-image-width" src={etendering} height={233}></Image>
          <Card.Body>
          <Card.Title className="service-card-title">E-TENDERING</Card.Title>
            <Card.Text className="service-card-text">
            CGMFP Federation floats tenders at regular intervals for sale of raw and processed
             Minor Forest Produce. The tendering process is completely transparent and very convenient.
            </Card.Text>
            <Button className="service-cart-button-div">
            ACCESS E-TENDER PORTAL
            </Button>
          </Card.Body>
        </Card>
        <Card className="border-0 service-card-marginright" style={{ width: '238px', marginRight:"60px" }}>
          <Image className="service-card-image-width" src={wholesale} height={233}></Image>
          <Card.Body>
          <Card.Title className="service-card-title">WHOLESALE FIXED PRICES</Card.Title>
            <Card.Text className="service-card-text">
            Organically certified Raw and Processed Minor Forest Produce are also
            available for sale at the fixed prices. Any firm/ agency, without 
            participating in bidding process can purchase Raw/Processed Minor 
            Forest Produce. 
            </Card.Text>
            <Button className="service-cart-button-div">
            ENQUIRE FOR WHOLESALE
            </Button>
          </Card.Body>
        </Card>
        <Card className="border-0 service-card-marginright" style={{ width: '238px', marginRight:"60px" }}>
          <Image className="service-card-image-width" src={empanelment} height={233}></Image>
          <Card.Body>
            <Card.Title className="service-card-title">EMPANELMENT OF BULK BUYERS</Card.Title>
            <Card.Text className="service-card-text">
              Manufactures/ Exporters and traders etc. who wish to ensure a regular supply
              of minor forest produce based finished goods can do so by getting empanelled
              with the CGMFP. The empanelled buyers are given preference to ensure 
              unhindered availability.
            </Card.Text>
            <Button className="service-cart-button-div">GET EMPANELED</Button>
          </Card.Body>
        </Card>
        <Card className="border-0" style={{ width: '238px'}}>
          <Image className="service-card-image-width" src={exportproduct} height={233}></Image>
          <Card.Body>
            <Card.Title className="service-card-title">EXPORT CHANNEL PARTNER</Card.Title>
            <Card.Text className="service-card-text">
            For export of MFP based Herbal Ayurvedic, Food and Personal Care products 
              under ‘Chhattisgarh Herbals Brand’ across different countries outside India.
            </Card.Text>
            {/* <div className="service-cart-button-div">
            <p>BECOME A DISTRIBUTOR</p>
            </div> */}
            <Button className="service-cart-button-div">BECOME A DISTRIBUTOR</Button>
          </Card.Body>
        </Card>
        </div>
        
        {/* <div className="qr-code-container">
          <div className="qr-code">
            <Image
              src={scanner}
              alt="tender"
              className="w-100"
              width="279px"
              height="279px"
            />
          </div>
          <h5>Scan to view tenders</h5>
          <p>
            CGMFP Federation floats tenders at regular intervals for sale of raw
            and processed Minor Forest Produce. The tendering process is
            completely transparent and very convenient. One can visit the
            website of the CGMFP federation and access the tenders from the
            following link:
          </p>
          <p className="link">
            https://www.cgmfpfed.org/new/tendernotice.php?type=2
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PartnershipOpp;
