'use strict';

import { INIT, SELECT_STORE, PAGE_REVIEWS } from './actionTypes';

const init = (payload) => ({
	...payload,
	reviewPage: 0,
	currentReputation: 0
});

const selectStore = (state, payload) => Object.assign({}, state, {
	reviewPage: 0,
	currentReputation: payload.currentReputationIndex
});

const pageReviews = (state, payload) => Object.assign({}, state, {
	reviewPage: payload.currentPage
});

const mainReducer = (state = { loading: true }, action) => {
	switch(action.type) {
		case INIT:
			return init(action.payload);

		case SELECT_STORE:
			return selectStore(state, action.payload);

		case PAGE_REVIEWS:
			return pageReviews(state, action.payload);

		default:
			return state;
	}
};

export default mainReducer;