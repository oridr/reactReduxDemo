'use strict';

require('./tab.less');

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import LOGOS from 'config/logos';

const getLogos = (name, active) => {
	const selectedLogo = LOGOS[name];

	return selectedLogo === undefined ? null : selectedLogo[active ? 'color' : 'grey']; // if logo not found, instead of null a path to generic logo
};

const Tab = ({ name, active, onTabSelect }) => (
	<div className={
			classNames({
				tab: true,
				'tab--active': active
			})
		}
	 	onClick={() => onTabSelect(name) }>
		<img className="tab__logo" src={ getLogos(name, active) } />
	</div>
);

Tab.propTypes = {
	name: PropTypes.string.isRequired,
	active: PropTypes.bool,
	onTabSelect: PropTypes.func.isRequired
};

export default Tab;
