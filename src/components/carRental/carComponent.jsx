import React from 'react'

import './carComponent.scss'

const CarComponent = ({data}) => {
    return (
        <div>
            <div className="component-car-item">
                <div className="info">
                    <div className="desc">
                        <div className="location-name">
                            <h3>{data.name}</h3>
                        </div>
                        {/* <div className="seater">
                            Manual .
                            Diesel
                        </div> */}
                    </div>
                    <img src={data.image} alt="" />
                </div>
                <div className="price-book-ctr">
                    <div className="price-bar">
                        ₹ {data.price}
                    </div>
                    <button className='book'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarComponent
