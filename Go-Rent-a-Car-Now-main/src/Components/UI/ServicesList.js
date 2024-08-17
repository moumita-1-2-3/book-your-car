import React from 'react'
import '../UI-style/ServicesList.css'
import { Container } from 'reactstrap'

export default function ServicesList() {
  


    return (
        <div className='services'>
            <Container>
                <div className="container">
                    <div className='services_heading'>
                        <h4 className="service_subtitle">See our</h4>
                        <h2 className="service_title">Populer Services</h2>
                    </div>

                    <div className="service_content">
                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-pin-distance-line"></i>
                            </span>
                            <h6>City Transfer</h6>
                            <p className='secrvice_discription'> Effortless travel, professional drivers, and door-to-door convenience await. Customize your journey, enjoy scenic stops, and arrive at your next destination in comfort.</p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-community-line"></i>
                            </span>
                            <h6>Whole City Tour</h6>
                            <p className='secrvice_discription'>Uncover the hidden gems and iconic landmarks of our vibrant city with our exclusive Whole City Tour</p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-guide-line"></i>
                            </span>
                            <h6>Unlimited Miles Car Rental</h6>
                            <p className='secrvice_discription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam porro similique aliquid debitis ipsam soluta dolorum ipsa! Voluptate, suscipit iure.</p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-road-map-line"></i>
                            </span>
                            <h6>Many Pickup Location</h6>
                            <p className='secrvice_discription'>Break free from mileage restrictions and embrace unlimited possibilities with our Unlimited Miles Car Rental service. Explore the open road without worrying about distance constraints. </p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-taxi-wifi-fill"></i>
                            </span>
                            <h6>Multiple Vehicle Categories</h6>
                            <p className='secrvice_discription'>Large Vans: Spacious options for group travel.
                                Mini-buses: Comfortable transportation for events and outings.
                                Motorhomes: Explore the open road in the comfort of a motorhome.</p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-car-washing-fill"></i>
                            </span>
                            <h6>Event Transportation</h6>
                            <p className='secrvice_discription'>Wedding Car Rentals: Make your special day even more memorable with our elegant wedding car options.
                                Event Shuttle Services: Efficient transportation solutions for group events.</p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-flight-takeoff-fill"></i>
                            </span>
                            <h6>Airport Transfer</h6>
                            <p className='secrvice_discription'>Airport transport refers to the various mode of transportation available for travelling to and from Airport.</p>
                        </div>


                        <div className="service_card">
                            <span className=' mb-3'>
                                <i className="ri-rocket-2-line"></i>
                            </span>
                            <h6>Fast & Easy Booking</h6>
                            <p className='secrvice_discription'>Experience the epitome of convenience with our Fast & Easy Booking service. Streamline your car rental process in just a few clicks. Our user-friendly platform ensures a hassle-free reservation, saving you time and effort.</p>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}
