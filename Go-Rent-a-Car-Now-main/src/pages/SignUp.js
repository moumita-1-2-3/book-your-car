import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, FormGroup } from 'reactstrap'
import '../Pages-Style/SignUp.css'

export default function LoginRegister() {


  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };

  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div>
      {isVisible && (
        <>
          <div className="sign-in_section">
            <div className="sign_in">
            <Link className="close" href=" " onClick={handleClose}><i class="ri-arrow-left-line"></i> Back to Home</Link>
              <div className='row'>
                <div className="col-md-7 sign_from ">
                  {showLogin ? (
                    <>

                      <Form className='sign_in_form' onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className='sign_option'>
                          <button className='sign_option_facebook'><Link to=''><i class="ri-facebook-fill"></i>with Facebook</Link></button>
                          <button className='sign_option_google'><Link to=''><i class="ri-google-fill"></i>with Google+</Link></button>
                        </div>

                        <h4><span>or</span></h4>
                        <FormGroup className='sign_in_form_group '>
                          <i class="ri-at-line"></i>
                          <input type="email" placeholder='Email Address' required />
                        </FormGroup>
                        <FormGroup className='sign_in_form_group '>
                          <i class="ri-key-2-fill"></i>
                          <input type="password" placeholder='Your Name' required />
                        </FormGroup>
                        <FormGroup className='check_group '>
                          <div> <input type="checkbox" required />  Remember Me</div>
                        <Link to=' '>Forgot Password?</Link>
                        </FormGroup>
                        <FormGroup className='sign_in_form_group_button'>
                          <button className=" " type="submit" onClick={handleClose}>Login</button>
                        </FormGroup>
                      </Form>

                    </>
                  ) : (
                    <>
                      <Form className='sign_in_form' onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <div className='sign_option'>
                          <button className='sign_option_facebook'><Link to=''><i class="ri-facebook-fill"></i>with Facebook</Link></button>
                          <button className='sign_option_google'><Link to=''><i class="ri-google-fill"></i>with Google+</Link></button>
                        </div>

                        <h4><span>or</span></h4>
                        <FormGroup className='sign_in_form_group '>
                          <i class="ri-user-fill"></i>
                          <input type="text" placeholder='Your Name' required />
                        </FormGroup>
                        <FormGroup className='sign_in_form_group '>
                          <i class="ri-at-line"></i>
                          <input type="email" placeholder='Email Address' required />
                        </FormGroup>
                        <FormGroup className='sign_in_form_group '>
                          <i class="ri-phone-fill"></i>
                          <input type="number" placeholder='Mobile Number' required />
                        </FormGroup>
                        <FormGroup className='sign_in_form_group '>
                          <i class="ri-key-2-fill"></i>
                          <input type="password" placeholder='Your Name' required />
                        </FormGroup>
                        <FormGroup className='check_group '>
                          <input type="checkbox" required /> Yes, Please keep me updated on Rentrip news, events & offers.
                        </FormGroup>
                        <FormGroup className='sign_in_form_group_button'>
                          <button className=" " type="submit" >Register</button>
                        </FormGroup>
                      </Form>
                    </>
                  )}
                </div>
                <div className="col-md-5 sign_in_ad ">

                  <div className="ad_logo">
                    <h1>
                      <Link to=' ' className='ad_logo_content'> <i className="ri-taxi-line"></i>
                        <span>Rent Car <br />Service</span>
                      </Link>
                    </h1>
                  </div>
                  
                    <button className="play_store"><Link to=' '>Download App<i class="ri-google-play-fill"></i></Link></button>
                  

                  <div className='ad_content '>
                    <h4>SIGNUP TODAY <br /> AND YOU'LL BE ABLE TO</h4>
                    <ul>
                      <li><i class="ri-check-fill"></i>Online Trip Status</li>
                      <li><i class="ri-check-fill"></i>See Ready Hot Deals </li>
                      <li><i class="ri-check-fill"></i>Sign up to receive exclusive news and private offers</li>
                      <li><i class="ri-check-fill"></i>Quick Book Trips </li>
                    </ul>
                  </div>

                  <button onClick={handleToggleForm} className='login_register'>
                    {showLogin ? 'Register' : 'Login'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}



