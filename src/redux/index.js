import {
	combineReducers
} from 'redux';
import configureStore from './createStore';

import shopStateReducer from './shop';

function createStore() {
	const rootReducer = combineReducers({
		shopState: shopStateReducer,
	});

	return configureStore(rootReducer);
}

export default createStore();