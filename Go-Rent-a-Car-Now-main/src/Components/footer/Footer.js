import React from 'react'
import './Footer.css'
import { Container, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default function Footer() {

  const QuickLinks = [
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '#',
      display: 'Privacy Policy'
    },
    {
      path: '/cars',
      display: 'Car Listing'
    },
    {
      path: '/contact',
      display: 'Contact'
    },


  ]
 
  const date = new Date()
  const year = date.getFullYear()
  
  return (
    <>
      <footer className="footer">
        <Container className='footer_contect'>
          <div className="footer_logo_discription">
            <h1>
              <Link to=' ' className=' footer_logo'> <i className="ri-taxi-line"></i>
                <span>Rent Car <br />Service</span>
              </Link>
            </h1>
            <p className="footer_logo_content">
              Zoomcar is the leading marketplace for car sharing in emerging markets,with over 20,000 cars on its technology-driven platform across India, Indonesia, and Egypt. Zoomcar empowers host entrepreneurs to safely and easily share their cars to earn additional passive income. 
            </p>
          </div>


          <div className='md-4'>
            <h5 className="footer_link_title">Quick Links</h5>
            <ListGroup>
              {
                QuickLinks.map((item, index) => (
                  <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </div>

          <div className='md-4'>
            <h5 className="footer_link_title_head_office">Head Office</h5>
            <p className="office_info ">123 , manish nagar, Nagpur, </p>
            <p className="office_info">phone: +09847394827 </p>
            <p className="office_info">Email: sandesh27deshmukh@gmail.com </p>
            <p className="office_info">office Time: 9am - 10pm </p>
          </div>


          <div className='md-4'>
            <h5 className="footer_link_title">Newslatter</h5>
            <p className="section_discription">Subcible ou newsletter</p>
            <div className="newletter">
            <input type="text" placeholder='Email' />
            <span><i className="ri-send-plane-fill"></i></span>
            </div>
          </div>

         
        </Container>
        <Container>
        <div className="footer_bottom">
            <p >
            <i className="ri-copyleft-line"></i>Copyright {year} , Developed by Sandesh S. Deshmukh. All right reserved
            </p>
          </div>
          </Container>
      </footer>
    </>
  )
}
