'use strict';

require('./pager.less');

import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Pager = ({ currentPage, totalPages, onPageClick }) => {
	const pages = [];

	for(let i = 0; i < totalPages; i++) {
		pages.push(
			<li key={i}
				className={
				classNames({
					'pager__page': true,
					'pager__page--active': currentPage === i
				})
			}
				onClick={() => onPageClick(i) }
			/>
		);
	}

	return (
		<ul className="pager">
			{
				pages
			}
		</ul>
	);
};

Pager.propTypes = {
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired,
	onPageClick: PropTypes.func.isRequired
};

export default Pager;