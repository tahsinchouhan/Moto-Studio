import React,{useState} from "react";
import { useState, useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Imageone from "../../assets/images/home/Imageone.png";
import Imagetwo from "../../assets/images/home/Imagetwo.png";
import Imagethree from "../../assets/images/home/Imagethree.png";
import Imagefour from "../../assets/images/home/Imagefour.png";
import Imagefive from "../../assets/images/home/Imagefive.png";
import Imagesix from "../../assets/images/home/Imagesix.png";
import { apipath } from '../api/apiPath';

function CommunityPage() {
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/home/community/list`);
        const objData = await res.json();
        setCommunity(objData?.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  // console.log(community);

  return (
    <>
      <div className="container ">
        <div className=" Community-container">
          <div className="main-community">
            <h1 className="Text text-center">The Community</h1>
            <hr className="Line my-4 " />
            <div className="para-divb pb-4">
              <div className="d-flex">
                <p className="content mx-auto">
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

          <Row>
          {
            community.length && community.map(row=>{
              return <Col lg={4} md={6} className="image1 Gallery px-4 pb-4" key={row?._id}>
                <Image
                  src={row?.images?.length ? row?.images[0]?.img || Imageone : Imageone}
                  alt="Picture of the author"
                  className="w-100"
                  width={300}
                  height={300}
                  objectFit="cover"
                />
                <div className="overlay">
                  <p className="Text-name">{row?.products?.title || 'Title'}</p>
                </div>
              </Col>
            })
          }
            {/* <Col lg={4} md={6} className="image1 Gallery px-4 pb-4">
              <Image
                src={Imageone}
                alt="Picture of the author"
                className="w-100"
              />

              <div className="overlay">
                <p className="Text-name">
                  Pure <br /> Wildforest <br /> Honey
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="image1 Gallery px-4 pb-4" onClick={() => popupHandler()}>
              <Image
                src={Imagetwo}
                alt="Picture of the author"
                className="w-100"
              />
               <PopUp showPopuUp={showPopuUp} close={closeHander} />
              <div className="overlay">
                <p className="Text-name">
                  Premium <br /> Cashews
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="image1 Gallery px-4 pb-4" onClick={() => popupHandler()}>
              <Image
                src={Imagethree}
                alt="Picture of the author"
                className="w-100"
              />
               <PopUp showPopuUp={showPopuUp} close={closeHander} />
              <div className="overlay">
                <p className="Text-name">
                  Chyawan <br /> Prash{" "}
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="image1 Gallery px-4 pb-4" onClick={() => popupHandler()}>
              <Image
                src={Imagefour}
                alt="Picture of the author"
                className="w-100"
              />
               <PopUp showPopuUp={showPopuUp} close={closeHander} />
              <div className="overlay">
                <p className="Text-name">
                  Mahua <br /> Laddu
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="image1 Gallery px-4 pb-4" onClick={() => popupHandler()}>
              <Image
                src={Imagefive}
                alt="Picture of the author"
                className="w-100"
              />
               <PopUp showPopuUp={showPopuUp} close={closeHander} />
              <div className="  overlay">
                <p className="Text-name">
                  Mahua <br /> Cookies
                </p>
              </div>
            </Col>

            <Col lg={4} md={6} className="image1 Gallery px-4 pb-4">
              <Image
                src={Imagesix}
                alt="Picture of the author"
                className="w-100"
              />

              <div className="overlay align-items-center px-4 pb-4 ">
                <p className="Text-name ">
                  Amla <br /> Murabba
                </p>
              </div>
            </Col> */}
          </Row>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
