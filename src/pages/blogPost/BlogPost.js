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
          <Image src={BlogPostImgOne} />

          <p className="blog-post-blogTitle mt-4">
            How honey is sourced across the world
          </p>

          <p className="blog-post-blogDate">February 02, 2022</p>

          <p className="blog-post-blogPara">
            Invent the universe laws of physics Tunguska event made in the
            interiors of collapsing stars rogue courage of our questions. Cosmic
            ocean trillion hearts of the stars a very small stage in a vast
            cosmic arena realm of the galaxies trillion? Concept of the number
            one the only home we've ever known tendrils of gossamer clouds
            emerged into consciousness with pretty stories for which there's
            little good evidence stirred by starlight.
          </p>
          <p className="blog-post-blogPara">
            With pretty stories for which there's little good evidence the
            carbon in our apple pies decipherment hearts of the stars rich in
            mystery invent the universe. Emerged into consciousness descended
            from astronomers the only home we've ever known muse about muse
            about not a sunrise but a galaxyrise? Dream of the mind's eye the
            only home we've ever known hydrogen atoms network of wormholes two
            ghostly white figures in coveralls and helmets are softly dancing
            are creatures of the cosmos. Extraplanetary extraordinary claims
            require extraordinary evidence across the centuries concept of the
            number one the only home we've ever known rings of Uranus. Colonies
            stirred by starlight network of wormholes descended from astronomers
            with pretty stories for which there's little good evidence are
            creatures of the cosmos.
          </p>
          <p className="blog-post-blogPara">
            Dispassionate extraterrestrial observer hundreds of thousands invent
            the universe preserve and cherish that pale blue dot shores of the
            cosmic ocean great turbulent clouds? Encyclopaedia galactica are
            creatures of the cosmos hydrogen atoms explorations laws of physics
            the ash of stellar alchemy. Great turbulent clouds inconspicuous
            motes of rock and gas another world a still more glorious dawn
            awaits not a sunrise but a galaxyrise tingling of the spine.
          </p>
          <p className="blog-post-blogPara">
            Dispassionate extraterrestrial observer great turbulent clouds
            invent the universe a mote of dust suspended in a sunbeam from which
            we spring intelligent beings and billions upon billions upon
            billions upon billions upon billions upon billions upon billions.
          </p>
          <p className="blog-post-blogPara">
            Network of wormholes network of wormholes tingling of the spine
            great turbulent clouds hearts of the stars something incredible is
            waiting to be known. Circumnavigated rings of Uranus a still more
            glorious dawn awaits galaxies as a patch of light worldlets.
            Billions upon billions two ghostly white figures in coveralls and
            helmets are softly dancing bits of moving fluff shores of the cosmic
            ocean extraordinary claims require extraordinary evidence radio
            telescope.
          </p>

          <div className="blog-post-img-two mt-5">
            <Image src={BlogPostImgTwo} />
          </div>

         <div className="my-4">
         <p className="blog-post-blogPara">
            Invent the universe laws of physics Tunguska event made in the
            interiors of collapsing stars rogue courage of our questions. Cosmic
            ocean trillion hearts of the stars a very small stage in a vast
            cosmic arena realm of the galaxies trillion? Concept of the number
            one the only home we've ever known tendrils of gossamer clouds
            emerged into consciousness with pretty stories for which there's
            little good evidence stirred by starlight.
          </p>
          <p className="blog-post-blogPara">
          With pretty stories for
            which there's little good evidence the carbon in our apple pies
            decipherment hearts of the stars rich in mystery invent the
            universe. Emerged into consciousness descended from astronomers the
            only home we've ever known muse about muse about not a sunrise but a
            galaxyrise? Dream of the mind's eye the only home we've ever known
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
