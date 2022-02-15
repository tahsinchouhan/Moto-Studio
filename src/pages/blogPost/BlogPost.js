import React from "react";
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs"
import BlogPostImgOne from "../../assets/images/blogPost/blogPostImgOne.png";
import BlogPostImgTwo from "../../assets/images/blogPost/blogPostImgTwo.png";
import { Row, Col } from "react-bootstrap";

function BlogPost() {
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
          <Image src={BlogPostImgOne} alt="cg-herbal" />

          <p className="blog-post-blogTitle mt-4">
            How honey is sourced across the world
          </p>

          <p className="blog-post-blogDate">February 02, 2022</p>

          <p className="blog-post-blogPara">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto magni voluptas eius eaque voluptatem nobis quisquam maiores necessitatibus eligendi sapiente? Mollitia dolore illum consequatur iusto? Asperiores rem, ducimus accusamus ullam voluptatibus similique tempora, numquam nesciunt deserunt quibusdam debitis. Aperiam quaerat quidem aliquam id veritatis blanditiis tempore a temporibus assumenda pariatur!
          </p>
          <p className="blog-post-blogPara">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, alias aut quidem perspiciatis provident dolore ratione, enim minima placeat doloremque vero eveniet dicta error laborum dolor atque nobis? Eos dolorum officiis architecto ipsa, culpa a deserunt tempore? Similique quasi hic, veritatis ut, deleniti officia pariatur laboriosam cum fugiat cupiditate sapiente!
          </p>
          <p className="blog-post-blogPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut distinctio aspernatur a quia iure minus reiciendis itaque? Dolorem, alias? Voluptates atque quas error quaerat, mollitia voluptas eligendi ratione molestiae reprehenderit nostrum nesciunt fugiat animi aut maxime distinctio saepe, laboriosam, necessitatibus possimus exercitationem hic minima rem? Autem deserunt reprehenderit atque corrupti.</p>
          <p className="blog-post-blogPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio doloribus harum non voluptatem magni sunt rerum beatae odit eius nulla dolores, dolorem dolor earum error cum laboriosam repellendus debitis, minus tempore quod nostrum aut at. Labore eos, distinctio sint et dolore fuga ducimus, voluptas dicta vero hic fugiat voluptatum.</p>
          <p className="blog-post-blogPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem, eaque sunt accusamus ipsam voluptas debitis suscipit odio doloribus. Exercitationem.</p>

          <div className="blog-post-img-two mt-5">
            <Image src={BlogPostImgTwo} alt="ebd" />
          </div>

         <div className="my-4">
         <p className="blog-post-blogPara">
            Invent the universe laws of physics Tunguska event made in the
            interiors of collapsing stars rogue courage of our questions. Cosmic
            ocean trillion hearts of the stars a very small stage in a vast
            cosmic arena realm of the galaxies trillion? Concept of the number
            one the only home weve ever known tendrils of gossamer clouds
            emerged into consciousness with pretty stories for which theres
            little good evidence stirred by starlight.
          </p>
          <p className="blog-post-blogPara">
          With pretty stories for
            which theres little good evidence the carbon in our apple pies
            decipherment hearts of the stars rich in mystery invent the
            universe. Emerged into consciousness descended from astronomers the
            only home we've ever known muse about muse about not a sunrise but a
            galaxyrise? Dream of the minds eye the only home we've ever known
            hydrogen atoms network of wormholes two ghostly white figures in
            coveralls and helmets are softly dancing are creatures of the
            cosmos.
          </p>
         </div>


        </div>
      </div>
    </>
  );
}

export default BlogPost;
