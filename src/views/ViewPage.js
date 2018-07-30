import React from 'react';

import config from '../config';

import { findInLink } from '../helpers/DataHelper';

class UserPostsPage extends React.Component {
	state = {
		url: config.mainUrl,
		nickname: 'User',
		currentPosts: {}
	};

	componentDidMount = () => {
		this.getPosts();
	}

	getPosts = async () => {
		try {
			let link = this.props.history.location.pathname,
				id = findInLink(link, 'id'),
				nickname = findInLink(link, 'nickname'),
				response = await fetch(`${this.state.url}/posts?userId=${id}`),
				data = await response.json();


			this.setState({
				nickname: nickname,
				currentPosts: data
			});
		}

		catch(error) {
			console.error(error);
		}
	}

	render = () => {
		let posts;

		if (Object.keys(this.state.currentPosts).length === 0)
			posts = <p>There are no comments yet</p>;

		else
		{
			posts = this.state.currentPosts.map((el, i) =>
				<div key={`post${i}`}>
					<p>{`Post id is ${el.id}`}</p>
					<p>{el.title}</p>
				</div>
			);
		}

		return (
			<div>
				<h2 style={{ textAlign: 'center', marginBottom: 40 }}>{`${this.state.nickname}'s posts`}</h2>
				{posts}
			</div>
		);
	}
}

export default UserPostsPage;