import React from 'react'

import './keyFeatures.scss'
import { keyFeaturesData } from '../../../utilsData/keyFeaturesData'

const KeyFeatures = () => {

	return (
		<div className='key-feature-container'>
			{keyFeaturesData.map((item, index) => <div className='key-feature-row'>
				{!(index % 2) ? <img className='image' src={item.image.default} /> : null}
				<div className={`non-image-continer ${index % 2 ? 'pr-75' : 'pl-75'}`}>
					<div className='title-container'>
						{/* <i className={`icon ${item.iconClasses}`} /> */}
						<span className='title dark-blue-text'>{item.title}</span>
					</div>
					<span className='desc'>{item.desc}</span>
				</div>
				{(index % 2) ? <img className='image' src={item.image.default} /> : null}
			</div>
			)}
		</div>
	)
}

export default KeyFeatures
