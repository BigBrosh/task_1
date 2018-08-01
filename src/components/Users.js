import React from 'react'

import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function Users(props) {
	const { users, posts } = props;
		
	if(!users)
		return <p>No users in the list</p>;

	return (
		<div>
			{users.map(user => 
				<Link 	to={`${user.id}`}
						style={{ display: 'block', marginBottom: 10, textDecoration: 'none'}}
						key={user.id}> 
						{`${user.name} (${posts.reduce((cur, next) => cur + (next.userId === user.id ? 1 : 0), 0)})`}
				</Link>)}
		</div>			
	)
}

const mapStateToProps = ({ users, posts}) => ({ users, posts });

export default connect(mapStateToProps)(Users);