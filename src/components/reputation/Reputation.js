'use strict';

require('./reputation.less');

import React, { PropTypes } from 'react';
import TabSet from './tabSet/TabSet';
import RatingStars from './ratingStars/RatingStars';
import Characteristics from './characteristics/Characteristics';

const Reputation = ({ tabs, activeTab, onTabSelect }) => {
	const currentTab = tabs.find((tab) => tab.name === activeTab);

	return (
		<section className="reputation">
			<div className="reputation__tabs">
				<TabSet tabs={ tabs } activeTab={ activeTab } onTabSelect={onTabSelect} />
			</div>

			<RatingStars score={ currentTab.score } maxScore={ 100 } />

			<div className="reputation__transactions">
				Number of Reviews made: { currentTab.total_reviews }
			</div>

			<div className="reputation__chars">
				<Characteristics stats={ currentTab.characteristics } />
			</div>
		</section>
	);
}

Reputation.propTypes = {
	tabs: PropTypes.array.isRequired,
	activeTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired
};

export default Reputation;