'use strict';

require('./tab.less');

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Tab = ({ active }) => (
	<div className={
		classNames({
			tab: true,
			'tab--active': active
		})
	}></div>
);

Tab.propTypes = {
	active: PropTypes.boolean
};

export default Tab;
