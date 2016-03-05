'use strict';

require('ratingStars');

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const RatingStars = ({ score, maxScore }) => {
	const rating = score / maxScore * 5;
	const decimal = rating % 1;
	const addition = decimal === 0 ? 0 : (decimal <= 0.5 ? 0.5 : 1);
	const starRating = Math.floor(rating) + addition;
	const stars = [];
	const maxStars = Math.ceil(rating);

	for(let i = 0; i < maxStars; i++) {
		stars.push(
			<div class="ratingStars__star"
				 className={
				 	classNames({
				 		'ratingStars__star--half': i === maxStars - 1 && addition === 0.5
				 	})
				 }>
			</div>
		);
	}

	return (
		<div className="ratingStars">
			<div className="ratingStars__score">
				{rating.toPrecision(1)}
			</div>
			<span>
				{stars}
			</span>
		</div>
	);
}

RatingStars.propTypes = {
	score: PropTypes.number.isRequired,
	maxScore: PropTypes.number.isRequired
};

export default RatingStars;