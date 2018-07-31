import React, { Component } from 'react';

import { connect } from 'react-redux'

function UserPostsPage(props) {
	const id = +props.match.params.id;

	if (Object.keys(props.posts[id]).length === 0)
		return <p>There are no comments yet</p>;

	return (
		<div>
			{	
				props.posts[id].map(post =>
					<div key={post.id}>
						<p>{`Post id is ${post.id}`}</p>
						<p>{post.title}</p>
					</div>
				)
			}
		</div>
	);
}

const mapStateToProps = (state) => {
	return { ...state };
}

export default connect(mapStateToProps)(UserPostsPage);