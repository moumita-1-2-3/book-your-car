import React from 'react'
import '../UI-style/Payment.css'
import { Link } from 'react-router-dom'
import card1 from '../assets/card-img/card1.png'
import card2 from '../assets/card-img/card2.png'
import card3 from '../assets/card-img/card3.jpeg'
import card4 from '../assets/card-img/card4.png'





export default function Paymant() {
  return (
    <>
      <div >
        <div className="congratulate">
          <i class="ri-roadster-line"></i>
          <div>
            <h4>Congratulations!</h4>
            <p>You are about to grab the best price on your cab, with the Best Price Guaranteed else you get 5X the difference.</p>
          </div>
        </div>
        <div className="cab_details">
          <h4>Driver & Cab details</h4>
          <p>Cab and driver details will be shared up to 30 mins prior to departure.</p>
        </div>
        <div className="booking_login_from">
          <i class="ri-wallet-fill"></i>
          <div>
            <h4><Link>Sign Up</Link> Or <Link>Login Now</Link></h4>
            <p>View your traveller inforation & unlock deals!</p>
          </div>
        </div>
        <div className="payment">

          <div className='payment_cancal'>
            <i class="ri-checkbox-circle-fill"></i> Free Cancellation before 24 Dec 2023, 09:00 AM IST
          </div>
          <div className="payment_section">
            <h3>Payment Method</h3>
            <div className="row payment_content">
              <ul class="choices">
                <li>
                  <label>
                    <input type="radio" name="question0" value="Cheque Payment" /><span>Cheque Payment</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="question0" value="Direct Bank Transfer" /><span>Direct Bank Transfer</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="question0" value="Master Card" /><span>Master Card</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="question0" value="Paypal" /><span>Paypal</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className='payment_card '>
              <img src={card1} alt=" " />
              <img src={card2} alt=" " />
              <img src={card3} alt="" />
              <img src={card4} alt=" " />
            </div>
          </div>
        </div>

        <div className="booking_from_button">
          <button type="submit">Continue to Payment</button>
        </div>
      </div>
    </>
  )
}
