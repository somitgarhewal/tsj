import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import './tourPackages.scss'
import CarRental from '../../assets/screen2.jpg'
import ServicePageText from '../miscellaneous/servicePageText'

const TourPackages = () => {

    const heading = 'Tour & Travel Packages'
    const description = [
        'we provide different tour & travel packages Accomodation with 2 time meal Breakfast and Dinner, Transportation with pick and drop as well sightseeing services. All types of taxes included.',
        'dksjnfknsf ksjdnfnsd  sdkfjnsdfn.fdskf lkhkl'
    ]

    return (
        <div>
            <ServicePageBanner banner={CarRental} />
            <ServicePageText heading={heading} description={description} />
        </div>
    )
}


export default TourPackages
