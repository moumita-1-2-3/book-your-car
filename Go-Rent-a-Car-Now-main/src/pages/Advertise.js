import React, { useEffect, useState } from 'react'
import '../Pages-Style/Advertise.css'
import { Link } from 'react-router-dom'
import adv from '../Components/assets/img/advertise.png'

export default function Advertise() {

  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      {isVisible && (
        <>
          {showDiv && (
            <div className="advertise_section">
              <div className="popup">
                <Link className="close" href=" " onClick={handleClose}>&times;</Link>
                <div className="content">
                  <header className='advertice_heading'>
                    <div >
                      <h1 >New <span className="underlined underline-clip">Year</span> Special <span className="underlined underline-mask">Offer</span></h1>
                      <h2>Car rental available for Out-station.</h2>
                    </div>
                    <img src={adv} alt="" />
                  </header>
                  <div className="advertise_content">
                    <h4>.Digha   .Mandarmani .Purulia .Siliguri .jharkhand .bihar <br />.any out station rental </h4>
                    <div>
                      <div className="advertise_rate">
                        <h3>Book car for  out  station Starting <br />from </h3>
                        <span >15*\Km</span>
                      </div>
                    </div>
                  </div>
                  <p> excluding *tolls, *driver night charges, *driver food and lodging,*Rate will depending on car type basis</p>
                  <p className='advertise_footer'>Make this New Year's journey unforgettable with [Your Car Rental Company Name]! Wishing you a fantastic and prosperous New Year!</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
          
       
    </div>
  )
}
