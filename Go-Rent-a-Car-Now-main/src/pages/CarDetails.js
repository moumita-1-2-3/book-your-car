import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import carData from '../Components/assets/CarData'
import Helmet from '../Components/helmet/Helmet'
import { Container } from 'reactstrap'
import '../Pages-Style/Car_Details.css'
import BookingFrom from '../Components/UI/BookingFrom'
import Paymant from '../Components/UI/Paymant'

export default function CarDetails() {

  const { slug } = useParams();
  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem])

  const [isVisible, setIsVisible] = useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <>
      <Helmet>
        <Container>
          <div className="row car_detail">
            <img src={singleCarItem.imgUrl} className='col-md-6' alt="" />
            <div className='car_detail_content col-md-6'>
              <h1>{singleCarItem.carName}</h1>
              <div className='car_rating'>
                <h6 className='rent_price'><i className="ri-money-rupee-circle-fill"></i> {singleCarItem.price}.00 / Day</h6>
                <span>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-s-fill"></i>
                  <i className="ri-star-half-s-fill"></i>
                  ({singleCarItem.rating} rating)
                </span>
              </div>
              <p>{singleCarItem.description}</p>

              <div className="car_detail_info" >
                <span><i className="ri-wheelchair-fill"></i>Seating Capacity : {singleCarItem.SeatingCapacity}</span>
              </div>

              <div className="car_detail_info" style={{ columnGap: '4rem' }}>
                <span><i className="ri-roadster-fill"></i>{singleCarItem.model}</span>
                <span><i className="ri-settings-3-fill"></i>{singleCarItem.automatic}</span>
                <span><i className="ri-timer-fill"></i>{singleCarItem.speed}</span>
              </div>
              <div className="car_detail_info" style={{ columnGap: '2.8rem' }}>
                <span><i className="ri-map-pin-fill"></i>{singleCarItem.gps}</span>
                <span><i className="ri-wheelchair-fill"></i>{singleCarItem.seatType}</span>
                <span><i className="ri-building-2-fill"></i>{singleCarItem.brand}</span>
              </div>
            </div>
          </div>
          <div className="container">
          </div>


          <div className="read_section dexstop mb-3">
            <div className="read_section_title">
              <h4>Read before you book  </h4>
              <i onClick={toggleVisibility} className={isVisible ? 'ri-arrow-down-s-fill' : 'ri-arrow-right-s-fill'} ></i>
            </div>

            {isVisible && (
              <>
                <div className="row booking_info_section">
                  <div className="col-md-4">
                    <div className="booking_info">
                      <h5>Cab Category</h5>
                      <p>The booking will be for cab type SEDAN and we do not commit on providing the preferred cab model (Dzire, Etios or similar)</p>                                      </div>
                    <div className="booking_info">
                      <h5>Hilly Regions</h5>
                      <p>AC will be switched off in hilly areas</p>                                      </div>
                    <div className="booking_info">
                      <h5>Receipts</h5>
                      <p>You need to collect receipts from the driver for any extra charges paid directly to the driver during the trip. MMT is not liable to provide invoices for such amounts.</p>
                    </div>
                  </div>


                  <div className="col-md-4">
                    <div className="booking_info">
                      <h5>Luggage Policy</h5>
                      <p>SEDAN has space for 2 Luggage Bags. In case the car happens to be CNG, the luggage space will be lesser. However depending on the number of passengers, luggage can be adjusted in seating area with driver consent.</p>
                    </div>
                    <div className="booking_info">
                      <h5>Driver Details</h5>
                      <p>Driver details will be shared up to 30 mins prior to departure. Incase the driver/cab that reaches you for pick up is different from what we have communicated, please don't board the cab and call us for assistance.</p>
                    </div>
                  </div>


                  <div className="col-md-4">
                    <div className="booking_info">
                      <h5>Stops</h5>
                      <p>This is a point to point booking and only one stop for meals is included.</p>
                    </div>
                    <div className="booking_info">
                      <h5>Waiting Charges</h5>
                      <p>Driver would wait maximum 45 minutes from your scheduled pickup time at your pickup location. Post this, your trip may get cancelled without any refund. If there is a mutual agreement between customer and driver, waiting charges would be Rs 100.0/hr.</p>
                    </div>
                    <div className="booking_info">
                      <h5>Delays</h5>
                      <p>Due to traffic or any other unavoidable reason, pickup may be delayed by 30 mins.</p>
                    </div>

                  </div>
                </div>

              </>
            )}

          </div>


          <div className="row mb-5">
            <div className='col-md-7'>
              <BookingFrom></BookingFrom>
            </div>
            <div className='col-md-5'>
              <Paymant></Paymant>
            </div>
          </div>
        </Container>
      </Helmet>
    </>
  )
}
