'use strict';

require('./ratingStars.less');

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const RatingStars = ({ score, maxScore }) => {
	const rating = score / maxScore * 5;
	const decimal = rating % 1;
	const half = decimal > 0 && decimal <= 0.5;
	const maxStars = Math.ceil(rating);
	const stars = [];

	for(let i = 0; i < maxStars; i++) {
		stars.push(
			<div className="ratingStars__star"
				 key={i}
				 className={
				 	classNames({
				 		'ratingStars__star': true,
				 		'ratingStars__star--half': i === maxStars - 1 && half
				 	})
				 }>
			</div>
		);
	}

	return (
		<div className="ratingStars">
			<div className="ratingStars__score">
				{rating.toPrecision(2)}
			</div>
			<span>
				{stars}
			</span>
		</div>
	);
};

RatingStars.propTypes = {
	score: PropTypes.number.isRequired,
	maxScore: PropTypes.number.isRequired
};

export default RatingStars;