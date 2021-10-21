import React from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'

import './footer.scss'

const Footer = () => {
	return (
		<div className='container-fluid bg-dark footer'>
			<div className='row justify-content-around'>
				<div className='col-sm-4'>
					<div className='row'>
						<img className='company-icon' src={constants.COMPANY_ICON_URL} />
					</div>
					<div className='row'>
						<ul>
							<li><i class="fa fa-map-marker"></i>16-G, Regency Arched, Near AITCL Bus Stand, A.B. Road, Indore (M.P.)</li>
							<li><i class="fa fa-phone"></i>+0731-4035356 , 91091-23404</li>
							<li><i class="fa fa-envelope-o"></i>info@thestandardjourney.com</li>
						</ul>
					</div>
				</div>
				<div className='col-sm-4'>

					Featured links
					<div className='row'>
						<div className='col'>
							<ul>
								{/* <li><Link to='/'><i class="fa fa-caret-right"></i>Home</Link></li> */}
								<li><Link to='/about_us'><i class="fa fa-caret-right"></i>About Us</Link></li>
								<li><Link to='/car_rental'><i class="fa fa-caret-right"></i>Services</Link></li>
								<li><Link to='/our_packages'><i class="fa fa-caret-right"></i>Our Packages</Link></li>
								<li><Link to='/contact'><i class="fa fa-caret-right"></i>Contact</Link></li>
							</ul>
						</div>
						{/* <div className='col'>
							<ul>
								 <li><Link to='/'><i class="fa fa-caret-right"></i>Image Gallery</Link></li>
								<li><Link to='/'><i class="fa fa-caret-right"></i>Video Gallery</Link></li> 
								<li><Link to='/our_packages'><i class="fa fa-caret-right"></i>Our Packages</Link></li>
								<li><Link to='/contact'><i class="fa fa-caret-right"></i>Contact</Link></li>
							</ul>

						</div> */}

					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
