import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import CarDetails from '../pages/CarDetails'
import CarListing from '../pages/CarListing'
import Contact from '../pages/Contact'
import { AnimatePresence } from 'framer-motion'


export default function Routers() {
  return (
    <>
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='*' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogDetail />} />
        <Route path='/cars' element={<CarListing />} />
        <Route path='/cars/:slug' element={<CarDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </>

  )
}
