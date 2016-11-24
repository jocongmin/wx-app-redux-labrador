import {
	combineReducers
} from 'redux';
import configureStore from './createStore';
import rootSaga from '../sagas/';

import loginReducer from './login';
import shopStateReducer from './shop';

function createStore() {
	const rootReducer = combineReducers({
		login: loginReducer,
		shopState: shopStateReducer,
	});

	return configureStore(rootReducer, rootSaga);
}

export default createStore();