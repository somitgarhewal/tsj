import React from 'react'
import CarComponent from './carComponent'

import './rightContainer.scss'

const RightContainer = () => {
    return (
        <div className='car-details-container'>
            <CarComponent />
            <CarComponent />
            <CarComponent />
        </div>
    )
}

export default RightContainer
