import React from 'react'
import '../Pages-Style/Home.css'
import HeroSilder from '../Components/UI/HeroSilder'
import Helmet from '../Components/helmet/Helmet'
import { Container } from 'reactstrap'
import FindCarFrom from '../Components/UI/FindCarFrom'
import CarCards from '../Components/UI/CarCards'
import WrokWithMe from '../Components/UI/WorkWithMe'
import ServicesList from '../Components/UI/ServicesList'
import Reviewscard from '../Components/UI/Reviewscard'
import BlogList from '../Components/UI/BlogList'
import AboutSection from '../Components/UI/AboutSection'
import Achivement from '../Components/UI/Achivement'
import Advertise from './Advertise'



export default function Home() {
  return (
    <>
      <Helmet title='Home'>
        <section className='p100  hero_slider_section'>
          <HeroSilder></HeroSilder>
          <div className="hero_form ">
            <Container>
              <div className="margin_from">
                <div className="row from_row">
                  <div className='col-md-4'>
                    <div className="find_car_left">
                      <h2>Find your best car here</h2>
                    </div>
                  </div>

                  <div className='col-md-8'>
                    <FindCarFrom></FindCarFrom>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <Advertise></Advertise>

        <div className='aboutsection_top'>
          <AboutSection></AboutSection>
        </div>
        <Achivement></Achivement>
        <ServicesList></ServicesList>

        <Container>
          <div className='cars_heading '>
            <h4 className="cars_subtitle">Come With</h4>
            <h2 className="cars_title">Hot Offers</h2>
          </div>
          <CarCards></CarCards>
        </Container>

        <WrokWithMe></WrokWithMe>
        <Reviewscard></Reviewscard>
        <Container>
          <div className='blog_heading '>
            <h4 className="blog_section_subtitle">Explore our Blog</h4>
            <h2 className="blog_section_title">Latest Blogs</h2>
          </div>
          <BlogList></BlogList>
        </Container>
      </Helmet>
    </>
  )
}


