import React from 'react';

import {Link} from 'react-router-dom';

export class Users extends React.Component {
	state = {
		users: this.props.data,
		url: this.props.url,
		active: 0
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
			this.state.users.map((el, i) =>
				<Link 	to={`users/nickname=${el.name}&id=${this.state.active + 1}`}
						id={el.id}
						key={`user${el.id}`}
						onClick={this.getPosts}
						style={{ display: 'block', marginBottom: 5, textDecoration: 'none'}}> {el.name} </Link>);		

		return (
			<div>
				{users}
			</div>			
		)
	}
}