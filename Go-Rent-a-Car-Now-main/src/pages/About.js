import React from 'react'
import '../Pages-Style/About.css'
import AboutSection from '../Components/UI/AboutSection'
import ServicesList from '../Components/UI/ServicesList'
import Helmet from '../Components/helmet/Helmet'
import WorkWithMe from '../Components/UI/WorkWithMe'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import about_section_img from '../Components/assets/img/about_section.avif'
import carData from '../Components/assets/MembersData';


const About = () => {
  return (
    <>
      <Helmet>
        <div className="about_header_section">
          <h1>| About Us |</h1>
        </div>
        <AboutSection></AboutSection>
        <Container>
          <div className=" committed_section">
            <img src={about_section_img} alt="" />
            <div className=" committed_section_content">
              <h1> We Are Committed To Safe Ride Solutions</h1>
              <p>At [Your Company Name], safety is not just a priority; it's our unwavering commitment. We understand the importance of providing a secure ride solution for our valued passengers, and we go the extra mile to ensure that every journey with us is a safe and reliable experience. <br />We are not just a transportation service; we are your partners in ensuring a reliable and worry-free journey. Experience the difference with [Your Company Name] – where your safety is our top priority.</p>
            </div>
          </div>
        </Container>
        <WorkWithMe></WorkWithMe>
        <section>
        
          <Container >
          <div className='exports_heading'>
                        <h4 className="service_subtitle">Export</h4>
                        <h2 className="service_title">Our Exports</h2>
                    </div>
            <div className="container">
              <div className="row" >
                {
                  carData.map((item) => {
                    return (
                      <>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 " key={item.imgUrl}>
                          <div className="our-team" >
                            <div className="picture">
                              <img className="img-fluid" alt=' ' src={item.imgUrl} />
                            </div>
                            <div className="team-content">
                              <h3 className="name">{item.name}</h3>
                              <h4 className="title">{item.experience}</h4>
                            </div>
                            <ul className="social">
                            <li><Link to={item.fbUrl}><i className="ri-facebook-line"></i></Link></li>
                            <li><Link to={item.twitUrl}><i className="ri-twitter-line"></i></Link></li>
                            <li><Link to={item.linkedinUrl}><i className="ri-linkedin-line"></i></Link></li>
                            <li>  <Link to={item.instUrl}><i className="ri-instagram-line"></i></Link></li>
                            </ul>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </Container>
        </section>
        <ServicesList></ServicesList>
      </Helmet>



    </>
  )
}

export default About