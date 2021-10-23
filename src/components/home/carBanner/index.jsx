import React from 'react'

import './banner.scss'
import banner from '../../../assets/banner-01.jpeg'

const CarBanner = () => {
    return (
        <div className='container-fluid p-0 banner'>
            <img src={banner} alt="" />
            <div className='text-container'>
                <div className='text'>
                    <span>The Standard Journey</span>
                </div>
            </div>
        </div>
    )
}

export default CarBanner