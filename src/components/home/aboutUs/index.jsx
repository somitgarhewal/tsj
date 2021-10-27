import React from 'react'

import './aboutUs.scss'
import { aboutUsData } from '../../../utilsData/aboutUsData'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <span className='about-us-heading'>About The Standard Journey</span>
            <span>
                One of the finest people mobility companies in India with separate divisions serving Corporate executive car rental and employee transportation, serving travel agents, tour operators and Event management companies for their ground transportation needs. We are a group of people who are well-versed in the fun and rigors of traveling. Our travel agency came together to help other people plan and book their dream vacations. We have over 40 years of travel planning between us!
            </span>
            <span>
                Thanks to all our loyal clients and team members who have stood by us over the years, the brand has been built on operational excellence and repeated customers
            </span>
            {aboutUsData.map(item => <>
                <span className='title'>{item.title}</span>
                <span className='desc'>{item.desc}</span>
            </>)}
        </div>
    )
}

export default AboutUs
