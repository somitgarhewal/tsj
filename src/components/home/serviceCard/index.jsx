import React from 'react'

import './serviceCard.scss'

const ServiceCard = ({text}) => {
    return (
        <div className='service-card'>
            <img className='card-image' src={require('../../../assets/car_icon.png').default}/>
            <span className='card-text'>
                {text}
            </span>
        </div>
    )
}

export default ServiceCard
