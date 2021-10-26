import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import JourneyDataReducer from '../redux/reducers/journeyDataReducer';

const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(JourneyDataReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;