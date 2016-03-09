'use strict';

require('./reputation.less');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TabSet from './tabSet/TabSet';
import RatingStars from './ratingStars/RatingStars';
import Characteristics from './characteristics/Characteristics';

export const Reputation = ({ tabs, activeTab, onTabSelect }) => (
	<section className="reputation">
		<div className="reputation__tabs">
			<TabSet />
		</div>

		<RatingStars score={ activeTab.score } maxScore={ 100 }/>

		<div className="reputation__transactions">
			Number of Reviews made: { activeTab.total_reviews }
		</div>

		<div className="reputation__chars">
			<Characteristics stats={ activeTab.characteristics }/>
		</div>
	</section>
);

Reputation.propTypes = {
	tabs: PropTypes.array.isRequired,
	activeTab: PropTypes.object.isRequired
};

const mapStateToProps = ({ relevant_reputation, currentReputation}) => ({
	tabs: relevant_reputation,
	activeTab: relevant_reputation[currentReputation]
});

export default connect(mapStateToProps)(Reputation);