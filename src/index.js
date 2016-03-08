'use strict';

require('./reset.css');

import React from 'react';
import { render } from 'react-dom';

import Widget from './components/widget/Widget';

const appRoot = document.getElementById('widget');

render(<Widget />, appRoot);