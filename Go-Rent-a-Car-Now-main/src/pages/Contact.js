import React from 'react'
import '../Pages-Style/Contact.css'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FormGroup } from 'reactstrap'

export default function NotFound() {


  return (
    <>
      <div className="contact_head">
        <Container>
          <h1>GET IN TOUCH WITH US</h1>
        </Container>
      </div>
      <Container>
        <div className="contact_part">
          <div className='contact_part_section'>
            <div className="contact_icon">
              <i className="ri-map-pin-5-fill"></i>
            </div>
            <p>Arya Samaj Bhavan Katra Abdul <br /> Gani Fatehpur, Uttar Pradesh
              India - 212601</p>
          </div>
          <div>
            <div className='contact_part_section'>
              <div className="contact_icon">
                <i className="ri-mail-fill"></i>
              </div>
              <div className="contact_link">
                <Link to=' '>Sales team</Link><br />
                <Link to=' '>Support team</Link>
              </div>

            </div>
          </div>
          <div>
            <div className='contact_part_section'>
              <div className="contact_icon">
                <i className="ri-phone-fill"></i>
              </div>
              <p>+91 88007 79391 <br /> Calling hours: (09:00 am - 06:00 pm)</p>
            </div>
          </div>
        </div>

        <div className="row from_map_loaction">
          <div className="col-md-6">
            <form action="" className=" contact_from">
              <h1>Contact From</h1>
              <div className="row">
                <FormGroup className='contact_group col-md-6'>
                  <label htmlFor="fname">First Name</label>
                  <input type="text" placeholder='From address' />
                </FormGroup>
                <FormGroup className='contact_group col-md-6'>
                  <label htmlFor="number">Mobile Number</label>
                  <input type="number" placeholder='Mobile Number' />
                </FormGroup>
              </div>

              <FormGroup className='contact_group'>
                <label htmlFor='number' >Email</label>
                <input type="email" placeholder='Enter your email address'/>
              </FormGroup>

              <FormGroup className='contact_group'>
                <label htmlFor="number">Subject</label>
                <input type="text" placeholder='Email' />
              </FormGroup>
              <FormGroup className='contact_group'>
                <label htmlFor="number">Message</label>
                <textarea name="" id="" cols="30" rows="3" type="text" placeholder='Enter your message'></textarea>
              </FormGroup>
              <FormGroup className='contact_group'>
              <div className="g-recaptcha" data-sitekey="6Ldbdg0TAAAAAI7KAf72Q6uagbWzWecTeBWmrCpJ"></div>
              </FormGroup>
              <button> Send Massage</button>
            </form>

           
          </div>

          <div className="col-md-6 ">
            <iframe className='map'
              name="testiframe"
              title="Advertisement"
              frameBorder = '0'
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=mahal,%20nagpur,%20india+(car%20rent%20sarvise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.maps.ie/population/">Find Population on Map</a>
            </iframe>
          </div>
        </div>
      </Container>

    </>
  )
}
