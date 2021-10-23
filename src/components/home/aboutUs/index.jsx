import React from 'react'

import './aboutUs.scss'
import {aboutUsData} from '../../../utilsData/aboutUsData'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <span className='about-us-heading'>About Us</span>
            {aboutUsData.map(item => <>
                <span className='title'>{item.title}</span>
                <span className='desc'>{item.desc}</span>
            </>)}
        </div>
    )
}

export default AboutUs
