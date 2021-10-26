import React from 'react'

import './servicePageText.scss'

const ServicePageText = ({heading, description}) => {
    return (
        <div className='service-page-text'>
            <div className='service-page-heading'>{heading}</div>
            <div className='service-page-description'>{description.map(item => <p className='description-para'>
                {item}
            </p>)}</div>
            
        </div>
    )
}

export default ServicePageText
