import { useState, useEffect } from 'react'
import Image from "next/image";
// import BeautyProducts from "../../assets/images/home/1 (1).png";
// import AlternativeMedicine from "../../assets/images/home/1 (2).png";
// import HealthPersonalCare from "../../assets/images/home/1 (3).png";
// import GourmetFoods from "../../assets/images/home/1 (4).png";
import VisitTheShop from '../home/VisitTheShop'
import { apipath } from '../api/apiPath';

function FeaturedProducts() {

  
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategory = () => {
      fetch(`${apipath}/api/v1/category/list`)
      .then(response => response.json())
      .then(objData => {
        if(objData?.data?.length){
          setCategoryId(objData?.data[0]?._id)
          setCategory(objData?.data)
        }
      }).catch(error => console.log(error))
    }
    fetchCategory();
  }, [])

  const getCategoryId = (id) => {
    setCategoryId(id)
  }

  return (
    <>
      <h1 className="text-center mb-2 mt-5 feature-products-text">
        Featured Products
      </h1>
      <div className="text-center">
        <hr className="text-center mb-5  Featured-products-hr m-auto" />
      </div>

      <div className="overflow-style">
        <div className="image-div1">
        {
          category?.length && category?.map(cat => {
            return <div className="image-div" key={cat._id} onClick={()=>getCategoryId(cat?._id)}>
            <div className="rounded-circle">
              <Image
                src={cat?.images[0]?.img || GourmetFoods}
                alt="GourmetFoods"
                className="rounded-circle hover1"
                width={160} height={160}
              />
              <p className=" feature-products-texts p-1 ">{cat?.category_name || 'Category Name'}</p>
            </div>
          </div>
          })
        }

          {/* <div className="image-div">
            <div className=" rounded-circle  ">
              <Image
                src={GourmetFoods}
                alt="GourmetFoods"
                className="rounded-circle  hover1 "
              />
              <p className=" feature-products-texts p-1 ">Gourmet Foods</p>
            </div>
          </div> */}

        </div>
      </div>
      <VisitTheShop categoryId={categoryId} />
    </>
  );
}

export default FeaturedProducts;
