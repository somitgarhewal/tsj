import React, { useState } from 'react'
import Header from '../header'
import './invoiceGenerator.scss'

const InvoiceGenerator = () => {

    const [pickupLocation, setPickupLocation] = useState('')
    const [dropLocation, setDropLocation] = useState('')
    const [kms, setKms] = useState('')
    const [hrs, setHrs] = useState('')
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNo, setContactNo] = useState('')
    const [carType, setCarType] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const handleGenerateInvoice = () => {
        const data = {
            pickupLocation,
            dropLocation,
            kms,
            hrs,
            address,
            name,
            email,
            contactNo,
            carType,
            startDate,
            endDate
        }
        console.log('data', data)
    }

    return (
        <>
            <Header />
            <div className="invoice-title">
                Generate Invoice
            </div>

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
                        Email
                        <input
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="col-md">
                        Car Type
                        <input
                            className="form-control"
                            placeholder="Car Type"
                            value={carType}
                            onChange={(e) => setCarType(e.target.value)}
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
                        Start Date
                        <input
                            type="date"
                            className="form-control"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md">
                        End Date
                        <input
                            type="date"
                            className="form-control"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        Address
                        <input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row button-row">


                    <button className="find-button" onClick={() => handleGenerateInvoice()}>
                        Generate Invoice
                    </button>

                </div>
            </div>
        </>
    )
}


export default InvoiceGenerator
