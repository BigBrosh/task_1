// @flow
import React from 'react';

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

import '../styles/styles.sass'

type Props = {
  posts: Array<Object>,
  match:Object
};

function UserPostsPage(props: Props) {
	const id = +props.match.params.id;
	const posts = props.posts.filter(post => post.userId === id);

	if (posts.length === 0)
		return <h2>There are no posts yet</h2>

	return (
		<div>
			{	
				posts.map(post => 
					<div 	key={post.id}
						 	className="comment">
						<Link 	to={`post/${post.id}`}
								className="link post_page">
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