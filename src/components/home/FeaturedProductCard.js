import Image from "next/image";
import React from "react";

const featuredProductCard = ({ img, title, weight, price }) => {
  //   console.log(img, title, weight, price);

  return (
    <div className="mb-3 featured-card">
      <div className="img">
        <Image
          src={img || "https://via.placeholder.com/150"}
          alt={title}
          layout="fill"
          className={"image"}
        />
      </div>
      <div className="text">
        <h5>{title}</h5>
        <div className="content">
          <p>{weight}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default featuredProductCard;
