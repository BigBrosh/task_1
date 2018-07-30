import React from 'react';

export class Users extends React.Component {
	state = {
		users: this.props.data
	}

	componentWillReceiveProps = (nextProps) => {
		if (nextProps !== this.state.users)
			this.setState({
				users: nextProps.data
			});
	}

	render = () => {
		let users = 
			!this.state.users ?
			<p>No users in the list</p> :
			this.state.users.map((el, i) => <p key={`user${i}`}>{el}</p>);

		return (
			<div>
				{users}
			</div>			
		)
	}
}