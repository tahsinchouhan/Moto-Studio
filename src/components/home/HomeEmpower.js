import { useState, useEffect } from 'react'
import Button from "../button/ButtonLight"
import { apipath } from '../../pages/api/apiPath';

function HomeEmpower() {
  const [impoweredData, setImpoweredData] = useState({
    backgroundImg: '',
    title: 'Title',
    desc: 'Description'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/about/empowerd/list`);
        const objData = await res.json();
        if (objData.length) {
          setImpoweredData({
            backgroundImg: objData[0]?.images[0]?.img || '',
            title: objData[0]?.title || 'Title',
            desc: objData[0]?.description || 'Description'
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  console.log(impoweredData);

  return (
    <>
      <div className="home-empower-img">      
        <div className="home-empower-img-distance">
          <p className="home-empower-img-para d-block">
            {/* From the heart of Chhattisgarh */}
            { impoweredData?.desc || 'From the heart of Chhattisgarh' }
          </p>
          <p className="home-empower-img-text">{impoweredData?.title || 'Title'}</p>
          <div className="d-flex">
           <div className="mx-auto">
           <Button text="KNOW MORE" className="home-empower-button" />
           </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .home-empower-img {
          background-image: url(${impoweredData?.backgroundImg});
          background-size:cover
        }
      `}</style>
    </>
  );
}

export default HomeEmpower;
