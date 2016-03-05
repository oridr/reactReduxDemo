'use strict';

require('./reviews.less');

import React, { PropTypes } from 'react';
import Review from './review/Review';
import Pager from './pager/Pager';

const pageClick = (page) => console.log(page);

const Reviews = ({ numberOfTotalReviews, currentReviews, currentPage, numberOfPages }) => (
	<section className="reviews">
		<h1 className="reviews__header">Reviews <span className="reviews__number">({numberOfTotalReviews}+)</span></h1>

		<ul className="reviews__list">
			{
				currentReviews.map(({ review_type, review_content }, index) => (
					<Review key={index} reviewContent={review_content} reviewType={review_type} />
				))
			}
		</ul>

		<div className="reviews__pager">
			<Pager currentPage={currentPage} totalPages={numberOfPages} onPageClick={pageClick} />
		</div>

	</section>
);

Reviews.propTypes = {
	numberOfTotalReviews: PropTypes.number.isRequired,
	currentReviews: PropTypes.array.isRequired,
	currentPage: PropTypes.number.isRequired,
	numberOfPages: PropTypes.number.isRequired
};

export default Reviews;