import React from "react";
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs"
import BlogPostImgOne from "../../assets/images/blogPost/blogPostImgOne.png";
import BlogPostImgTwo from "../../assets/images/blogPost/blogPostImgTwo.png";
import { Row, Col } from "react-bootstrap";
import { apipath } from "../api/apiPath";

function BlogPost({ blogData }) {
  // console.log('blogData :>> ', blogData);
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
          <Image src={blogData?.images[0].img || BlogPostImgOne} alt="cg-herbal"  width={900} height={400} />

          <p className="blog-post-blogTitle mt-4">{blogData.title}</p>

          <p className="blog-post-blogDate">{new Date(blogData.date).toDateString(undefined, {timeZone: 'Asia/Kolkata'})}</p>

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


        </div>
      </div>
    </>
  );
}

export default BlogPost;

export async function getServerSideProps(context) {
  const { blogId } = context.query;
  const response = await fetch(`${apipath}/api/v1/about/blog/${blogId}`)
  const result = await response.json();

  return { props: { blogData: result } };
}
