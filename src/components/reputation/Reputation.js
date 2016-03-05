'use strict';

import React, { PropTypes } from 'react';
import RatingMeter from './ratingMeter/ratingMeter';

const Reputation = () => (
	<section>
		<RatingMeter rating={3.5} maxRating={5} />
	</section>
);

Reputation.propTypes = {

};

export default Reputation;