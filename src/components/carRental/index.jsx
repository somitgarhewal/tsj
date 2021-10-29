import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import ServicePageText from '../miscellaneous/servicePageText'
import CarRentalImage from '../../assets/screen1.jpg'

const CarRental = () => {
    const heading = 'Car Rental'
    const description = [
        `One of the fastest growing city of India has seen exponential growth. With this rise of Indore, the cost of land and parking have shot up making difficult for people to buy additional cars. Traffic in the world's growing city have gone worse. This creates the right opportunity for Cars to efficiently match car rentals with people of India who need them.  Self-Drive Car Rentals in India will bring in a paradigm shift in the urban mobility arena of India. People in India will now be able to access self-drive car rentals. We are India's premier self-drive car rental service offering the best quality of cars at affordable prices. `,
        `There are many types of equipment, locations, and services that you can offer rental service, but choosing the right own will make all the difference in your success or failure as a company. One of the simple logic here is to offer rental services for things that people need once in a while but are costly to purchase. Our Car Rental services are present in all over India. We believe that by offering the best user experience we establish a permanent connect with our customers. Our business TSJ is driven by the fundamental need of ensuring safe and secure transport for our clients. Year after year, our clients have shown faith in us owing to our punctual service, friendly support staff, trained chauffeurs, and well maintained fleet of cars.`,
        `The team is prompt in their replies to your queries, which has earned a reputation as one of the best and most efficient tour and travel operators in India by the clients and overseas partners.`
    ]

    return (
        <div>
            <ServicePageBanner banner={CarRentalImage} />
            <ServicePageText heading={heading} description={description} />
        </div>
    )
}

export default CarRental
