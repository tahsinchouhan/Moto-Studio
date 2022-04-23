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
import FeaturedProductCard from "./FeaturedProductCard";

function FeaturedProducts({ category }) {
  const list = category?.length > 0 ? category[0]._id : null || null;
  const [categoryId, setCategoryId] = useState(list);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const getCategoryId = (id) => setCategoryId(id);

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  // console.log(featuredProducts);

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

  const getFeaturedProducts = async () => {
    try {
      const res = await fetch(`${apipath}/api/v1/product/featured/list`);
      const data = await res.json();
      setFeaturedProducts(data.data);
    } catch (error) {
      console.log(error.message);
    }
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
            {category?.length &&
              category?.map((cat) => {
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
                        unoptimized={true}
                        loading="eager"
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

      <div className="featured-products-card-wrapper">
        {featuredProducts?.length > 0 &&
          featuredProducts?.map((product) => (
            <FeaturedProductCard
              key={product._id}
              img={product.products_id.images[0].img}
              title={product.products_id.title}
              price={product.products_id.price}
              weight={product.products_id.weight[0].weight_type.weight_gram}
            />
          ))}
      </div>

      <VisitTheShop categoryId={categoryId} />
    </>
  );
}

export default FeaturedProducts;
