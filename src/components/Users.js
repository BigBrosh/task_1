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

				const posts = this.state.currentPosts;
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
				{users.map((el, i) => <p id={el.id} key={`user${el.id}`} onClick={this.getPosts(el.id)}> {el.name} </p>)}
				<hr/>

				{this.state.active !== null && this.state.currentPosts[this.state.active].map((el, i) =>
					<div key={`post${i}`}>
						<p>{`Post id is ${el.id}`}</p>
						<p>{el.title}</p>
					</div>
				)}
			</div>			
		)
	}
}