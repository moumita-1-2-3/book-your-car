import React  from 'react'
import '../UI-style/BookingFrom.css'
import { Link } from 'react-router-dom'
import { FormGroup } from 'reactstrap'


export default function BookingFrom() {
//   const [isVisible, setIsVisible] = useState(false)
//     const toggleVisibility =() =>{
//  setIsVisible(!isVisible)
//     }
    
    
   
    return (
        <>
        
            <div action="" className=" booking_from ">
                <h2>Booking From</h2>
                <div className="row traveller_information">
                    <h4>Trip details</h4>
                    <FormGroup className='booking_group '>
                        <label for="Pick-up">Pick-up Address <span>(This will help our driver reach you on time)</span></label>
                        <input type="text" placeholder='Enter exact pick-up address/near by location / building name' required/>
                    </FormGroup>
                    <FormGroup className='booking_group'>
                        <label for="Drop-off">Drop-off Address <span>(Optional - This will help you avoid any extra charges after the trip)</span></label>
                        <input type="text" placeholder='Enter drop address to know the exact fare & avoid extra charges after the trip' required/>
                    </FormGroup>
                    <div className="row">
                    <FormGroup className='booking_group col-md-6'>
                        <label for="Pick-up">Pick-up Date</label>
                        <input type="date" placeholder='Enter exact pick-up address/near by location / building name' required/>
                    </FormGroup>
                    <FormGroup className='booking_group col-md-6'>
                        <label for="Drop-off">Pick-up time</label>
                        <input className='Journey_time' type="time" placeholder='Journey time ' required/>
                    </FormGroup>
                    </div>
                </div>
                <div className="row traveller_information">
                    <h4> Traveller Details</h4>
                    <FormGroup className='booking_group col-md-7'>
                        <label for="fname">Name</label>
                        <input type="text" placeholder='Enter your full name' required/>
                    </FormGroup>
                    <FormGroup className='booking_group col-md-5'>
                        <label for="number">Gender</label><br />
                        <div className="gender_group">
                            <input type="radio" name="gender" value="male" checked /> Male                               <input type="radio" name="gender" value="female" /> Female
                            <input type="radio" name="gender" value="other" /> Other
                        </div>
                    </FormGroup>
                    <FormGroup className='booking_group col-md-7'>
                        <label for="email">Email Id <span> (Your booking confirmation will be sent here)</span></label>
                        <input type="email" placeholder='From address' required />
                    </FormGroup>
                    <FormGroup className='booking_group col-md-5'>
                        <label for="number">Mobile Number</label>
                        <input type="number" placeholder='Mobile Number' required/>
                    </FormGroup>
                    <div >
                        <p>By proceeding to book, I Agree to MakeMyTrip's <Link to=' '>Privacy Policy</Link>, <Link to=' '>User Agreement</Link>  and <Link to=' '>Terms of Service</Link>. </p>
                    </div>
                </div>

                <div className="row pick_up">
                    <h4>Your pincode and state</h4>
                    <FormGroup className='booking_group col-md-4'>
                        <label for="Pick-up">Pincode</label>
                        <input type="number" placeholder='Pincode' required/>
                    </FormGroup>
                    <FormGroup className='booking_group col-md-4'>
                        <label for="Drop-off">State</label>
                        <input type="text" placeholder='Select' required/>
                    </FormGroup>
                    <FormGroup className='booking_group col-md-4'>
                        <label for="Drop-off">Addresss</label>
                        <input type="text" placeholder='Your Address' required />
                    </FormGroup>
                    <div>
                        <p><input type="checkbox" name="check" required />Confirm and save billing details to your profile</p>
                    </div>
                </div>
            </div>

 
 






            {/* <div className="read_section moblie">
                <div className="read_section_title">
                    <h4>Read before you book!</h4>
                    <i onClick={toggleVisibility} class={isVisible ? 'ri-arrow-down-s-fill' : 'ri-arrow-right-s-fill'} ></i>
                </div>

            {isVisible && (
                <>
                    <div className="row booking_info_section">
                        <div className="col-md-6">
                            <div className="booking_info">
                                <h5>Cab Category</h5>
                                <p>The booking will be for cab type SEDAN and we do not commit on providing the preferred cab model (Dzire, Etios or similar)</p>                                      </div>
                            <div className="booking_info">
                                <h5>Hilly Regions</h5>
                                <p>AC will be switched off in hilly areas</p>                                      </div>
                            <div className="booking_info">
                                <h5>Luggage Policy</h5>
                                <p>SEDAN has space for 2 Luggage Bags. In case the car happens to be CNG, the luggage space will be lesser. However depending on the number of passengers, luggage can be adjusted in seating area with driver consent.</p>
                            </div>
                            <div className="booking_info">
                                <h5>Driver Details</h5>
                                <p>Driver details will be shared up to 30 mins prior to departure. Incase the driver/cab that reaches you for pick up is different from what we have communicated, please don't board the cab and call us for assistance.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
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
                            <div className="booking_info">
                                <h5>Receipts</h5>
                                <p>You need to collect receipts from the driver for any extra charges paid directly to the driver during the trip. MMT is not liable to provide invoices for such amounts.</p>
                            </div>
                        </div>
                    </div>
                    
                </>
            )}

             </div> */}

           
            
        </>
    )
}









