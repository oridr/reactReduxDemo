'use strict';

require('./tab.less');

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const getLogos = (name, active) => {
	const logos = {
		dhgate: {
			color: require('assets/dhgatelogo.png'),
			grey: require('assets/dhgatelogogrey.png')
		},
		amazon: {
			color: require('assets/amazoncolor.png'),
			grey: require('assets/amazongrey.png')
		},
		ebay: {
			color: require('assets/ebaycolor.png'),
			grey: require('assets/ebaygrey.png')
		},
		etsy: {
			color: require('assets/etsycolor.png'),
			grey: require('assets/etsygrey.png')
		}
	};

	const selectedLogo = logos[name];

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
