import React from 'react'
import Headers from '../header/Headers'
import Footer from '../footer/Footer'
import Routers from '../../routes/Routers'
import Carmoving from '../animation-part/Carmoving'
import ContactButton from '../UI/ContactButton'
export default function Layout() {
  return (
    <>
     <Headers></Headers>
     <ContactButton></ContactButton>
     <Carmoving></Carmoving>
     <div>
        <Routers></Routers>
     </div>
     <Footer></Footer>
    </>
  )
}
