import React from 'react'

import './subscribeContainer.scss'
import { socialMediaData } from '../../utilsData/socialMediaData'

const SubscribeContainer = props => {
	return (
		<div className='container-fluid p-4 subscribe-container'>
			<div className='row text-center'>
				<div className='col-sm my-2 subscribe-text'>
					SUBSCRIBE TO THE STANDARD JOURNEY
				</div>
				<div className='col-sm'>
					<input className='w-75 my-2'/>
					<button className='bg-warning my-2'>Subscribe</button>
				</div>
				<div className='col-sm my-sm-2'>
					<div className='row d-inline'>
						{socialMediaData.map((item) => {
							return (
								<a target="_blank" href={item.link}>
									<img src={item.img.default} alt={item.altVal} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div >
	)
}

export default SubscribeContainer
