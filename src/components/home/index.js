import React from 'react'

import AboutUs from './aboutUs'
import CarBanner from './carBanner'
import KeyFeatures from './keyFeatures'
import ServicesOffered from './servicesOffered'
import banner from '../../assets/car-rental.jpeg'
import ServicePageBanner from '../miscellaneous/servicePageBanner'


const Home = () => {
    return (
        <div>
            {/* <CarBanner /> */}
            <ServicePageBanner banner={banner} />
            <AboutUs />
            <KeyFeatures />
            <ServicesOffered />
        </div>
    )
}

export default Home
