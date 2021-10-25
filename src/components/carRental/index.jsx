import React from 'react'

import './carRental.scss'
import LeftContainer from './leftContainer'
import RightContainer from './rightContainer'

const CarRental = () => {
    return (
        <div className='container-fluid car-rental'>
            <div className='row'>
                <div className='col-md-2 left-contaner'>
                    <LeftContainer />
                </div>
                <div className='col right-continerk'>
                    <RightContainer />
                </div>
            </div>
        </div>
    )
}

export default CarRental
