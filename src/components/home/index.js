import React from 'react'

import AboutUs from './aboutUs'
import CarBanner from './carBanner'
import KeyFeatures from './keyFeatures'
import ServicesOffered from './servicesOffered'
import banner from '../../assets/car-rental.jpeg'
import ServicePageBanner from '../miscellaneous/servicePageBanner'
import Carousel from './carousel'


const Home = () => {
    return (
        <div>
            {/* <CarBanner /> */}
            <ServicePageBanner banner={banner} />
            <AboutUs />
            <KeyFeatures />
            <ServicesOffered />
            <Carousel />
        </div>
    )
}

export default Home
