import React from 'react'
import JourneyDetailsContainer from '../../home/journeyDetailsContainer'

import './servicePageBanner.scss'

const ServicePageBanner = ({ banner }) => {
    return (
        <div
            className='container-fluid banner'
            style={{
                backgroundImage: `url(${banner})`
            }}>
            <div className='text-container'>
                <div className='text'>
                    <JourneyDetailsContainer />
                </div>
            </div>
        </div>
    )
}

export default ServicePageBanner
