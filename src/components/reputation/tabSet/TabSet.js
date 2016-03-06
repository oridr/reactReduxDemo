'use strict';

require('./tabSet.less');

import React, { PropTypes } from 'react';

import Tab from './tab/Tab';

const TabSet = ({ tabs, activeTab, onTabSelect }) => {
	console.log(activeTab);

	return (
		<div className="tabSet">
			{
				tabs.map((tab) => (
					<Tab key={ tab.name }
						 name={ tab.name }
						 active={ tab.name === activeTab }
						 onTabSelect={ onTabSelect }/>
				))
			}
		</div>
	);
};

export default TabSet;