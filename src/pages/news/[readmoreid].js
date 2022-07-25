import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apipath } from "../api/apiPath";
import Image from "next/image";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";


const NewsRoomDetails = () => {
  const router = useRouter();
  const { readmoreid } = router.query;
  const [newsDetails, setNewsDetails] = useState();

  useEffect(() => {
    const fetchNewsId = (_id) => {
      const apiPath = `${apipath}/api/v1/newsroom/${_id}`;
      console.log("api path is: ", apiPath);
      fetch(apiPath)
        .then((response) => response.json())
        .then((objData) => {
          setNewsDetails(objData.data);
        })
        .catch((error) => console.log(error));
    };
      fetchNewsId(readmoreid);
    }, []);
    console.log(newsDetails);
  return (
    <>
      {newsDetails && (
        <div id="blog-post-page">
          <div className="my-3">
            <p className="blog-post-heading-para">The CG Herbals News</p>
            <hr className="blog-post-heading-hr" />
          </div>
          <div className="blog-post-content mt-5 ">
            <Image
              src={newsDetails?.images[0].img || BlogPostImgOne}
              alt="cg-herbal"
              width={900}
              height={400}
            />
            <p className="blog-post-blogTitle mt-4">{newsDetails.title}</p>
            <p className="text-center fs-4">{newsDetails.description}</p>

            <p className="blog-post-blogDate">
              {new Date(newsDetails.date).toDateString(undefined, {
                timeZone: "Asia/Kolkata",
              })}
            </p>
            <p className="blog-post-blogPara">{newsDetails.content}</p>
            <div className="blog-nav">
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsRoomDetails;
