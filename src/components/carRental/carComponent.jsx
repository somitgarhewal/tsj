import React from 'react'

import './carComponent.scss'

const CarComponent = () => {
    return (
        <div>
            <div className="component-car-item">
                <div className="info">
                    <div className="desc">
                        <div className="location-name">
                            <h3>Maruti Brezza</h3>
                        </div>
                        {/* <div className="seater">
                            Manual .
                            Diesel
                        </div> */}
                    </div>
                    <img src="https://s3-ap-southeast-1.amazonaws.com/zoomcar/photographs/original/6a75117e054e7d3bbe9ff6e431008679994c1d71.png?1584525114" alt="" />
                </div>
                <div className="price-book-ctr">
                    <div className="price-bar">
                        ₹ 4,909
                    </div>
                    <button className='book'>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarComponent
