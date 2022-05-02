import { useRouter } from "next/router";
import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Card } from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";
import Honey from "../../assets/images/blogs/Honey.png";
import { apipath } from "../api/apiPath";

function Blogs({blogList}) {
  const [filteredBlogList, setFilteredBlogList] = useState([])
  const [filterClicked, setFilterClicked] = useState(false)
  const router = useRouter()

  React.useEffect(()=>{
    if(!filterClicked) {
      setFilteredBlogList(blogList)
    }
  },[filterClicked])
 
  const monthChange = (month,year) => {
    console.log('change', month,year)
    console.log('blogList',blogList)
    setFilterClicked(true)
    let newBlogList = blogList.filter((blog) => {
      if(new Date(blog.date).getMonth() == month && new Date(blog.date).getFullYear() == year) {
        return true
      }
    })
    console.log('newBlogList',newBlogList)
    setFilteredBlogList(newBlogList)
  }

  return (
    <>
      <div id="blogs-page">
        {/* -----------blogs-header------------ */}
        <div className="my-3">
          <p className="blogs-heading-para">The CG Herbals Blog</p>
          <hr className="blogs-heading-hr" />
        </div>

        {/* -----------blogs-container------------- */}

        <Container>
          <Row>
            <Col xs={12} sm={12} lg={3}>
              <div>
                <p>BROWSE BLOGS</p>
                <hr className="blogs-calender-hr" />
              </div>

              <div className="blog-calender-2022">
                <Dropdown className="d-inline ">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <span>
                      <BsFillCaretRightFill className="blogs-calender-arrow" />
                    </span>
                    2022
                  </Dropdown.Toggle>
                  <Dropdown.Menu>

                  <Dropdown.Item href="#" className="calender-filter-months" onClick={() => monthChange(3,2022)}>
                      <span className="text-dark">
                        <BsFillCaretRightFill className="blogs-calender-icon" />  April
                      </span>
                    
                    </Dropdown.Item>

                  <Dropdown.Item href="#" className="calender-filter-months" onClick={() => monthChange(2,2022)}>
                      <span className="text-dark">
                        <BsFillCaretRightFill className="blogs-calender-icon" />  March
                      </span>
                    
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months" onClick={() => monthChange(1,2022)}>
                      <span className="text-dark">
                        <BsFillCaretRightFill className="blogs-calender-icon" />  February
                      </span>
                    
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months" onClick={() => monthChange(0,2022)}>
                      <span className="text-dark">
                        <BsFillCaretRightFill className="blogs-calender-icon" />  January
                      </span>
                    
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <div className="blog-calender-2021">
                <Dropdown className="d-inline ">
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                    <span>
                      <BsFillCaretRightFill className="blogs-calender-arrow" />
                    </span>
                    2021
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span className="text-dark" onClick={() => monthChange(11,2021)}>
                        <BsFillCaretRightFill className="blogs-calender-icon" /> December
                      </span>
                      
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span className="text-dark" onClick={() => monthChange(10,2021)}>
                        <BsFillCaretRightFill className="blogs-calender-icon" /> November
                      </span>
                      
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span className="text-dark" onClick={() => monthChange(9,2021)}>
                        <BsFillCaretRightFill className="blogs-calender-icon" /> October
                      </span>
                      
                    </Dropdown.Item>
                    <Dropdown.Item href="#" className="calender-filter-months">
                      <span className="text-dark" onClick={() => monthChange(8,2021)}>
                        <BsFillCaretRightFill className="blogs-calender-icon" /> September
                      </span>
                      
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>

            <Col xs={12} sm={12} lg={8} >
              <Row className="g-4">
              {
                filteredBlogList.length > 0 ? filteredBlogList.map(blog => (
                  <Col key={blog._id} xs={12} md={6} className="mt-5">
                    <Card className="h-100 border-0 px-2 cursor-pointer" onClick={() => router.push(`/blogs/${blog._id}`)}>
                      <Card.Img variant="top" src={blog?.images[0]?.img || Honey} alt={blog.title} />
                      <Card.Body className="blog-card-padding">
                        <p className="herbal-blogs-card-date">
                          &minus;&minus; &nbsp; 
                          {new Date(blog.date).toDateString(undefined, {timeZone: 'Asia/Kolkata'})}
                        </p>
                        <p className="herbal-blogs-card-title ">{blog.title}</p>
                        <p className="herbal-blogs-card-text">{blog.content}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                )) : null
              }
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Blogs;

export async function getServerSideProps(context) {

  // blog List
  const response = await fetch(`${apipath}/api/v1/about/blog/list`);
  const result = await response.json();
  
  return { props: { blogList: result} };
}

