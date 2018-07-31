import React from 'react';

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

function UserPostsPage(props) {
	const id = +props.match.params.id;

	return (
		<div>
			{	
				props.posts.filter(post => post.userId === id).map(post => 
					<div>
						<Link 	to={`post/${post.id}`}
								key={post.id}>
							<p>{`Post id is ${post.id}`}</p>
						</Link>

						<p>{post.title}</p>
					</div>
				)
			}
		</div>
	);
}

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps)(UserPostsPage);