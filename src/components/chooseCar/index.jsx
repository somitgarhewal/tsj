import React from 'react'

import './chooseCar.scss'
import LeftContainer from './leftContainer'
import RightContainer from './rightContainer'

const ChooseCar = () => {
    return (
        <div className='container-fluid choose-car'>
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

export default ChooseCar
