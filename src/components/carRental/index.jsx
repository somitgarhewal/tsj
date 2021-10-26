import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import ServicePageText from '../miscellaneous/servicePageText'
import CarRentalImage from '../../assets/car-rental.jpeg'

const CarRental = () => {
    const heading = 'Car Rental'
    const description = [
        'we provide Car Rental Servicesxcvcxvxvklh lldksjlfhksjnfk kjsdnjlksnfmsndfmjkfds djkfnsdkjnj, Accomodation with 2 time meal Breakfast and Dinner, Transportation with pick and drop as well sightseeing services. All types of taxes included.',
        'dksjnfknsf ksjdnfnsd  sdkfjnsdfn.fdskf lkhkl'
    ]

    return (
        <div>
            <ServicePageBanner banner={CarRentalImage} />
            <ServicePageText heading={heading} description={description} />
        </div>
    )
}

export default CarRental
