import React from 'react'

import AboutUs from './aboutUs'
import CarBanner from './carBanner'
import JourneyDetailsContainer from './journeyDetailsContainer'
// import SubscribeContainer from './subscribeContainer'

const Home = () => {
    return (
        <div>
            {/* <SubscribeContainer /> */}
            <CarBanner />
            <JourneyDetailsContainer />
            <AboutUs />
        </div>
    )
}

export default Home
