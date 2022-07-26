import React from "react";
import { useRouter } from "next/router";
import { apipath } from "../api/apiPath";
import Image from "next/image";
import NewsPostImage from '../../assets/images/newsRoom/news-img-one.png'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const NewsRoomDetails = ({ newsData, newsList }) => {
  console.log('news Data is: ',newsData);
  console.log('news List is: ',newsList);
  const router = useRouter();

  const loadNewNews = (direction,currId) => {
    newsList.forEach((news, idx) => {
      if (news._id === currId) {
        if (direction === "next") {
          if (idx !== newsList.length - 1) {
            router.push(`/news/${newsList[idx + 1]._id}`);
          } else {
            router.push(`/news/${newsList[0]._id}`);
          }
        } else {
          if (idx !== 0) {
            router.push(`/news/${newsList[idx - 1]._id}`);
          } else {
            router.push(`/news/${newsList[newsList.length - 1]._id}`);
          }
        }
      }
    });
  };

  return (
    <>
      <div id="blog-post-page">
        <div className="my-3">
          <p className="blog-post-heading-para">The CG Herbals News</p>
          <hr className="blog-post-heading-hr" />
        </div>
        <div className="blog-post-content mt-5 ">
          <Image
            src={newsData?.images[0].img || NewsPostImage}
            alt="cg-herbal"
            width={900}
            height={400}
          />
          <p className="blog-post-blogTitle mt-4">{newsData.title}</p>
          <p className="text-center fs-4">{newsData.description}</p>

          <p className="blog-post-blogDate">
            {new Date(newsData.date).toDateString(undefined, {
              timeZone: "Asia/Kolkata",
            })}
          </p>
          {/* Source link  */}
          <p className="source">
            Source:{" "}
            <a
              href={"www.honeyoftheworld.com/howisitmade"}
              style={{ color: "blue !important" }}
              className="ps-2 text-success"
            >
              www.honeyoftheworld.com/howisitmade
            </a>
          </p>

          <p className="blog-post-blogPara">{newsData.content}</p>

          <div className="blog-nav">
            <div
              className="blog-prev"
              onClick={() => loadNewNews("prev", newsData._id)}
            >
              <div className="arrow-container">
                <IoMdArrowDropleft className="blog-arrow-icon" />
                <div className="arrow"></div>
              </div>
              <div className="ms-2">Previous</div>
            </div>

            <div
              className="blog-next"
              onClick={() => loadNewNews("next", newsData._id)}
            >
              <div className="arrow-container">
                <div className="me-2">Next</div>
                <div className="arrow"></div>
                <IoMdArrowDropright className="blog-arrow-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsRoomDetails;


export async function getServerSideProps(context) {
  console.log('context is: ',context);
  const { newsid }  = context.query;
  console.log('news id is: ',newsid);
  const response = await fetch(`${apipath}/api/v1/newsroom/${newsid}`);
  const result = await response.json();
  const newsListUrl = await fetch(`${apipath}/api/v1/newsroom/list`);
  const newsList = await newsListUrl.json();

  return { props: { newsData: result.data, newsList: newsList.data } };
}