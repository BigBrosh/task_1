// @flow
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import requests from '../controllers/requests'
import { addUsers, addPosts } from '../actions/actions'

import Users from './Users'
import ViewPage from './ViewPage'

type Props = {
  users: Array<Object>,
  addUsers: Function,
  addPosts: Function
};

class MainLayout extends Component<Props> {
	async componentDidMount() {
		if (this.props.users.length === 0) {
			const [users, posts] = await Promise.all( [requests.getUsers(), requests.getAllPosts()])
			this.props.addUsers(users);
			this.props.addPosts(posts);
		}
	}

	render() {
		return (
			<div>
				<Route exact path="/" component={Users} />
				<Route path="/:id" component={ViewPage} />
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = {
	addUsers,
	addPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);