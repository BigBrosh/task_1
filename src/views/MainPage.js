import React from 'react';

import { Requests } from '../controllers/Requests';

import { Users } from '../components/Users';

class MainPage extends React.Component {
	state = {
		users: null
	}

	componentDidMount() {
		this.getUsers();
	}

	getUsers = async () => {
		try {
			const users = await Requests.getUsers();

			this.setState({users});
		}

		catch(error) {
			console.error(error);
		}
	}

	render() {
		const { users } = this.state;

		return (
			<div>
				{ users && <Users users={this.state.users} /> }
			</div>
		);
	}
}

export default MainPage;