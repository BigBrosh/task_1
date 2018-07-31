import React, { Component } from 'react';
import requests from '../controllers/requests'

class CommentsPage extends Component {
	state = {
		comments: null
	}

	async componentDidMount() {
		const id = +this.props.match.params.id;
		await this.getComments(id);
	}

	getComments = async (id) => {
		try {
			const comments = await requests.getComments(id);

			this.setState({ comments });
		}

		catch(error) {
			console.error(error);
		}
	}

	render() {
		console.log(this.props);

		if (!this.state.comments)
			return <p>No comments yet</p>

		return (
			<div>
				<button onClick={() => this.props.history.goBack()}>Back</button>

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