import React, { useState } from 'react'
import '../UI-style/CarCards.css'
import { Link } from 'react-router-dom'
import carData from '../assets/CarData'
import { motion } from 'framer-motion'


const fadeInAnimations  ={
     initial : {
        opacity :0,
        y :100
     },
     animate : (index ) => ({
        opacity:1,
        y : 0,
        transition :{
            delay : 0.01 * index ,
        }
     })
}


export default function CarCards({ isVisible }) {


    const [sortState, setSortState] = useState("none");

    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: ((a, b) => a.price - b.price) },
        descending: { method: ((a, b) => b.price - a.price) }
    };


    return (
        <>
            <div className="car_sort">
                <label htmlFor="">Sort by Price : </label>
                <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
                    <option value="DEFAULT" disabled>Select</option>
                    <option value="ascending">Low to High</option>
                    <option value="descending">High to Low</option>
                </select>
            </div>

            <div className="cars_content" >
                {
                    carData.sort(sortMethods[sortState].method).map((car, index) => {
                        return (
                            <>
                                <motion.div
                                    variants={fadeInAnimations}
                                    initial='initial'
                                    whileInView='animate'
                                    viewport={{ once: 'true' }}
                                    custom={index}
                                    className="car_card"
                                    >

                                    <div className='backgroundEffect ' key={car.id}></div>
                                    <div className='car_img'>
                                        <img src={car.imgUrl} alt="" />
                                    </div>
                                    <div className="car_item-caontent">
                                        <h4 className="car_title">{car.carName}</h4>
                                        <div className="rate">
                                            <h6 className="rent_"><span></span></h6>
                                            <h6 className='rent_price '> <span> {car.price} /Day</span></h6>
                                        </div>

                                        <div className="car_item_info " >
                                            <span className='car_icon'><i className="ri-car-line"></i> {car.model}</span>
                                            <span className='car_icon'><i className="ri-settings-4-line"></i> {car.automatic}</span>
                                            <span className='car_icon'><i className="ri-timer-line"></i> {car.speed}</span>
                                        </div>
                                        <div className='car_button'>
                                            <button className="car_item-btn car_btn-rent">
                                                <Link to={`/cars/${car.carName}`}>Rent</Link>
                                            </button>
                                            <button className=" car_item-btn car_btn-detail">
                                                <Link to={`/cars/${car.carName}`}>Details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}


