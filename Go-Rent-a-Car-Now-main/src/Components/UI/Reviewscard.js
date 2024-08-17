import React from 'react'
import '../UI-style/Reviwescard.css'; 
import { Col, Container, Row } from 'reactstrap'
import Slider from 'react-slick'
export default function Reviewscard() {

    const settings = {
        
        pagination:true,
        dots: true,
        infinite: true,
        autoplay : true,
        speed : 1000, 
        swipeToSlide : true,
        autoplaySpeed :2000,
        slidesToShow :3,
        slidesToScroll:1,
        responsive :[
            {
                breakpoint : 991,
                settings : {
                    slidesToShow : 2,
                    slidesToScroll:1,
                    infinite:true,
                    // dots : true,
                    }
            },
            {
                breakpoint : 576,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll:1,
                    }
            }
        ]
    }
  return (
        <>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4 text-center'>
                        <h4 className="review_subtitle">Our client says</h4>
                        <h2 className="review_title"> Testimonials  </h2>
                    </Col>
                </Row>
                    <div className="review_part">
                  <Slider {...settings} >
                      <div className="review_section py-1 px-2">

                          <div className="image_review">
                              <div className="customer_image">
                                  <img src="https://cdn.shopify.com/s/files/1/0664/2191/5900/t/8/assets/screenshot-20221121-alle-191353-1669054447602.png?v=1669054450" alt="customer_image" />
                              </div>

                              <div className="customer_name_review_status">
                                  <div className="customer_name">Olivia Smith</div>
                                  <div className="customer_review">
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-half-s-fill"></i>
                                  </div>
                                  <p className="section_description">Customer</p>

                              </div>
                          </div>
                          <p className="customer_comment">
                              "My little boy loves it! He used to spend hours watching videos on my phone, since we bought Drawing Projector all he does is drawing, it's like the phone never existed, I'm so happy!"
                          </p>
                      </div>
                      <div className="review_section py-1 px-2">

                          <div className="image_review">
                              <div className="customer_image">
                                  <img src="https://cdn.shopify.com/s/files/1/0664/2191/5900/t/8/assets/screenshot-20221121-alle-191353-1669054447602.png?v=1669054450" alt="customer_image" />
                              </div>

                              <div className="customer_name_review_status">
                                  <div className="customer_name">Olivia Smith</div>
                                  <div className="customer_review">
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-half-s-fill"></i>
                                  </div>
                                  <p className="section_description">Customer</p>

                              </div>
                              <p className="customer_comment">
                              "My little boy loves it! He used to spend hours watching videos on my phone, since we bought Drawing Projector all he does is drawing, it's like the phone never existed, I'm so happy!"
                          </p>
                          </div>
                          
                      </div>

                      <div className="review_section py-1 px-2">

                          <div className="image_review">
                              <div className="customer_image">
                                  <img src="https://cdn.shopify.com/s/files/1/0664/2191/5900/t/8/assets/screenshot-20221121-alle-191353-1669054447602.png?v=1669054450" alt="customer_image" />
                              </div>

                              <div className="customer_name_review_status">
                                  <div className="customer_name">Olivia Smith</div>
                                  <div className="customer_review">
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-half-s-fill"></i>
                                  </div>
                                  <p className="section_description">Customer</p>

                              </div>
                          </div>
                          <p className="customer_comment">
                              "My little boy loves it! He used to spend hours watching videos on my phone, since we bought Drawing Projector all he does is drawing, it's like the phone never existed, I'm so happy!"
                          </p>
                      </div>


                      <div className="review_section py-1 px-2">

                          <div className="image_review">
                              <div className="customer_image">
                                  <img src="https://cdn.shopify.com/s/files/1/0664/2191/5900/t/8/assets/screenshot-20221121-alle-191353-1669054447602.png?v=1669054450" alt="customer_image" />
                              </div>

                              <div className="customer_name_review_status">
                                  <div className="customer_name">Olivia Smith</div>
                                  <div className="customer_review">
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-s-fill"></i>
                                      <i className="ri-star-half-s-fill"></i>
                                  </div>
                                  <p className="section_description">Customer</p>

                              </div>
                          </div>
                          <p className="customer_comment">
                              "My little boy loves it! He used to spend hours watching videos on my phone, since we bought Drawing Projector all he does is drawing, it's like the phone never existed, I'm so happy!"
                          </p>
                      </div>
                  </Slider>
              </div>
          </Container>
      </>
    )
}
