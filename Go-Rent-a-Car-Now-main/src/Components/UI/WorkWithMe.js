import React from 'react'
import '../UI-style/WorkWithMe.css'
import { Container } from 'reactstrap'
import work_with_me from '../assets/img/wortk-with-me.png'
export default function WorkWithMe() {
    return (
        <>
            <div className='driver_work'>
                <Container>
                    <div className="work_with_me">
                        
                        <div className="work_with_img">
                            <img src={work_with_me} alt="" />
                        </div>
                        <div className="work_with_content">
                            <h2 className='section_title work_with_me-title'> Do You Want to Earn With Us? So Don't be later</h2>
                            <button className=" become_driver-btn">Become a Driver</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}
