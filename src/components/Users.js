import React from 'react';

export class Users extends React.Component {
	state = {
		users: this.props.data,
		url: this.props.url,
		active: 0,
		currentPosts: ''
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

			this.setState({
				active: id,
				currentPosts: data
			});
		}

		catch(error) {
			console.error(error);
		}
	}

	render = () => {
		let users = 
			!this.state.users ?
			<p>No users in the list</p> :
			this.state.users.map((el, i) => <p id={i + 1} key={`user${i}`} onClick={this.getPosts}> {el} </p>);

		let posts =
				this.state.currentPosts === '' ?
				<p>user is not selected</p> :
				this.state.currentPosts.map((el, i) =>
					<div>
						<p>{`Post id is ${el.id}`}</p>
						<p>{el.title}</p>
					</div>
				)

		return (
			<div>
				{users}
				<hr/>
				{posts}
			</div>			
		)
	}
}