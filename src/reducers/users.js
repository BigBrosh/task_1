import { ADD_USERS } from '../actions/actions'

const initialState = [];

export default function users(state = initialState, action) {
	switch(action.type) {
		case ADD_USERS:
			return [].concat(...state, action.users);

		default:
			return state;		
	}
}