import React from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'

import './footer.scss'

const Footer = () => {
	return (
		<div className='container-fluid footer'>
			<div className='row justify-content-around'>
				<div className='col-sm-4 left-container'>
					<div className='row'>
						<img className='company-icon' src={constants.COMPANY_ICON_URL} />
					</div>
					<div className='row'>
						<ul>
							<li><i class="fa fa-map-marker"></i>16-G, Regency Arched, Near AITCL Bus Stand, A.B. Road, Indore (M.P.)</li>
							<li>
								<i class="fa fa-phone" />
								<a href="tel:+0731-4035356" >07314035356</a>,&nbsp;
								<a href="tel:91091-23404" >9109123404</a>
							</li>
							<li>
								<a href="mailto:info@thestandardjourney.com">
									<i class="fa fa-envelope-o" />
									info@thestandardjourney.com
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='col-sm-4'>

					<h3>Featured links</h3>
					<div className='row mt-3'>
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
