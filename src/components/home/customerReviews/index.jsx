import React from 'react'

import Carousel from '../carousel'
import './customerReviews.scss'

const customerReviews = ({ noOfItems }) => {
    return (
        <div className='customer-reviews-container'>
            <span className='title dark-blue-text'>Valuable Customer Reviews </span>
            <Carousel noOfItems={noOfItems} />
        </div>
    )
}

export default customerReviews
