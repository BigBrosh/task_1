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
						key={`user${user.id}`}> {`${user.name} (${posts[user.id].length})`} </Link>)}
		</div>			
	)
}

const mapStateToProps = (state) => {
	return { ...state };
}

export default connect(mapStateToProps)(Users);