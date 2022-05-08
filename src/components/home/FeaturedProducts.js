import { useEffect, useState } from "react";
import Image from "next/image";
// import BeautyProducts from "../../assets/images/home/1 (1).png";
// import AlternativeMedicine from "../../assets/images/home/1 (2).png";
// import HealthPersonalCare from "../../assets/images/home/1 (3).png";
// import GourmetFoods from "../../assets/images/home/1 (4).png";
import emptyImage from "../../assets/images/product/placeholder.png";
import VisitTheShop from "./VisitTheShop";
import Slider from "react-slick/lib/slider";
import { apipath } from "../../pages/api/apiPath";

function FeaturedProducts({ category }) {
  const list = category?.length > 0 ? category[0]._id : null || null;
  const [categoryId, setCategoryId] = useState(list);
  const getCategoryId = (id) => setCategoryId(id);

  let categories = category?.filter((cat, index) => index < 3);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-center mb-2 mt-5 feature-products-text">
        Featured Products
      </h1>
      <div className="text-center">
        <hr className="text-center mb-5 Featured-products-hr m-auto" />
      </div>

      <div className="overflow-style">
        <div className="image-div1">
          <Slider {...settings}>
            {categories?.length &&
              categories?.map((cat) => {
                return (
                  <div
                    className="image-div"
                    key={cat._id}
                    onClick={() => getCategoryId(cat?._id)}
                  >
                    <div className="rounded-circle">
                      <Image
                        src={cat?.images[0]?.img || emptyImage}
                        alt="GourmetFoods"
                        className="rounded-circle hover1"
                        width={160}
                        height={160}
                        loading="lazy"
                        // unoptimized={true}
                        // loading="eager"
                      />
                      <p className=" feature-products-texts p-1 ">
                        {cat?.category_name || "Category Name"}
                      </p>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>

      <VisitTheShop categoryId={categoryId} />
    </>
  );
}

export default FeaturedProducts;
