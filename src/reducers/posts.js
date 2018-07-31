import { ADD_POSTS } from '../actions/actions'

const initialState = [];

export default function posts (state = initialState, action) {
	switch(action.type) {
		case ADD_POSTS:
			return [...action.posts]

		default:
			return state;		
	}
}