import React from 'react'
import CarComponent from './carComponent'

import { carsData } from '../../utilsData/carsData'
import './rightContainer.scss'

const RightContainer = () => {
    return (
        <div className='car-details-container'>
            {carsData.map(item => <CarComponent data={item}/>)}
            {/* <CarComponent />
            <CarComponent />
            <CarComponent /> */}
        </div>
    )
}

export default RightContainer
