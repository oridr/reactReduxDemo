'use strict';

require('./widget.less');

import React from 'react';


const Widget = () =>
	<div className="widget">
		<div className="widget__profile widget__area"></div>
		<div className="widget__reputation widget__area"></div>
		<div className="widget__review widget__area"></div>
	</div>;

export default Widget;