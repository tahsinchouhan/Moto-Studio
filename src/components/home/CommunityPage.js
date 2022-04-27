import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Imageone from "../../assets/images/home/Imageone.png";
import Imagetwo from "../../assets/images/home/Imagetwo.png";
import Imagethree from "../../assets/images/home/Imagethree.png";
import Imagefour from "../../assets/images/home/Imagefour.png";
import Imagefive from "../../assets/images/home/Imagefive.png";
import Imagesix from "../../assets/images/home/Imagesix.png";
import { apipath } from "../../pages/api/apiPath";
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
        _id: "620e6e923d3e6fe4d14acf48",
        images: [{ img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_1_oab2j3.png" }],
       
        products: { title: "Pure Wildforest Honey" },
      },
      {
        _id: "6256b2e0e150e5b74cce9dff",
        images: [{ img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_2_vo1ixi.png" }],
        products: { title: "Premium Cashews" },
      },
      {
        _id: "620e5ca63d3e6fe4d14acc3b3",
        images: [{ img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_3_lixc7e.png" }],
        products: { title: "Chyawan Prash" },
      },
      {
        _id: "620e609e3d3e6fe4d14acd02",
        images: [{ img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041705/cgherbal/about/Product_4_xr4vvh.png" }],
        products: { title: "Mahua Laddu" },
      },
      {
        _id: "6256b32ee150e5b74cce9eb3",
        images: [{ img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041704/cgherbal/about/Product_5_ha2qn1.png" }],
        products: { title: "Mahua Cookies" },
      },
      {
        _id: "620e5e023d3e6fe4d14acca2",
        images: [{ img: "https://res.cloudinary.com/cgherbals/image/upload/v1651041704/cgherbal/about/Product_6_nbmoas.png" }],
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
            <div className="para-divb pb-4">
              <div className="d-flex">
                <p className="content mx-auto" style={{ fontFamily: "Lato" }}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean. A small river named
                  Duden flows by their place and supplies it with the necessary
                  regelialia.
                </p>
              </div>
            </div>
          </div>

          <Row className="m-0">
            {community.length &&
              community.map((row) => {
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
                          row?.images?.length
                            ? row?.images[0]?.img || Imageone
                            : Imageone
                        }
                        alt="Picture of the author"
                        // className="w-100"
                        // width={350}
                        // height={350}
                        layout="fill"
                        objectFit="cover"
                        unoptimized={true}
                        loading="eager"
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
