// @flow
import React, { Component } from 'react'

import { connect } from 'react-redux'

import requests from '../controllers/requests'
import { addUsers, addPosts } from '../actions/actions'

import Users from '../components/Users'

type Props = {
  users: Array<Object>,
  addUsers: Function,
  addPosts: Function
};

class MainPage extends Component<Props> {
	async componentDidMount() {
		if (this.props.users.length === 0) {
			const [users, posts] = await Promise.all( [requests.getUsers(), requests.getAllPosts()])
			this.props.addUsers(users);
			this.props.addPosts(posts);
		}
	}

	render() {
		return (
			<Users />
		);
	}
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
	addUsers,
	addPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);