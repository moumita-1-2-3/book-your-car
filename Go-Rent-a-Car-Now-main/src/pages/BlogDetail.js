import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import blogData from '../Components/assets/BlogData';
import Helmet from '../Components/helmet/Helmet';
import { Container } from 'reactstrap';
import '../Pages-Style/BlogDetails.css'
import comment1 from '../Components/assets/blog-img/comment1.jpeg'

export default function BlogDetail() {
  const { slug } = useParams();
  const singleBlogItem = blogData.find((blog) => blog.title === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleBlogItem])

  return (
    <Helmet>
      <Container>
        <div className='row details' >
          <div className="col-md-8 blog_details">
            <img src={singleBlogItem.imgUrl} alt=" " />
            <h2>{singleBlogItem.title}</h2>
            <span className='blog_author d-flex '>
              <div>
              <i className="ri-user-line"></i>{singleBlogItem.author}
              </div>
              <div className="d-flex  align-items-center gap-1">
              <span className='d-flex align-items-center gap-1 section_description'>
                <i className="ri-calendar-line"></i>{singleBlogItem.date}
              </span>
              <span className='time d-flex align-items-center gap-1 section_description '>
                <i className="ri-time-line"></i>{singleBlogItem.time}
              </span>
            </div>
            </span>
           
            <p>{singleBlogItem.description}</p>
            <h2 className='blog_quote'>{singleBlogItem.quote}</h2>
            <p>{singleBlogItem.description}</p>
            <div className="comment_list">
              <h4>3 Comments</h4>

              <div className="single_comment">
                <img src={comment1} alt="" />
                <div className="comment_content">
                  <h6>Daid visa</h6>
                  <p className='comment_date'> 17 July, 2022</p>
                  <p>Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. </p>
                  <span className="replay">
                  <i class="ri-reply-fill"></i> Replay
                </span>
                </div>
               
              </div>
             
            </div>
          </div>
        </div>
      </Container>
    </Helmet>

  )
}
