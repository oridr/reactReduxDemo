'use strict';

require('./widget.less');

import React, { PropTypes } from 'react'
import { connect } from 'react-redux';

import Profile from '../profile/Profile';
import Reputation from '../reputation/Reputation';
import Reviews from '../reviews/Reviews';

export const Widget = ({ loading }) => (
	<div className="widget">
		{!!loading ||
		<div className="widget__container">
			<div className="widget__profile widget__area">
				<Profile />
			</div>

			<div className="widget__profile widget__area">
				<Reputation />
			</div>

			<div className="widget__review widget__area">
				<Reviews />
			</div>
		</div>
		}

		{!!loading &&
		<div className="widget__spinner"></div>
		}
	</div>
);

Profile.propTypes = {
	loading: PropTypes.bool
};

const mapStateToProps = ({ loading }) => ({ loading });

export default connect(mapStateToProps)(Widget);