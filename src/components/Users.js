import React from 'react';

export class Users extends React.Component {
	state = {
		users: this.props.data,
		url: this.props.url,
		active: 0,
		currentPosts: {}
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps !== this.state.users)
			this.setState({
				users: nextProps.data
			});
	}

	getPosts = async (e) => {
		try {
			let id = e.target.id,
				response = await fetch(`${this.state.url}/posts?userId=${id}`),
				data = await response.json();

			if (!this.state.currentPosts[id])
			{
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

	render = () => {
		let users = 
			!this.state.users ?
			<p>No users in the list</p> :
			this.state.users.map((el, i) => <p id={el.id} key={`user${el.id}`} onClick={this.getPosts}> {el.name} </p>);

		let posts;

		if (Object.keys(this.state.currentPosts).length === 0)
			posts = <p>user is not selected</p>;

		else
		{
			posts = this.state.currentPosts[this.state.active].map((el, i) =>
				<div key={`post${i}`}>
					<p>{`Post id is ${el.id}`}</p>
					<p>{el.title}</p>
				</div>
			);
		}

		return (
			<div>
				{users}
				<hr/>
				{posts}
			</div>			
		)
	}
}