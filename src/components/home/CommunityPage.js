import { useState, useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Imageone from "../../assets/images/home/Imageone.png";
import Imagetwo from "../../assets/images/home/Imagetwo.png";
import Imagethree from "../../assets/images/home/Imagethree.png";
import Imagefour from "../../assets/images/home/Imagefour.png";
import Imagefive from "../../assets/images/home/Imagefive.png";
import Imagesix from "../../assets/images/home/Imagesix.png";
import { apipath } from '../../pages/api/apiPath';

function CommunityPage() {
  const [community, setCommunity] = useState([]);

  
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
      {_id:1, images:[{img:'/Image/Product 1.png'}], products: {title: 'Pure Wildforest Honey'}},
      {_id:2, images:[{img:'/Image/Product 2.png'}], products: {title: 'Premium Cashews'}},
      {_id:3, images:[{img:'/Image/Product 3.png'}], products: {title: 'Chyawan Prash'}},
      {_id:4, images:[{img:'/Image/Product 4.png'}], products: {title: 'Mahua Laddu'}},
      {_id:5, images:[{img:'/Image/Product 5.png'}], products: {title: 'Mahua Cookies'}},
      {_id:6, images:[{img:'/Image/Product 6.png'}], products: {title: 'Amla Murabba'}}
    ])
  }, [])

  return (
    <>
      <div className="container ">
        <div className=" Community-container">
          <div className="main-community">
            <h1 className="Text text-center">The Community</h1>
            <hr className="Line my-4 " />
            <div className="para-divb pb-4">
              <div className="d-flex">
                <p className="content mx-auto" style={{fontFamily:'Lato'}}>
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

          <Row className='mx-5'>
          {
            community.length && community.map(row=>{
              return <Col lg={4} md={6} className="image1 Gallery" key={row?._id}>
              <div className='position-relative' style={{height:350, margin:'auto', boxSizing:'border-box'}}>
                <Image
                  src={row?.images?.length ? row?.images[0]?.img || Imageone : Imageone}
                  alt="Picture of the author"
                  // className="w-100"
                  // width={350}
                  // height={350}
                  layout='fill'
                  objectFit="cover"
                  unoptimized={true}
                  loading="eager"
                />
                <div className="overlay">
                  <p className="Text-name">{row?.products?.title || ''}</p>
                </div>
              </div>
              </Col>
            })
          }
          </Row>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
