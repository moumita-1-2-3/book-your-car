import React from 'react'
import '../UI-style/BlogList.css'
import { Link } from 'react-router-dom'
import blogData from '../assets/BlogData'


export default function BlogList() {
    return (
        <>
            <div className="blog_section">
                {
                    blogData.map((item) => (
                        <BlogItem item={item} key={item.id} />
                    ))
                }
            </div>          
        </>
    )
}


const BlogItem = ({ item }) => {
    const { imgUrl, title, author, date, description, time } = item
    return (
        <div className="">
            <div className="blog_item">
                <img src={imgUrl} alt="" />
                <div className="blog_info">
                    <Link to={`/blog/${title}`} className='blog_title'>{title}</Link>
                    <p className="blog_description">
                        <p>{description.length > 100 ? description.substr(0, 100) : description}</p>
                    </p>
                    <Link to={`/blog/${title}`} className='read_more'>Read More</Link>
                    <div className="blog_content ">
                        <span className='blog_author'>
                            <i className="ri-user-line"></i>{author}
                        </span>
                        <div className="d-flex  align-items-center gap-1">
                            <span className='d-flex align-items-center gap-1 section_description'>
                                <i className="ri-calendar-line"></i>{date}
                            </span>
                            <span className='time d-flex align-items-center gap-1 section_description '>
                                <i className="ri-time-line"></i>{time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}