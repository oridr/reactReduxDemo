'use strict';

require('./tabSet.less');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectStore } from 'state/actionCreators';
import Tab from './tab/Tab';

export const TabSet = ({ tabs, currentReputation, onTabSelect }) => (
	<div className="tabSet">
		{
			tabs.map(({ name }, index) => (
				<Tab key={ name }
					 index={index}
					 name={ name }
					 active={ index === currentReputation }
					 onTabSelect={ onTabSelect }/>
			))
		}
	</div>
);

TabSet.propTypes = {
	tabs: PropTypes.array.isRequired,
	currentReputation: PropTypes.number.isRequired,
	onTabSelect: PropTypes.func.isRequired
};

const mapStateToProps = ({ relevant_reputation, currentReputation }) => ({
	tabs: relevant_reputation,
	currentReputation
});

const mapDispatchToProps = (dispatch) => ({
	onTabSelect: (tabIndex) => dispatch(selectStore(tabIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(TabSet);