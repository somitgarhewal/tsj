import React from 'react'

import './invoiceDocument.scss'
import companyLogo from '../../assets/company_logo.jpeg'

const InvoiceDocument = () => {

    const data = {
        pickupLocation: 'axss',
        dropLocation: 'sass',
        kms: 21,
        hrs: 1.3,
        date: 'Wed Nov 10 2021 17:45:21 GMT+0530 (India Standard Time)',
        time: 'Wed Nov 10 2021 17:45:21 GMT+0530 (India Standard Time)',
        name: 'sddfdsfd',
        email: 'dsads@sfdf.com',
        contactNo: '1234567890',
        invoiceId: new Date().getTime()

    }

    const dataMappings = {
        pickupLocation: "Pickup Location",
        dropLocation: "Drop Location",
        kms: 'Kilometers',
        hrs: 'hours',
        date: 'Date',
        time: 'Time',
        name: 'Name',
        email: 'Email',
        contactNo: 'Contact No',
        invoiceId: 'Invoice Id'
    }
    return (
        <div className="invoive container">


            <div className='container-fluid header'>
                <div className='row justify-content-around'>
                    <span className='col' >
                        <img className='h-80' src={companyLogo} />
                    </span>
                    <span className='col justify-content-end item-container'>

                        <span className='items'  >
                            <i class="fa fa-phone" />&nbsp;
                            <span>07314035356</span>
                            <br />
                            <i class="fa fa-envelope-o" />&nbsp;
                            <span>info@thestandardjourney.com</span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="invoice-body">
                {Object.keys(data).map(item => 
                <div className="row body-row">
                    <span className='title'>{dataMappings[item]}</span>
                    <span className='value'>{data[item]}</span>
                </div>
                    )}
                
                {/* <div className="row">{`Name: ${data.firstName} ${data.lastName}`}</div>
                <div className="row">{`Pickup Location: ${data.pickupLocation}`}</div>
                <div className="row">{`Drop Location: ${data.dropLocation}`}</div>
                <div className="row">{`kms: ${data.kms}`}</div>
                <div className="row">{`hrs: ${data.hrs}`}</div>
                <div className="row">{`date: ${data.date}`}</div>
                <div className="row">{`time: ${data.time}`}</div>
                <div className="row">{`email: ${data.email}`}</div>
                <div className="row">{`contact No: ${data.contactNo}`}</div> */}
            </div>
        </div>
    )
}

export default InvoiceDocument
