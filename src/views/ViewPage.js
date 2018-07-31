import React from 'react';

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

function UserPostsPage(props) {
	const id = +props.match.params.id;

	if (Object.keys(props.posts[id]).length === 0)
		return <p>There are no comments yet</p>;

	return (
		<div>
			{	
				props.posts[id].map(post =>
					<Link 	to={`post/${post.id}`}
							key={post.id}>
						<p>{`Post id is ${post.id}`}</p>
						<p>{post.title}</p>
					</Link>
				)
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { ...state };
}

export default connect(mapStateToProps)(UserPostsPage);