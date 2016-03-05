'use strict';

require('./widget.less');

import React from 'react'
import Profile from '../profile/Profile';


const Widget = () =>
	<div className="widget">
		<div className="widget__profile widget__area">
			<Profile />
		</div>
		<div className="widget__reputation widget__area"></div>
		<div className="widget__review widget__area"></div>
	</div>;

export default Widget;