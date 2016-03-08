'use strict';

require('./ratingMeter.less');

import React, { PropTypes } from 'react';

const RatingMeter = ({ rating, maxRating }) => {
	const ratio = rating / maxRating * 100;

	return (
		<div className="ratingMeter">
			<div className="ratingMeter__bar"
				 style={{
					width: `${ratio}%`
				 }}
				 data-rating={rating} data-max={maxRating}>
			</div>
		</div>
	);
};

RatingMeter.propTypes = {
	rating: PropTypes.number.isRequired,
	maxRating: PropTypes.number.isRequired
};

export default RatingMeter;