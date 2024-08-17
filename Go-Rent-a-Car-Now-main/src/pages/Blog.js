import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import Helmet from '../Components/helmet/Helmet';
import '../Pages-Style/Blog.css'
import BlogList from '../Components/UI/BlogList'
import { motion } from 'framer-motion'

export default function Blog() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Helmet>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration : 3}}>
          <div className="blog_header_section">
            <h1>| Blog |</h1>
          </div>
          <Container>
            <BlogList></BlogList>
            <BlogList></BlogList>
          </Container>
        </motion.div>

      </Helmet>
    </>
  )
}
