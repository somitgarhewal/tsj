import React, { useState, useEffect } from 'react'

import './carComponent.scss'

const CarComponent = ({ data }) => {

    const [contentType, setContentType] = useState('desktop')

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        if (window.screen.width < 481) {
            setContentType('mobile')
        } else {
            setContentType('desktop')
        }
    };

    const mobContent = <div>
        <div className="component-car-item">
            <div className="info">
                <div className="desc">
                    <div>
                        <h3>{data.name}</h3>
                    </div>
                    <img src={data.image} alt="" />
                    <div className="card-bottom-content">

                        <div className='car-details'>
                            <div className="">
                                {data.seater} Seater
                            </div>
                            <div className="">
                                {data.fuel_type}
                            </div>
                        </div>
                        <div className="price-book-ctr">
                            <div className="price-bar">
                                ₹ {data.price}
                            </div>
                            <button className='book'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    const desktopContent = <div>
        <div className="component-car-item">
            <div className="info">
                <img src={data.image} alt="" />
                <div className="desc">
                    <div>
                        <h3>{data.name}</h3>
                    </div>
                    <div>
                        {data.seater} Seater
                    </div>
                    <div>
                        {data.fuel_type}
                    </div>
                </div>
            </div>
            <div className="price-book-ctr">
                <div className="price-bar">
                    ₹ {data.price}
                </div>
                <button className='book'>Book Now</button>
            </div>
        </div>
    </div>

    return (
        contentType === 'desktop' ? desktopContent : mobContent
    )
}

export default CarComponent
