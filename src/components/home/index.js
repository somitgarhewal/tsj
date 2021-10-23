import React from 'react'

import CarBanner from './carBanner'
import JourneyDetailsContainer from './journeyDetailsContainer'
// import SubscribeContainer from './subscribeContainer'

const Home = () => {
    return (
        <div>
            {/* <SubscribeContainer /> */}
            <CarBanner />
            <JourneyDetailsContainer />
        </div>
    )
}

export default Home
