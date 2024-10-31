import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import latestReducer from './latestReducer';

const store = createStore(latestReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
