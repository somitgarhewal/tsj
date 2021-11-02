import React, { useState, useEffect } from 'react'

import AboutUs from './aboutUs'
import CarBanner from './carBanner'
import KeyFeatures from './keyFeatures'
import ServicesOffered from './servicesOffered'
import banner from '../../assets/car-rental.jpeg'
import ServicePageBanner from '../miscellaneous/servicePageBanner'
import Carousel from './carousel'
import CustomerReviews from './customerReviews'


const Home = () => {
    const [isMweb, setIsMweb] = useState(false)
    const [noOfItems, setNoOfItems] = useState('desktop')

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {

        if (window.screen.width < 541) {
            setNoOfItems(1);
            setIsMweb(true);
        } else if (window.screen.width < 1025) {
            setNoOfItems(3);
            setIsMweb(false);
        } else {
            setNoOfItems(4)
            setIsMweb(false);
        }
    };
    return (
        <div>
            {/* <CarBanner /> */}
            <ServicePageBanner banner={banner} />
            <AboutUs />
            <KeyFeatures isMweb={isMweb} />
            <ServicesOffered />
            {/* <Carousel noOfItems={noOfItems} /> */}
            <CustomerReviews noOfItems={noOfItems} />
        </div>
    )
}

export default Home
