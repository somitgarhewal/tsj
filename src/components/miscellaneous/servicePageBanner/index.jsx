import React, { useState } from 'react'
import { useHistory } from 'react-router'

import JourneyDetailsContainer from '../../home/journeyDetailsContainer'
import whiteHamburger from '../../../assets/whiteHamburger.svg';
import HamburgerMenu from '../../header/hamburgerMenu';
import './servicePageBanner.scss'
import companyLogo from '../../../assets/company_logo.jpeg'

const ServicePageBanner = ({ banner }) => {

    const [openMenu, setOpenMenu] = useState(false)

    const history = useHistory()

    return (
        <div
            className='container-fluid banner'
            style={{
                backgroundImage: `url(${banner})`
            }}>
            <div className='header-on-banner'>
                <div className='logo'>
                    <img className='image' src={companyLogo} onClick={() => history.push('/')} />
                </div>
                {openMenu ?
                    <HamburgerMenu closeHamburger={() => setOpenMenu(false)} />
                    :
                    <div className='menu-icon' onClick={() => setOpenMenu(true)} >
                        <img src={whiteHamburger} className='items image' />
                    </div>
                }
            </div>
            <div className='text-container'>
                <div className='text'>
                    <JourneyDetailsContainer />
                </div>
            </div>
        </div>
    )
}

export default ServicePageBanner
