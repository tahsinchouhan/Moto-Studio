import Image from "next/image";
import React from "react";
import scanner from "../../assets/images/collaborate/scanner.png";

const PartnershipOpp = () => {
  return (
    <div className="container-fluid partnership-opp">
      <div className="container-fluid partnership-opp-wrapper">
        <div className="text">
          <h2>Partnership Opportunities</h2>
          <hr />
        </div>
        <div className="btns">
          <button className="active">e-trending</button>
          <button>wholesale at fixed prices</button>
          <button>empanelment of bulk buyes</button>
          <button>distributorship</button>
        </div>
        <div className="qr-code-container">
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
        </div>
      </div>
    </div>
  );
};

export default PartnershipOpp;
