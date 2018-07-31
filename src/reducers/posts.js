import { ADD_POSTS } from '../actions/actions'

const initialState = [];

export default function posts (state = initialState, action) {
	switch(action.type) {
		case ADD_POSTS:
			return Object.assign({}, state, action.posts);

		default:
			return state;		
	}
}