import {SET_JOURNEY_DATA} from '../types'

const initialState = {
	journeyData: {}
};

 const JourneyDataReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_JOURNEY_DATA:
			return {
				...state,
				journeyData: action.payload
			}
		default:
			return state;
	}

}

export default JourneyDataReducer