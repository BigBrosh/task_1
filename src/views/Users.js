// @flow
import React from 'react'

import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import '../styles/styles.sass'

type Props = {
	users: Array<Object>,
	posts: Array<Object>
};

function Users(props: Props) {
	const { users, posts } = props;
		
	if(!users)
		return <p>No users in the list</p>;

	return (
		<div>
			{users.map(user => 
				<Link 	to={`${user.id}`}
						className="link main_page" 
						key={user.id}>
						{`${user.name} (${posts.reduce((cur, next) => cur + (next.userId === user.id ? 1 : 0), 0)})`}
				</Link>)}
		</div>			
	)
}

const mapStateToProps = ({ users, posts}) => ({ users, posts });

export default connect(mapStateToProps)(Users);