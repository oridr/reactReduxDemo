'use strict';

import { INIT, SELECT_STORE } from './actionTypes';

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