import React from 'react';

import { Requests } from '../controllers/Requests';

import { findInLink } from '../helpers/DataHelper';

class UserPostsPage extends React.Component {
	state = {
		currentPosts: {}
	};

	componentDidMount = async () => {
		await this.getPosts();
	}

	getPosts = async () => {
		try {
			const link = this.props.history.location.pathname;
			const id = findInLink(link, '');
			const currentPosts = await Requests.getPosts(id);

			this.setState({
				currentPosts: currentPosts
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
			posts = this.state.currentPosts.map(post =>
				<div key={post.id}>
					<p>{`Post id is ${post.id}`}</p>
					<p>{post.title}</p>
				</div>
			);
		}

		return (
			<div>
				{posts}
			</div>
		);
	}
}

export default UserPostsPage;