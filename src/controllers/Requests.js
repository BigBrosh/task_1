import { url } from '../config';

const request = url => fetch(url)
					.then((r) => r.json())

export default {
	getUsers: () => request(`${url}/users`),

	getPosts: (id) => request(`${url}/posts?userId=${id}`),

	getAllPosts: () => request(`${url}/posts`),

	getComments: (id) => request(`${url}/posts/${id}/comments`)
}