import React from 'react'
import '../UI-style/ContactButton.css'
import {Link} from 'react-router-dom'
export default function ContactButton() {
  return (
    <>




      <div className="contact_button">
        <Link href=" " className='contact_float'><i className="ri-whatsapp-line"></i></Link>

        <Link href=" " className='contact_float_call'><i className="ri-phone-fill"></i></Link>       

      </div>
      
    </>


  )
}
