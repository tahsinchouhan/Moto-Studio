import React from 'react'
import Image from "next/image";
import SHGONE from "../../assets/images/about/SHGONE.png"
import SHGTWO from "../../assets/images/about/SHGTWO.png"
import SHGTHREE from "../../assets/images/about/SHGTHREE.png"

function EmpoweredGroup() {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src={SHGONE} className="d-block W-25 " alt="SHGONE"/>
                </div>
                <div className="carousel-item">
                    <Image src={SHGTWO} className="d-block w-25" alt="SHGTWO"/>
                </div>
                <div className="carousel-item">
                   <Image src={SHGTHREE} className="d-block w-25" alt="SHGTHREE"/>
                </div>
              </div>
          <button classNameName="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
          </button>
</div>
        </>
    )
}

export default EmpoweredGroup
