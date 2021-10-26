import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import ServicePageText from '../miscellaneous/servicePageText'
import CarRental from '../../assets/car-rental.jpeg'

const TaxiServices = () => {
    const heading = 'Taxi Services'
    const description = [
        'we provide Taxi Servicesxcvcxvxvklh lldksjlfhksjnfk kjsdnjlksnfmsndfmjkfds djkfnsdkjnj, Accomodation with 2 time meal Breakfast and Dinner, Transportation with pick and drop as well sightseeing services. All types of taxes included.',
        'dksjnfknsf ksjdnfnsd  sdkfjnsdfn.fdskf lkhkl'
    ]

    return (
        <div>
            <ServicePageBanner banner={CarRental} />
            <ServicePageText heading={heading} description={description} />
        </div>
    )
}

export default TaxiServices
