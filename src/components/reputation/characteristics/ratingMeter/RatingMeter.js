'use strict';

require('./ratingMeter.less');

import React, { PropTypes } from 'react';

const RatingMeter = ({ score, maxScore, maxRating }) => {
	const ratio = score / maxScore * 100;
	const rating = Math.round(score / maxScore * maxRating);

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
	score: PropTypes.number.isRequired,
	maxScore: PropTypes.number.isRequired
};

export default RatingMeter;