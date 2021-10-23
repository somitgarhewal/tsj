import React from 'react'
import { useState } from 'react/cjs/react.development'

import './JourneyDetailsContainer.scss'

const JourneyDetailsContainer = () => {

	const [pickupLocation, setPickupLocation] = useState('')
	const [dropLocation, setDropLocation] = useState('')
	const [kms, setKms] = useState('')
	const [hrs, setHrs] = useState('')
	const [date, setDate] = useState(new Date())
	const [time, setTime] = useState('')

	const handleFindCars = () => {
		console.log('pickupLocation', pickupLocation)
		console.log('dropLocation', dropLocation)
		console.log('kms', kms)
		console.log('hrs', hrs)
		console.log('date', date)
		console.log('time', time)
	}

	return (
		<div className='journey-details-container'>
			<div className="row">
				<div className="col-md-2">
					Pickup Location
					<input
						className="form-control"
						placeholder="Pickup location"
						value={pickupLocation}
						onChange={(e) => setPickupLocation(e.target.value)}
					/>
				</div>
				<div className="col-md-2">
					Drop Location
					<input
						className="form-control"
						placeholder="Drop location"
						value={dropLocation}
						onChange={(e) => setDropLocation(e.target.value)}
					/>
				</div>
				<div className="col-md-1">
					KMs
					<input
						type="text"
						className="form-control"
						value={kms}
						onChange={(e) => setKms(e.target.value)}
					/>
				</div>
				<div className="col-md-1">
					Hrs
					<input
						type="text"
						className="form-control"
						value={hrs}
						onChange={(e) => setHrs(e.target.value)}
					/>
				</div>
				<div className="col-md-2">
					Date
					<input
						type="date"
						className="form-control"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div className="col-md-2">
					Time
					<input
						type="time"
						className="form-control"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
				</div>
				<div className="col-md-2">
					&nbsp;
					<div className="find-button" onClick={() => handleFindCars()}>
						<i className="fa fa-search"></i> &nbsp;
						Find Cars
					</div>
				</div>
			</div>
		</div>
	)
}

export default JourneyDetailsContainer
