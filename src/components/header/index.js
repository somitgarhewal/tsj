import React, {useState} from 'react'

import './header.scss'
import whiteHamburger from '../../assets/whiteHamburger.svg';
import HamburgerMenu from './hamburgerMenu';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='container-fluid header'>
                <div className='row justify-content-around'>

                    <span className='col' >
                        <img className='h-80' src={'http://thestandardjourney.com/assets/images/carlogo.jpeg'} />
                    </span>
                    <span className='col justify-content-end item-container'>
                        {/* <span className='items'>Sign in</span>
                        <span className='items'>Pay Now</span> */}
                        {openMenu ? 
                        <HamburgerMenu closeHamburger={() => setOpenMenu(false)} />
                        :
                        <img src={whiteHamburger} className='items' onClick={()=> setOpenMenu(true)}/>}
                    </span>
                </div>
        </div>
    )
}

export default Header
