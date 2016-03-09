'use strict';

import { INIT, SELECT_STORE, PAGE_REVIEWS } from './actionTypes';

const init = ({ payload }) => ({
	...payload,
	reviewPage: 0,
	currentReputation: 0
});

const mainReducer = (state = { loading: true }, action) => {
	switch(action.type) {
		case INIT:
			return init(action);

		default:
			return state;
	}
};

export default mainReducer;