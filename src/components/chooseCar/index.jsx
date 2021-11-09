import React from 'react'

import './chooseCar.scss'
import LeftContainer from './leftContainer'
import RightContainer from './rightContainer'

const ChooseCar = () => {
    return (
        <div className='container choose-car'>
            <div className='row'>
                <div className='col-md-3 left-contaner'>
                    <LeftContainer />
                </div>
                <div className='col right-continer'>
                    <RightContainer />
                </div>
            </div>
        </div>
    )
}

export default ChooseCar
