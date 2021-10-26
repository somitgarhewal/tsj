import React from 'react'

import AboutUs from './aboutUs'
import CarBanner from './carBanner'
import JourneyDetailsContainer from './journeyDetailsContainer'
import KeyFeatures from './keyFeatures'
import ServicesOffered from './servicesOffered'
// import SubscribeContainer from './subscribeContainer'

const Home = () => {
    return (
        <div>
            {/* <SubscribeContainer /> */}
            <CarBanner />
            <JourneyDetailsContainer />
            <AboutUs />
            <KeyFeatures />
            <ServicesOffered />
        </div>
    )
}

export default Home
