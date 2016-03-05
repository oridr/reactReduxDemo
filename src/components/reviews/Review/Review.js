'use strict';

require('./review.less');

import React, { PropTypes } from 'react';
import ReviewType from './reviewType/ReviewType';

const Review = ({ reviewType, reviewContent }) => (
	<li className="review">
		<div className="review__type">
			<ReviewType type={reviewType} />
		</div>
		<q className="review__content">{reviewContent}</q>
	</li>
);

Review.propTypes = {
	reviewType: PropTypes.string,
	reviewContent: PropTypes.string.isRequired
};

export default Review;