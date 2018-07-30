import React from 'react';

import { RequestController } from '../controllers/RequestController';

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
			const data = await RequestController.getUsers();

			this.setState({
				users: data
			});
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