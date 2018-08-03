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

	return (
		<div>
			{	
				props.posts.filter(post => post.userId === id).map(post => 
					<div key={post.id}
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