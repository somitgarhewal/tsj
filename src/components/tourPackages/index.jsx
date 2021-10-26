import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import './tourPackages.scss'
import CarRental from '../../assets/car-rental.jpeg'

const TourPackages = () => {
    return (
        <div>
            <ServicePageBanner banner={CarRental} />
        </div>
    )
}


export default TourPackages
