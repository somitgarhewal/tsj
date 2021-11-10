import React, { useState } from 'react'

const InvoiceGenerator = () => {

    const [pickupLocation, setPickupLocation] = useState('')
    const [dropLocation, setDropLocation] = useState('')
    const [kms, setKms] = useState('')
    const [hrs, setHrs] = useState('')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState('')
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')


    // const history = useHistory()

    const handleFindCars = () => {
        console.log('pickupLocation', pickupLocation)
        console.log('dropLocation', dropLocation)
        console.log('kms', kms)
        console.log('hrs', hrs)
        console.log('date', date)
        console.log('time', time)
        console.log('name', name)
        // console.log('lastName', lastName)
        console.log('email', email)
        console.log('contactNo', contactNo)

        // if(pickupLocation === '' || dropLocation === '' || kms === '' || hrs === '' || date === '' || time === ''){
        // 	return alert('please fill all fields.')
        // }

        // const data = {
        // 	pickupLocation,
        // 	dropLocation,
        // 	kms,
        // 	hrs,
        // 	date,
        // 	time
        // }
       
    }

    return (
        <div className='invoive-details-container container'>
            <div className="row">
                <div className="col-md">
                    Name
                    <input
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* <div className="col-md">
                    Last Name
                    <input
                        className="form-control"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div> */}
            </div>
            <div className="row">
                <div className="col-md">
                    Email
                    <input
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-md">
                    Contact Number
                    <input
                        className="form-control"
                        placeholder="Contact Number"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    Pickup Location
                    <input
                        className="form-control"
                        placeholder="Pickup location"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                    />
                </div>
                <div className="col-md">
                    Drop Location
                    <input
                        className="form-control"
                        placeholder="Drop location"
                        value={dropLocation}
                        onChange={(e) => setDropLocation(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    KMs
                    <input
                        type="text"
                        className="form-control"
                        value={kms}
                        placeholder='kms'
                        onChange={(e) => setKms(e.target.value)}
                    />
                </div>
                <div className="col-md">
                    Hrs
                    <input
                        type="text"
                        className="form-control"
                        value={hrs}
                        placeholder='hrs'
                        onChange={(e) => setHrs(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md">
                    Date
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="col-md">
                    Time
                    <input
                        type="time"
                        className="form-control"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">

                <div className="col-md-2">
                    &nbsp;
                    <button className="find-button" onClick={() => handleFindCars()}>
                        {/* <i className="fa fa-search"></i> &nbsp; */}
                        Generate Invoice
                    </button>
                </div>
            </div>
        </div>
    )
}


export default InvoiceGenerator
