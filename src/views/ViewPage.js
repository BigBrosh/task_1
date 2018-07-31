import React from 'react';

import { Requests } from '../controllers/Requests';

import { findInLink } from '../helpers/DataHelper';

class UserPostsPage extends React.Component {
	state = {
		currentPosts: {}
	};

	async componentDidMount () {
		await this.getPosts();
	}

	getPosts = async () => {
		try {
			const link = this.props.history.location.pathname;
			console.log(this.props.match);
			const id = +this.props.match.params.id;
			const currentPosts = await Requests.getPosts(id);

			this.setState({
				currentPosts
			});
		}

		catch(error) {
			console.error(error);
		}
	}

	render = () => {
		if (Object.keys(this.state.currentPosts).length === 0)
			return <p>There are no comments yet</p>;

		return (
			<div>
				{	
					this.state.currentPosts.map(post =>
						<div key={post.id}>
							<p>{`Post id is ${post.id}`}</p>
							<p>{post.title}</p>
						</div>
					)
				}
			</div>
		);
	}
}

export default UserPostsPage;