'use strict';

require('./reset.css');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store';

import Widget from './components/widget/Widget';

store.subscribe(() => console.log(store.getState()));

window.fetch('http://api.erated.co/v1/users/4d24120531ac6988984570a018e07a187fdc786d?partner=12341234&mode=marketplaces', {
		method: 'get'
	})
	.then((response) => response.json())
	.then((result) => store.dispatch({
		type: 'INIT',
		payload: result.data
	}));

const appRoot = document.getElementById('widget');

render(
	<Provider store={store}>
		<Widget />
	</Provider>,
	appRoot);