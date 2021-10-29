import React from 'react'

import ServicePageBanner from '../miscellaneous/servicePageBanner'
import ServicePageText from '../miscellaneous/servicePageText'
import CarRental from '../../assets/car-rental.jpeg'

const TaxiServices = () => {
    const heading = 'Taxi Services'
    const description = [
        `The Standard Journey plan presents a persuasive and innovative system for organizing and running an alternative taxi service.An entrepreneur with a new improvement on a traditional business will find this plan's clear logic instructive. Note the comprehensive overview of industry practices and their shortcomings.`,
            'The Standard Journey will provide complete taxi cab services using the latest equipment and technology to facilitate the travel of individuals. The company’s products and services show that we are an innovative, forward thinking company that recognizes the need to move with ever-changing customer needs. At TSJ, our philosophy is one that emphasizes service, and a realization that effective communication is a key component in our business. The company also realizes that, in a competitive environment, flexibility and professionalism maintain that leading edge.',
            'The company has drivers and employees that are helpful, courteous, and fully trained on the use of the computer dispatch system. As an added safety measure for both drivers and passengers, TSJ cabs are fitted with Global Positioning Systems (GPS), which enable the cabs to be tracked or located in an emergency. All TSJ cab will be clean, well maintained, and inspected regularly for safety and comfort.',
            'Customer service is a priority at Taxi. The customer cares most about the promptness of the taxi that he or she is riding in. One way to ensure that customers would be served in a much better fashion would be to implement a The Standard Journey taxi dispatch system. The Standard Journey is essentially a first come/first served system of dispatching that eliminates much of the delay that occurs during ordinary dispatching. There are no real drawbacks to the system except that it would take a short while for drivers to get used to such a system. It is the quickest and easiest way to operate a taxi company. The current system, which relies on the closest cab to an order bidding on the order, means that orders are constantly being held up while the bidding takes place. It also means that orders are much more selective. If the drivers were switched over to a different system, in the long run, they would actually make more money and the entire system would speed up immensely.'
    ]

return (
    <div>
        <ServicePageBanner banner={CarRental} />
        <ServicePageText heading={heading} description={description} />
    </div>
)
}

export default TaxiServices
