import React from 'react'

import './leftContainer.scss'

const LeftContainer = () => {
    const kms = '230 km'
    const hrs = '1.5 hrs'
    return (
        <div className='journey-details'>
            <div className='entity-row'>
                <div className=''>Kms</div>
                <div className=''>{kms}</div>
            </div>
            <div className='entity-row'>
                <div className=''>Hrs</div>
                <div className=''>{hrs}</div>
            </div>
            
        </div>
    )
}

export default LeftContainer
