import React from 'react'

import './keyFeatures.scss'
import { keyFeaturesData } from '../../../utilsData/keyFeaturesData'

const KeyFeatures = ({isMweb}) => {

	const desktopContent = <div className='key-feature-container'>
		{keyFeaturesData.map((item, index) => <div className='key-feature-row'>
			{!(index % 2) ? <img className='image' src={item.image.default} /> : null}
			<div className={`non-image-continer ${index % 2 ? 'pr-75' : 'pl-75'}`}>
				<div className='title-container'>
					<span className='title dark-blue-text'>{item.title}</span>
				</div>
				<span className='desc'>{item.desc}</span>
			</div>
			{(index % 2) ? <img className='image' src={item.image.default} /> : null}
		</div>
		)}
	</div>

	const mobileContent = <div className='key-feature-container'>
		{keyFeaturesData.map((item) => <div className='key-feature-row'>
			<div className={`non-image-continer`}>
				<div className='title-container'>
					<span className='title dark-blue-text'>{item.title}</span>
				</div>
				<img className='image' src={item.image.default} />
				<span className='desc'>{item.desc}</span>
			</div>
		</div>
		)}
	</div>

	return (isMweb ? mobileContent : desktopContent)
}

export default KeyFeatures
