'use strict';

require('./reviewType.less');

import React from 'react';
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

export default ReviewType;
