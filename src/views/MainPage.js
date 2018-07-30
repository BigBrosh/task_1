import React from 'react';
import { Users } from '../components/Users';

class MainPage extends React.Component {
	state = {
		url: 'https://jsonplaceholder.typicode.com'
	};

	componentDidMount = () => {
		this.getUsers();
	}

	getUsers = async () => {
		try {
			let response = await fetch(`${this.state.url}/users`),
				data = await response.json();

			data = data.map(el => el.name);

			this.setState({
				users: data
			});
		}

		catch(error) {
			console.error(error);
		}
	}

	render = () => {
		return (
			<div>
				<Users data={this.state.users} />
			</div>
		);
	}
}

export default MainPage;