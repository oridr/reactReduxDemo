'use strict';

require('./reviewType.less');

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const ReviewType = ({ type }) => (
	<div className={
		classNames({
			reviewType: true,
			'reviewType--positive': type === 'positive',
			'reviewType--negative': type === 'negative'
		})
	} />
);

ReviewType.propTypes = {
	type: PropTypes.string
};

export default ReviewType;