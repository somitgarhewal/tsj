import React from 'react'

import './banner.scss'
import banner from '../../../assets/banner-01.jpeg'
import JourneyDetailsContainer from '../journeyDetailsContainer'
import ServicePageBanner from '../../miscellaneous/servicePageBanner'

const CarBanner = () => {
    return (
        // <div className='container-fluid banner ' style={{backgroundImage: `url(${banner})`}}>
        //     {/* <img src={banner} alt="" /> */}
        //     {/* <div className='text-container'>
        //         <div className='text'>
        //             <span>The Standard Journey</span>
        //         </div>
        //     </div> */}
        //     <JourneyDetailsContainer />
        // </div>
        <ServicePageBanner banner={banner} />
    )
}

export default CarBanner