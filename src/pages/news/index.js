import { useState, useEffect } from 'react'
import {
  Container,
  Row,
  Col,
  Dropdown,
  Card,
  Button,
} from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";
import { apipath } from '../api/apiPath';


function IntoNewsroom() {
  const [newsData, setNewsData] = useState([]);
  const [dateList, setDateList] = useState([]);

  const filterNews = (month) => {
    fetchData(month)
  }

  const fetchData = async (month = '') => {
    let endpoint ='';
    if(month !== ''){
      endpoint = `/api/v1/newsroom/search?month=${month}`;
    } else {
      endpoint = `/api/v1/newsroom/list`;
    }
    try {
      const res = await fetch(`${apipath}${endpoint}`);
      const objData = await res.json();
      setNewsData(objData?.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchYearData = async () => {
      try {
        const res = await fetch(`${apipath}/api/v1/newsroom/dates/list`);
        const objData = await res.json();
        setDateList(objData?.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchYearData();
    fetchData();
  }, [])


  return (
    <>
      <div className="into-newsroom-container">
        <Container className="cg-herbal-container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="newsroom-header mt-4 text-center">
                Into the Newsroom
              </h1>
              <div>
                <div className="news-header-div">
                  <hr className="news-header-hr" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <Row>
              <Col md={3} lg={3}>
                <div>
                  <div>
                    <h6 className="browse-news-articles">BROWSE NEWS ARTICLES</h6>
                  </div>
                  <div className="News-Articles-div">
                    <hr className="News-Articles"/>
                  </div>
                  <div>
                  {
                    dateList.length > 0 && [...new Set(dateList.map(item => item.year))].map(year=>{
                      return <div className="blog-calender-2022">
                        <Dropdown className="d-inline my-2" key={year}>
                          <Dropdown.Toggle id="dropdown-autoclose-true">
                            <span>
                              <BsFillCaretRightFill className="into-newsroom-calender-arrow" />
                            </span>
                            {year}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {
                              [...new Set(dateList.map(item => item.month))].filter(value => value === `${value.split('-')[0]}-${year}`).map((month,index)=>{
                                return <Dropdown.Item href="#" key={index} onClick={()=>filterNews(month)}>
                                  <span className='text-dark'>
                                    <BsFillCaretRightFill className="news-icon"/> {month.split('-')[0]}
                                  </span>
                                  
                                </Dropdown.Item>
                              })
                            }
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    })
                  }
                  </div>
                </div>
              </Col>
              <Col md={9} lg={9}>
                {
                  newsData.length ? newsData.map(news => {
                    return <div className="news-room-card" key={news._id}>
                    <Card style={{ width: "100% !important" }}>
                      <Card.Img variant="top" src={news?.images[0]?.img || ''} />
                      <Card.Body>
                        <Card.Title className="news-card-title">
                          Lac Cultivation and Processing
                          {news?.title || 'title'}
                        </Card.Title>
                        <Card.Text>
                          <span className="news-date-title">{new Date(news.date).toDateString()}</span>
                          <p className="news-card-para">{news?.content}</p>
                        </Card.Text>
                        <Button className="news-card-btn">
                          <span className="news-read-more">READ MORE</span>
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                  }) : <h1>Data Not Found</h1>
                }
                <div className="news-room-card">
                  <Card style={{ width: "100% !important" }}>
                    <Card.Img variant="top" src="/images/newsroomimage.png" />
                    <Card.Body>
                      <Card.Title className="news-card-title">
                        Lac Cultivation and Processing
                      </Card.Title>
                      <Card.Text>
                        <span className="news-date-title">Sep 09, 2020</span>
                        <p className="news-card-para">
                          Etiam at varius diam, id blandit erat. Suspendisse
                          eget volutpat risus, id venenatis justo. Fusce
                          elementum ligula elit. Duis ultricies ultrices nibh, a
                          tincidunt risus pretium eleifend.
                        </p>
                      </Card.Text>
                      <Button className="news-card-btn">
                        <span className="news-read-more">READ MORE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="news-room-card">
                  <Card style={{ width: "100% !important" }}>
                    <Card.Img variant="top" src="/images/newsroomimage.png" />
                    <Card.Body className="news-body ">
                      <Card.Title className="news-card-title">
                        Lac Cultivation and Processing
                      </Card.Title>
                      <Card.Text>
                        <span className="news-date-title">Sep 09, 2020</span>
                        <p className="news-card-para">
                          Etiam at varius diam, id blandit erat. Suspendisse
                          eget volutpat risus, id venenatis justo. Fusce
                          elementum ligula elit. Duis ultricies ultrices nibh, a
                          tincidunt risus pretium eleifend.
                        </p>
                      </Card.Text>
                      <Button className="news-card-btn">
                        <span className="news-read-more">READ MORE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="news-room-card">
                  <Card style={{ width: "100% !important" }}>
                    <Card.Img variant="top" src="/images/newsroomimage.png" />
                    <Card.Body className="news-body">
                      <Card.Title className="news-card-title">
                        Lac Cultivation and Processing
                      </Card.Title>
                      <Card.Text>
                        <span className="news-date-title">Sep 09, 2020</span>
                        <p className="news-card-para">
                          Etiam at varius diam, id blandit erat. Suspendisse
                          eget volutpat risus, id venenatis justo. Fusce
                          elementum ligula elit. Duis ultricies ultrices nibh, a
                          tincidunt risus pretium eleifend.
                        </p>
                      </Card.Text>
                      <Button className="news-card-btn">
                        <span className="news-read-more">READ MORE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
                <div className="news-room-card">
                  <Card style={{ width: "100% !important" }}>
                    <Card.Img variant="top" src="/images/newsroomimage.png" />
                    <Card.Body className="news-body">
                      <Card.Title className="news-card-title">
                        Lac Cultivation and Processing
                      </Card.Title>
                      <Card.Text>
                        <span className="news-date-title">Sep 09, 2020</span>
                        <p className="news-card-para">
                          Etiam at varius diam, id blandit erat. Suspendisse
                          eget volutpat risus, id venenatis justo. Fusce
                          elementum ligula elit. Duis ultricies ultrices nibh, a
                          tincidunt risus pretium eleifend.
                        </p>
                      </Card.Text>
                      <Button className="news-card-btn">
                        <span className="news-read-more">READ MORE</span>
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IntoNewsroom;
