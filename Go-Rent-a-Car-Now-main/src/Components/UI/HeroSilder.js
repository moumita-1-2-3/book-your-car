import React from 'react'
import '../UI-style/HeroSilder.css'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import Animationword from '../animation-part/Animationword'



export default function HeroSilder() {

    const settings = {
        fade: true,
        speed: 200,
        autoplayspeed: 200,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    }

    return (
        <Slider {...settings} className='hero_slider'>
            <div className="slider_item slider_item-01">
                <Container>
                    <div className="slider_content">
                        <div className="text_light ">
                        <Animationword text='Find, Book, Rent a Car - '></Animationword>
                            <Animationword text='quik and Super easy! '></Animationword>
                        </div>
                        <div className='slider_description'>
                            <h4 >Stramline your car rental experience with <br /> our effortless booking process</h4>
                            <button className=" reserve_btn ">
                                <Link to='/cars'>Explore Car</Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="slider_item slider_item-02">
                <Container> 
                    <div className="slider_content">
                        <div className="text_light mb-5">
                            <Animationword text='Find, Book, Rent a Car - '></Animationword>
                            <Animationword text='quik and Super easy! '></Animationword>
                        </div>
                        <div className='slider_description'>
                            <h4 >Stramline your car rental experience with <br /> our effortless booking process</h4>
                            <button className=" reserve_btn ">
                                <Link to='/cars'>Explore Car</Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>


            <div className="slider_item slider_item-03">
            <Container>
                    <div className="slider_content">
                        <div className="text_light mb-5">
                            <Animationword text='Find, Book, Rent a Car - '></Animationword>
                            <Animationword text='quik and Super easy! '></Animationword>
                        </div>
                        <div className='slider_description'>
                            <h4 >Stramline your car rental experience with <br /> our effortless booking process</h4>
                            <button className=" reserve_btn ">
                                <Link to='/cars'>Explore Car</Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="slider_item slider_item-04">
            <Container>
                    <div className="slider_content">
                        <div className="text_light mb-5">
                            <Animationword text='Find, Book, Rent a Car - '></Animationword>
                            <Animationword text='quik and Super easy! '></Animationword>
                        </div>
                        <div className='slider_description'>
                            <h4 >Stramline your car rental experience with <br /> our effortless booking process</h4>
                            <button className=" reserve_btn ">
                                <Link to='/cars'>Explore Car</Link>
                            </button>
                        </div>
                    </div>
                </Container>
            </div>
        </Slider>
    )
}
