'use strict';

require('./network.less');

import React, { PropTypes } from 'react';

const Network = ({ name, logo, connections, connectionsTitle }) => (
	<div className="network">
		<img src={logo} className="network__logo" />

		<div className="network__connectionsContainer">
			<div className="network__connections">{connections}</div>
			<div className="network__connectionsTitle">{connectionsTitle}</div>
		</div>
	</div>
);

Network.propTypes = {
	name: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired,
	connections: PropTypes.number.isRequired,
	connectionsTitle: PropTypes.string.isRequired
};

export default Network;