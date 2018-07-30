import React from 'react';

import { RequestController } from '../controllers/RequestController';

export class Users extends React.Component {
	state = {
		active: null,
		currentPosts: {}
	}

	getPosts = id => async () => {
		try {
			if (!this.state.currentPosts[id])
			{
				const data = await RequestController.getPosts(id);

				let posts = this.state.currentPosts;
				posts[id] = data;

				this.setState({
					active: id,
					currentPosts: posts
				});
			}

			else
			{
				this.setState({
					active: id
				});				
			}
		}

		catch(error) {
			console.error(error);
		}
	}

	render() {
		const { users } = this.props;
		
		if(!users)
			return <p>No users in the list</p>;

		return (
			<div>
				{users.map(user => 
					<p 	id={user.id} 
						key={`user${user.id}`}
						onClick={this.getPosts(user.id)}> {user.name} </p>)}
				<hr/>

				{this.state.active !== null && this.state.currentPosts[this.state.active].map(post =>
					<div key={`post${post.id}`}>
						<p>{`Post id is ${post.id}`}</p>
						<p>{post.title}</p>
					</div>
				)}
			</div>			
		)
	}
}