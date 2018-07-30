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

			data = data.map(el => {
				return {
					name: el.name,
					id: el.id					
				}
			});

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
				<Users data={this.state.users} url={this.state.url}/>
			</div>
		);
	}
}

export default MainPage;