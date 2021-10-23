import React from 'react'

import './JourneyDetailsContainer.scss'

const JourneyDetailsContainer = () => {
	return (
		<div className='journey-details-container'>
			<div className="row">
				<div className="col-md-2">
					Pickup Location
					<input className="form-control" placeholder="Pickup location" />
				</div>
				<div className="col-md-2">
					Drop Location
					<input className="form-control" placeholder="Drop location" />
				</div>
				<div className="col-md-1">
					KMs
					<input type="text" className="form-control" />
				</div>
				<div className="col-md-1">
					Hrs
					<input type="text" className="form-control" />
				</div>
				<div className="col-md-2">
					Date
					<input type="date" className="form-control" />
				</div>
				<div className="col-md-2">
					Time
					<input type="time" className="form-control" />
				</div>
				<div className="col-md-2">
					&nbsp;
					<div className="find-button">
						<i className="fa fa-search"></i> &nbsp;
						Find Cars
					</div>
				</div>
			</div>
		</div>
	)
}

export default JourneyDetailsContainer
