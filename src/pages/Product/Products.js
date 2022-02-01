import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
// import styless from './Product/products.css';
import sanju from "../../../public/ProductImage/ProductImage1.png"

function Products() {
  return (
    <Container>
      {/* <div>
            <Row>
                <Col md = {}></Col>
            </Row> */}
      <div>
        <h1 className="text-center">
          The Product
          <hr />
        </h1>
        <div>
          <Row>
            <Col md={3} sm={6} className="ProductImage">
              <Image
                src="/ProductImage/ProductImage1.png"
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Amla Murabba</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <span>Product Details</span>
              </div>
              <span className="mt-1 mb-1">₹250</span>
              <div>
                {" "}
                <Button type="submit" className="Add-to-chart-z">
                  ADD TO CART
                </Button>
              </div>
            </Col>

            <Col md={3} sm={6} className="ProductImage">
              <Image
                src={"/ProductImage/ProductImage2.png"}
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Mahua Laddu</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <span>Product Details</span>
              </div>
              <span className="mt-1 mb-1">₹250</span>
              <div>
                <Button type="submit" className="click">
                  ADD TO CART
                </Button>
              </div>
            </Col>

            <Col md={3} sm={6} className="ProductImage">
              <Image
                src="/ProductImage/ProductImage3.png"
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Wildforest Honey</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <span>Product Details</span>
              </div>

              <span className="mt-1 mb-1">₹250</span>
              <div>
              <Button type="submit" className="click">
                ADD TO CART
              </Button>
              </div>
            </Col>
            <Col md={3} sm={6} className="ProductImage">
              <Image
                src={"/ProductImage/ProductImage2.png"}
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Mahua Cookies</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <p>Product Details</p>
              </div>
              <span className="mt-1 mb-1">₹250</span>
              <div>
              <Button type="submit" className="click">
                ADD TO CART
              </Button>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <Row>
            <Col md={3} sm={6} className="ProductImage">
              <Image
                src="/ProductImage/ProductImage5.png"
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Chyawanprash</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <p>Product Details</p>
              </div>
              <span>₹250</span>

              <Button type="submit" className="click">
                ADD TO CART
              </Button>
            </Col>

            <Col md={3} sm={6} className="ProductImage">
              <Image
                src="/ProductImage/ProductImage6.png"
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Handmade Green Tea</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <p>Product Details</p>
              </div>
              <span>₹250</span>

              <Button type="submit" className="click">
                ADD TO CART
              </Button>
            </Col>
            <Col md={3} sm={6} className="ProductImage">
              <Image
                src="/ProductImage/ProductImage7.png"
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Amla Murabba</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <p>Product Details</p>
              </div>
              <div>
                <span>₹250</span>
              </div>

              <Button type="submit" className="click">
                ADD TO CART
              </Button>
            </Col>
            <Col md={3} sm={6} className="ProductImage">
              <Image
                src="/ProductImage/ProductImage8.png"
                alt="Picture of the author"
                width={197.47}
                height={170}
              />
              <h1 className="text">Mahua Laddu</h1>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="mt-1 mb-1 text1">
                <p>Product Details</p>
              </div>
              <span>₹250</span>

              <Button type="submit" className="click">
                ADD TO CART
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      {/* </div> */}
    </Container>
  );
}

export default Products;
