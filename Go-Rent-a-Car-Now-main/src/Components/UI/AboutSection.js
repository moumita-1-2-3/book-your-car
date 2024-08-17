import React from 'react'
import {Container } from 'reactstrap'
import '../UI-style/AboutSection.css'
import about_img from '../assets/img/about-img-2.png'
export default function AboutSection() {
  return (
    <>
    <div className='about_section'>
        <Container >
          <div className="cards">
            <div className="about_item_content">
              <div className="about_section_contant">
                <h4 className="about_section_subtitle">About us</h4>
                <h2 className="about_section_title">Welcome to car rent service</h2>
                <p className="about_section_discription">
                  Welcome to [Your Car Rental Service], where your journey begins with convenience and style. As a premier car rental provider, we take pride in offering a seamless and memorable travel experience for our valued customers.
                  At [Your Car Rental Service], we understand that every journey is unique, and we are committed to providing you with the perfect vehicle to suit your needs. Whether you're embarking on a business trip, a family vacation, or just need a reliable ride for your daily commute, we have a diverse fleet of well-maintained vehicles to cater to your preferences.
                  <br />
                </p>
                <div className="about_section_itam">
                  <p className="about_section_discription">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum, dolor sit amet
                  </p>
                  <p className="about_section_discription">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum, dolor sit amet
                  </p>
                </div>
                <div className="about_section_itam">
                  <p className="about_section_discription">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum, dolor sit amet
                  </p>
                  <p className="about_section_discription">
                    <i className="ri-checkbox-circle-line"></i> Lorem ipsum, dolor sit amet
                  </p>
                </div>
              </div>
            </div>
            <div className="about_item_img">
              <div className='about_img'>
                <img src={about_img} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
