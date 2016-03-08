'use strict';

require('./social.less');

import React, { PropTypes } from 'react';
import SOCIALS_NETOWRKS from 'config/social_networks';
import Network from './network/Network';

const getNetworkInfo = (name) => SOCIALS_NETOWRKS[name];

const getNetworks = (socialInfo) => Object.keys(socialInfo).reduce((networks, name) => {
	const network = socialInfo[name];

	if(!!network.connections) {
		const networkInfo = getNetworkInfo(name);

		networkInfo && networks.push({
			name,
			connections: network.connections,
			logo: networkInfo.logo,
			connectionsTitle: networkInfo.connections
		});
	}

	return networks;
}, []);

const Social = ({ socialInfo }) => (
	<div className="social">
		{
			getNetworks(socialInfo).map((network) => (
				<Network key={ network.name } { ...network } />
			))
		}
	</div>
);

Social.propTypes = {
	socialInfo: PropTypes.object.isRequired
};

export default Social;