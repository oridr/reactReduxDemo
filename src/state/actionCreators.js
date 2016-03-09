'use strict';

import { INIT, SELECT_STORE, PAGE_REVIEWS } from './actionTypes';

export const selectStore = (currentReputationIndex) => ({
	type: SELECT_STORE,
	payload: {
		currentReputationIndex
	}
});

export const initState = (payload) => ({
	type: INIT,
	payload
});

export const selectReviewPage = (currentPage) => ({
	type: PAGE_REVIEWS,
	payload: {
		currentPage
	}
});