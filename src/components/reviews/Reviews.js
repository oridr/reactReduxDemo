'use strict';

require('./reviews.less');

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { selectReviewPage } from 'state/actionCreators';
import Review from './review/Review';
import Pager from './pager/Pager';

const reviewPerPage = 3;

const Reviews = ({ currentReviews, currentPage, pageClick }) => {
	const numberOfTotalReviews = (currentReviews || []).length;
	const numberOfPages = Math.ceil(numberOfTotalReviews / reviewPerPage);
	const startReviewIndex = currentPage * reviewPerPage;
	const reviewsPage = currentReviews.slice(startReviewIndex, startReviewIndex + reviewPerPage);

	return (
		<section className="reviews">
			<h1 className="reviews__header">Reviews <span className="reviews__number">({numberOfTotalReviews}+)</span></h1>

			<ul className="reviews__list">
				{
					reviewsPage.map(({ review_type, review_content }, index) => (
						<Review key={index} reviewContent={review_content} reviewType={review_type} />
					))
				}
			</ul>

			<div className="reviews__pager">
				<Pager currentPage={currentPage} totalPages={numberOfPages} onPageClick={pageClick} />
			</div>
		</section>
	);
};

Reviews.propTypes = {
	currentReviews: PropTypes.array.isRequired,
	currentPage: PropTypes.number.isRequired
};

const mapStateToProps = ({ relevant_reputation, currentReputation, reviewPage }) => ({
	currentReviews: relevant_reputation[currentReputation].reviews,
	currentPage: reviewPage
});

const mapDispatchToProps = (dispatch) => ({
	pageClick: (page) => dispatch(selectReviewPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);