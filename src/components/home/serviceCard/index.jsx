import React from 'react'

import './serviceCard.scss'

const ServiceCard = () => {
    return (
        <div className='service-card'>

            <img className='card-image' src={require('../../../assets/car_icon.png').default}/>
            <span className='card-text'>
                service
            </span>
        </div>
    )
}

export default ServiceCard
