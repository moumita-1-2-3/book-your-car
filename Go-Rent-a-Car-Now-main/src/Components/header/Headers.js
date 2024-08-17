import React, { useRef, useState } from 'react'
import './Header.css'
import { Container } from 'reactstrap'
import { Link, NavLink } from 'react-router-dom'
import SignUp from '../../pages/SignUp'

export default function Headers() {

   const menuRef =useRef(null)   

   const togglesMenu =()=> menuRef.current.classList.toggle('menu_active')

  const navLink = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '/cars',
      display: 'Cars'
    },
    {
      path: '/blog',
      display: 'Blog'
    },
    {
      path: '/contact',
      display: 'Contact'
    },
  ]

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };


  return (
    <>


      <header className='header  '>
        <Container className="header_top">
          <div className='header_top_left'>
            <span>Need Help?</span>
            <span className="header_top_help">
              <i className="phone"><i className="ri-phone-fill"></i></i>+1-202-555-0149
            </span>
          </div>
          <div className='header_top_right '>
            <Link  className='login' onClick={handleClick}><i className="ri-login-circle-line"></i> Login / <i className="ri-user-add-line"></i>  Register</Link>
          </div>
        </Container>
      </header>

      {isShown && <SignUp/>}

      <header className="header_middle">

        <Container className='header_middle_top'>
          <div className="logo">
            <h1>
              <Link to=' ' className='logo_content'> <i className="ri-taxi-line"></i>
            <span>Rent Car <br />Service</span>
            </Link>
            </h1>
          </div>

          <div className="header_location">
            <span><i className="ri-earth-line"></i></span>
            <div className="header_location_content">
              <h4>Maharashtra</h4>
              <h6>Nagpur City, Maharashtra</h6>
            </div>
          </div>

          <div className="header_location">
            <span><i className="ri-time-line"></i></span>
            <div className="header_location_content">
              <h4>Sunday to Friday</h4>
              <h6>9am - 9pm</h6>
            </div>
          </div>
          <div className='header_call_btn'>
            <button className='header_btn '>
              <Link to='/contact'>
                <i className="ri-phone-fill"></i> Requset a Call
              </Link>
            </button>
          </div>
        </Container>

        {/* =============== navabr ============= */}

        <div className="main_navbar ">
          <Container>
            <div className="navigation_warpper ">
              <span className="moblie_menu">
                <i className="ri-menu-line" onClick={togglesMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={togglesMenu}>
                <div className="menu">
                  {
                    navLink.map((item, index) => (
                      <NavLink to={item.path} className={navclass=> navclass.isActive ? 'nav_active nav_item' : 'nav_item'} key={index}>{item.display}</NavLink>
                    ))
                  }
                </div>
              </div>

              <div className="nav_right">
                <div className="search_box">
                  <input type="text" placeholder='Search'/>
                  <span><i className="ri-search-line"></i></span>
                </div>
              </div>
            </div>
          </Container>
        </div>

      </header>




      

    </>
  )
}
