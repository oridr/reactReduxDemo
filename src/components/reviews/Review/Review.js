'use strict';

require('./review.less');

import React, { PropTypes } from 'react';
import EllipsisText  from 'react-ellipsis-text';

import ReviewType from './reviewType/ReviewType';

const Review = ({ reviewType, reviewContent }) => (
	<li className="review">
		<div className="review__type">
			<ReviewType type={reviewType} />
		</div>
		<EllipsisText text={reviewContent} length={80} className="review__content" />
	</li>
);

Review.propTypes = {
	reviewType: PropTypes.string,
	reviewContent: PropTypes.string.isRequired
};

export default Review;