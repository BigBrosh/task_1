import React from 'react';

import {Link} from 'react-router-dom';

import { Requests } from '../controllers/Requests';

export class Users extends React.Component {
	state = {
		active: null,
		currentPosts: {}
	}

	getPosts = id => async () => {
		try {
			if (!this.state.currentPosts[id])
			{
				const data = await Requests.getPosts(id);

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
				{users.map(user => 
					<Link 	to={`${user.id}`}
							style={{ display: 'block', marginBottom: 10}}
							key={`user${user.id}`}> {user.name} </Link>)}
			</div>			
		)
	}
}