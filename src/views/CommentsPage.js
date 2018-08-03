// @flow
import React, { Component } from 'react';
import requests from '../controllers/requests'

type Props = {
	match: Object,
	history: Object
};

type State = {
	comments: null | Array<Object>
};

class CommentsPage extends Component<Props, State> {
	state = {
		comments: null
	}

	async componentDidMount() {
		const id = +this.props.match.params.id;
		await this.getComments(id);
	}

	getComments = async (id: number) => {
		try {
			const comments = await requests.getComments(id);

			this.setState({ comments });
		}

		catch(error) {
			console.error(error);
		}
	}

	render() {
		if (!this.state.comments)
			return <p>No comments yet</p>

		return (
			<div>
				<button onClick={() => this.props.history.goBack()}
						className="back_button">Back</button>

				{
					this.state.comments.map(comment =>
						<div key={comment.id}
							 className="comment">
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