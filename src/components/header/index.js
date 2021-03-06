import React, { useState } from 'react'

import { useHistory } from 'react-router';

import './header.scss'
import whiteHamburger from '../../assets/whiteHamburger.svg';
import HamburgerMenu from './hamburgerMenu';
import { constants } from '../../constants';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	const history = useHistory()
	return (
		<div className='container-fluid header'>
			<div className='row justify-content-around'>
				<span className='col' >
					<img className='h-80' src={constants.COMPANY_ICON_URL} onClick={() => history.push('/')}/>
				</span>
				<span className='col justify-content-end item-container'>
					{openMenu ?
						<HamburgerMenu closeHamburger={() => setOpenMenu(false)} />
						:
						<img src={whiteHamburger} className='items' onClick={() => setOpenMenu(true)} />}
				</span>
			</div>
		</div>
	)
}

export default Header
