import React from 'react'
import ServiceCard from '../serviceCard'

import './servicesOffered.scss'

const ServicesOffered = () => {
    return (
        <div className='services-offered-container'>
            <div className='title'>
                What We Offer
            </div>
            <ServiceCard />
        </div>
    )
}

export default ServicesOffered
