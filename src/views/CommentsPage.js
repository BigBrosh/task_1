import React, { Component } from 'react';
import { Requests } from '../controllers/Requests'

class CommentsPage extends Component {
	id = +this.props.match.params.id;

	state = {
		comments: null
	}

	async componentDidMount() {
		await this.getComments(this.id);
	}

	getComments = async (id) => {
		try {
			const comments = await Requests.getComments(id);

			this.setState({ comments });
		}

		catch(error) {
			console.error(error);
		}
	}

	render() {
		console.log(1);
		if (!this.state.comments)
			return <p>No comments yet</p>

		return (
			<div>
				{	
					this.state.comments.map(comment =>
						<div key={comment.id}>
							<p>{`comment id is ${comment.id}`}</p>
							<p>{comment.body}</p>
						</div>
					)
				}
			</div>
		);		
	}
}

export default CommentsPage;