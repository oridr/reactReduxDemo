'use strict';

require('./ratingBubble.less');

import React, { PropTypes } from 'react';

const RatingBubble = ({ rating, ratingDescriptor }) => (
	<div className="ratingBubble">
		<div className="ratingBubble__rating">
			{`${rating}%`}
		</div>
		<div className="ratingBubble__type">
			{ratingDescriptor}
		</div>
	</div>
);

RatingBubble.propTypes = {
	rating: PropTypes.string.isRequired,
	ratingDescriptor: PropTypes.string.isRequired
};

export default RatingBubble;