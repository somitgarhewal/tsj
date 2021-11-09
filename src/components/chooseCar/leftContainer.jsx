import React from 'react'
import { connect } from 'react-redux'
import './leftContainer.scss'

const LeftContainer = ({ journeyData }) => {

    const kms = journeyData?.kms ? `${journeyData.kms} km` : '230 km'
    const hrs = journeyData?.hrs ? `${journeyData.hrs} hrs` : '1.5 hrs'

    return (
        <div className='filter-container'>
            {/* <div className='entity-row'>
                <div className=''> Car Occupacy</div>
                <div className=''>{kms}</div>
            </div> */}
            {/* <div className='entity-row'>
                <div className=''>Hrs</div>
                <div className=''>{hrs}</div>
            </div> */}
            <div className="occupancy-container">
                <div className="occupancy-header">
                    Car Occupacy
                </div>
                <div className="occupancy-content">
                    <div className="occupancy-content-element">
                        Total
                        <span>10</span>
                    </div>
                    <div className="occupancy-content-element">
                        Available
                        <span>9</span>
                    </div>
                </div>
            </div>
            <div className="filter-heading">Search by Filter</div>
            <div className="filter-card">
                <div className="filter-card-type">
                    Car seats
                </div>
                <div className="filter-card-content">
                    <div className="filter-card-content-element">
                        4
                    </div>
                    <div className="filter-card-content-element">
                        5
                    </div>
                    <div className="filter-card-content-element">
                        6
                    </div>
                </div>
            </div>

            <div className="filter-card">
                <div className="filter-card-type">
                    Fuel Type
                </div>
                <div className="filter-card-content">
                    <div className="filter-card-content-element">
                       Diesel
                    </div>
                    <div className="filter-card-content-element">
                        Petrol
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        journeyData: state.journeyData
    };
}

export default connect(mapStateToProps, null)(LeftContainer);
