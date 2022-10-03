import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import Imagetwo from "../../assets/images/home/Imagetwo.png";
// import Imagethree from "../../assets/images/home/Imagethree.png";
// import Imagefour from "../../assets/images/home/Imagefour.png";
// import Imagefive from "../../assets/images/home/Imagefive.png";
// import Imagesix from "../../assets/images/home/Imagesix.png";
// import { apipath } from "../../pages/api/apiPath";
import { useRouter } from "next/router";

function CommunityPage() {
  const [community, setCommunity] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await fetch(`${apipath}/api/v1/home/community/list`);
    //     const objData = await res.json();
    //     setCommunity(objData?.data)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchData();

    setCommunity([
      {
        _id: "62fe695aed912cacd179f470",
        images: [
          {
            img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_1_oab2j3.png",
          },
        ],

        products: { title: "Pure Wildforest Honey" },
      },
      {
        _id: "62fdeac8ed912cacd179a1e0",
        images: [
          {
            img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_2_vo1ixi.png",
          },
        ],
        products: { title: "Premium Cashews" },
      },
      {
        _id: "62a5dd9477e961a1d08fdc49",
        images: [
          {
            img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_3_lixc7e.png",
          },
        ],
        products: { title: "Churna" },
      },
      {
        _id: "62ff23daed912cacd179fbfa",
        images: [
          {
            img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_4_xr4vvh.png",
          },
        ],
        products: { title: "Mahua Jam" },
      },
      {
        _id: "62fb2a64ed912cacd17947b0",
        images: [
          {
            img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041704/cgherbal/about/Product_5_ha2qn1.png",
          },
        ],
        products: { title: "Kodo Cookies" },
      },
      {
        _id: "62fb2cdced912cacd17949e1",
        images: [
          {
            img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041704/cgherbal/about/Product_6_nbmoas.png",
          },
        ],
        products: { title: "Amla Murabba" },
      },
    ]);
  }, []);

  return (
    <>
      <div className="container ">
        <div className=" Community-container">
          <div className="main-community">
            <div style={{ margin: "0 5px" }}>
              <h1 className="Text">The Community</h1>
              <hr className="my-4 Line " />
            </div>
            <div className="para-divb pb-5 communitypage-apply-media-query">
              <div
                className="col-lg-9 mx-auto text-center home-community-p-mb"
                style={{ fontFamily: "Lato" }}
              >
                <p>
                  Chhattisgarh is home to several tribal castes with Gonds of
                  Bastar being the prominent among them. The Baiga, Korba, Abhuj
                  Maria, BisonHorn Maria, Muria, Halbaa, Bhatra and Dhurvaa are
                  other major tribes of the region.
                </p>
                <p>
                  Primarily dependent on the agriculture with minor forest
                  produce as additional income. These forest dwellers are
                  members of the cooperative called Chhattisgarh Minor Forest
                  Produce Cooperative Federation (CGMFP).
                </p>
                <p>
                  The CGMFP facilitates the entrepreneurial spirit of the
                  members and helps them earn better from minor forest produce,
                  by helping them in setting up processing units for minor
                  forest produce like Tamarind, Honey, Cashew and 62 more such
                  species.
                </p>
                <p>
                  These units produce more than 120 products from the raw
                  material collected from the forests. Value addition allows
                  them to improve their returns by increasing shelf life and
                  market value of the produce. The units are all owned and
                  Operated by the women.
                </p>
                <p>
                  The products are marketed by CGMFP under the brand name
                  CHHATTISGARH HERBALS. Each product offers PURITY THAT IS
                  PRICELESS, along with the purity of the forests these products
                  also represent the priceless feeling of helping the Tribal
                  Women earn self-respect and dignity in their communities.
                </p>
              </div>
            </div>
            {/* <div className="para-divb pb-5 communitypage-apply-media-query-mobile">
              <div className="col-lg-9 mx-auto home-community-p-mb" style={{ fontFamily: "Lato" }}>
                <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                </p>
              </div>
            </div> */}
          </div>

          <Row className="m-0">
            {community.length &&
              community.map((row, index) => {
                return (
                  <Col lg={4} md={6} className="image1 Gallery" key={row?._id}>
                    <div
                      className="position-relative"
                      style={{
                        height: 350,
                        margin: "auto",
                        boxSizing: "border-box",
                      }}
                      onClick={() => router.push(`/product/${row?._id}`)}
                    >
                      <Image
                        src={
                          // row?.images?.length
                          //   ? row?.images[0]?.img || Imageone
                          //   : Imageone
                          `/images/${index}.jpg`
                        }
                        alt="Picture of the author"
                        // className="w-100"
                        // width={350}
                        // height={350}
                        layout="fill"
                        objectFit="cover"
                        // unoptimized={true}
                        // loading="eager"
                      />
                      <div className="overlay">
                        <p className="Text-name">
                          {row?.products?.title || ""}
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
