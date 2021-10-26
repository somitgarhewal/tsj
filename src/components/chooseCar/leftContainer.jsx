import React from 'react'
import { connect } from 'react-redux'
import './leftContainer.scss'

const LeftContainer = ({journeyData}) => {
    
    const kms = journeyData?.kms ? `${journeyData.kms} km` : '230 km'
    const hrs = journeyData?.hrs ? `${journeyData.hrs} hrs` :'1.5 hrs'

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

const mapStateToProps = (state) => {
	return {
		journeyData: state.journeyData
	};
}

export default connect(mapStateToProps, null)(LeftContainer);
