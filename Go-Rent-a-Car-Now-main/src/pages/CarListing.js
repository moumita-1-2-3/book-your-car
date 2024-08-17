import React from 'react'
import '../Pages-Style/Carlisting.css'
import CarCards from '../Components/UI/CarCards'
import { Container } from 'reactstrap'
import Helmet from '../Components/helmet/Helmet'
import { motion } from 'framer-motion'

export default function CarListing() {
  return (
    <>
      <Helmet>
        <motion.div>
          <div className="car_header_section">
            <h1>| Car Listing |</h1>
          </div>
          <Container>
            <CarCards></CarCards>
          </Container>

        </motion.div>

      </Helmet>
    </>
  )
}
