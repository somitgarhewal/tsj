import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import './tourPackages.scss'
import CarRental from '../../assets/screen2.jpg'
import ServicePageText from '../miscellaneous/servicePageText'

const TourPackages = () => {

    const heading = 'Tour & Travel Packages'
    const description = [
        `The Standard Journey, with a strong presence in inbound travel trade and corporate segment, today has excelled its branches over India. The company with its professionally managed travel engine specializes mainly in organizing Adventure, Cultural, Religious, hill station & wildlife tours in India through a sprawling network.`, 
        `It offers 24 X 7 hours services that include travel planning, itinerary design, hotel bookings, ticket reservations and transport facilities. It also provides holiday packages, customized as per client’s need and budget. The Standard Journey offers Special Interest Tours for travelers who want to experience something based on their special interest. These are tours that are different from the usual touristy stuff & focus on a particular activity for which a particular region or place is famous. From the joy of tea tasting to taking a tribal tour of Central India, Gujarat & Northeast India, you can plan a tour based on the specific interest you have in mind. Our expertly created Special Interest Tours also include photography, angling & fishing, wine tasting, snake, spice plantation, butterfly & flower tours.`,
        `With a rich and diverse history and culture, India is a perfect destination for heritage tours. There are a plethora of heritage sites in India including one of the Seven Wonders of the World, Taj Mahal that people come to witness from all over the world. With our best heritage tour packages, explore the top historical heritage sites and cultural heritage in India to learn more about the country. We offer the best of our services in the heritage tours by arranging expert tour guides, transportation, and accommodations and ensuring a memorable experience.`
    ]

    return (
        <div>
            <ServicePageBanner banner={CarRental} />
            <ServicePageText heading={heading} description={description} />
        </div>
    )
}


export default TourPackages
