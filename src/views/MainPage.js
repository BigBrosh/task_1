import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Requests } from '../controllers/Requests'
import { addUsers, addPosts } from '../actions/actions'

import Users from '../components/Users'

class MainPage extends Component {
	async componentDidMount() {
		if (this.props.users.length === 0)
			await this.getUsers();

		if (Object.keys(this.props.posts).length === 0)
			await this.getAllPosts();
	}

	getUsers = async () => {
		try {
			const users = await Requests.getUsers();

			this.props.addUsers(users);
		}

		catch(error) {
			console.error(error);
		}
	}

	getAllPosts = async () => {
		try {
			const currentPosts = await Requests.getAllPosts();
			const posts = {};

			currentPosts.forEach(post => {
				if (!posts[post.userId])
					posts[post.userId] = [].concat(post);

				else
					posts[post.userId].push(post);
			})

			this.props.addPosts(posts);
		}

		catch(error) {
			console.error(error);
		}
	}

	render() {
		const { users, posts } = this.props;

		return (
			<div>
				{ Object.keys(posts).length && users.length && <Users /> }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { ...state };
}

const mapDispatchToProps = (dispatch) => {
	return {
		addUsers: (users) => {
			dispatch(addUsers(users))
		},
		addPosts: (posts) => {
			dispatch(addPosts(posts))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);