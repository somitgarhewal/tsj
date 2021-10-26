import React from 'react'
import { useHistory } from 'react-router'
import ServiceCard from '../serviceCard'

import './servicesOffered.scss'

const ServicesOffered = () => {

    const history = useHistory()
    return (
        <div className='services-offered-container'>
            <div className='title'>
                What We Offer
            </div>
            <div className='service-card-container row'>
                <div className='service-card-block col-md-4' onClick={() => history.push('/car_rental')}>
                    <ServiceCard text='Car Rental'/>
                </div>
                <div className='service-card-block col-md-4' onClick={() => history.push('/tour_packages')}>
                    <ServiceCard text='Tour & travel packages'/>
                </div>
                <div className='service-card-block col-md-4' onClick={() => history.push('/taxi_services')}>
                    <ServiceCard text='Taxi services'/>
                </div>
            </div>
        </div>
    )
}

export default ServicesOffered
