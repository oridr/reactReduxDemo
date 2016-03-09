'use strict';

require('./characteristics.less');

import React, { PropTypes } from 'react';
import RatingMeter from './ratingMeter/RatingMeter';

const Characteristics = ({ stats }) => (
	<ul className="characteristics">{
		stats && stats.map((stat, index) => (
			<li key={index} className="characteristics__item">
				<div className="characteristics__name">{stat.name}</div>
				<div className="characteristics__bar">
					<RatingMeter score={stat.score} maxScore={100} maxRating={5}/>
				</div>
			</li>
		))
	}</ul>
);

Characteristics.propTypes = {
	stats: PropTypes.array
}

export default Characteristics;