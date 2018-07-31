import { url } from '../config';

export const Requests = {
	getUsers: async function() {
		const response = await fetch(`${url}/users`);
		const data = await response.json();

		return data;
	},

	getPosts: async function(id) {
		const response = await fetch(`${url}/posts?userId=${id}`);
		const data = await response.json();

		return data;
	},

	getAllPosts: async function() {
		const response = await fetch(`${url}/posts`);
		const data = await response.json();

		return data;
	}
}