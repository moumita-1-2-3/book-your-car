import React from 'react'

const Helmet = (props) => {
  document.title = 'Rent Car Service' + props.title
  return (
    <div className=' w-100'>{props.children}</div>
  )
}

export default Helmet

// import React from 'react'
// import HeroSilder from '../UI/HeroSilder'
// import { Container } from 'reactstrap'
// import FindCarFrom from '../UI/FindCarFrom'
// import './Helmet.css'
// import About from '../../pages/About'
// import ServicesList from '../UI/ServicesList'
// import CarCards from '../UI/CarCards'
// import WorkWithMe from '../UI/WorkWithMe'
// import Reviewscard from '../UI/Reviewscard'
// import BlogList from '../UI/BlogList'


// export default function Helmet(props) {
//   document.title ='rent Car Sarvice -'+ props.title

//   return (


//   <>
//        <div className='w-100'>

//         <section className="p-0 hero_slider_section">
//           <HeroSilder></HeroSilder>

//           <Container >

//             <div className="hero_form ">
//               <div className="from_row">
//                 <div className="find_car_left">
//                   <h2>Find your best car here</h2>
//                 </div>
//                 <Container>
//                   <FindCarFrom></FindCarFrom>
//                 </Container>
//               </div>
//             </div>
//           </Container>
//         </section>

//         <About></About>

//         <CarCards></CarCards>
//         <WorkWithMe></WorkWithMe>
//         <ServicesList></ServicesList>
//         <section>
//           <Reviewscard></Reviewscard>
//         </section>
//         <section>
//           <Container>

//             <BlogList></BlogList>
//           </Container>
//         </section>
//       </div> 
//     </>
//   )
// }

