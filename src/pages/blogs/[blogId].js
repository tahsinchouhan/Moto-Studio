import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import BlogPostImgOne from "../../assets/images/blogPost/blogPostImgOne.png";
import BlogPostImgTwo from "../../assets/images/blogPost/blogPostImgTwo.png";
import { Row, Col } from "react-bootstrap";
import { apipath } from "../api/apiPath";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function BlogPost({ blogData, blogList }) {
  const router = useRouter();
  console.log("blogData :>> ", blogData);

  const loadNewBlog = (direction, currId) => {
    blogList.forEach((blog, idx) => {
      if (blog._id === currId) {
        if (direction === "next") {
          if (idx !== blogList.length - 1) {
            router.push(`/blogs/${blogList[idx + 1]._id}`);
          } else {
            router.push(`/blogs/${blogList[0]._id}`);
          }
        } else {
          if (idx !== 0) {
            router.push(`/blogs/${blogList[idx - 1]._id}`);
          } else {
            router.push(`/blogs/${blogList[blogList.length - 1]._id}`);
          }
        }
      }
    });
  };

  return (
    <>
      <div id="blog-post-page">
        {/* -----------blogs-header------------ */}
        <div className="my-3">
          <p className="blog-post-heading-para">The CG Herbals Blog</p>
          <hr className="blog-post-heading-hr" />
        </div>

        {/* -----------blog-post-container------------- */}

        <div className="blog-post-content mt-5 ">
          <Image
            src={blogData?.images[0].img || BlogPostImgOne}
            alt="cg-herbal"
            width={900}
            height={400}
          />

          <p className="blog-post-blogTitle mt-4">{blogData.title}</p>

          <p className="blog-post-blogDate">
            {new Date(blogData.date).toDateString(undefined, {
              timeZone: "Asia/Kolkata",
            })}
          </p>

          <p className="blog-post-blogPara">{blogData.content}</p>

          {/* <div className="blog-post-img-two mt-5">
            <Image src={BlogPostImgTwo} alt="ebd" />
          </div> */}

          {/* <div className="my-4">
         <p className="blog-post-blogPara">
            Invent the universe laws of physics Tunguska event made in the
            interiors of collapsing stars rogue courage of our questions. Cosmic
            ocean trillion hearts of the stars a very small stage in a vast
            cosmic arena realm of the galaxies trillion? Concept of the number
            one the only home weve ever known tendrils of gossamer clouds
            emerged into consciousness with pretty stories for which theres
            little good evidence stirred by starlight.
          </p> 
         </div>*/}

          <div className="blog-nav">
            <div
              className="blog-prev"
              onClick={() => loadNewBlog("prev", blogData._id)}
            >
              <div className="arrow-container">
                <IoMdArrowDropleft className="blog-arrow-icon" />
                <div className="arrow"></div>
              </div>
              <div className="ms-2">Previous</div>
            </div>

            <div
              className="blog-next"
              onClick={() => loadNewBlog("next", blogData._id)}
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
}

export default BlogPost;

export async function getServerSideProps(context) {
  const { blogId } = context.query;
  const response = await fetch(`${apipath}/api/v1/about/blog/${blogId}`);
  const result = await response.json();
  const blogListUrl = await fetch(`${apipath}/api/v1/about/blog/list`);
  const blogList = await blogListUrl.json();

  return { props: { blogData: result, blogList: blogList } };
}
