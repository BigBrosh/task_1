export const ADD_USERS = 'ADD_USERS';
export const ADD_POSTS = 'ADD_POSTS';

export function addUsers(users) {
	return { type: ADD_USERS, users }
}

export function addPosts(posts) {
	return { type: ADD_POSTS, posts }
}