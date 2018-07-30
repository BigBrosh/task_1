import React from 'react';

import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import MainPage from './views/MainPage';

const history = createBrowserHistory();

class App extends React.Component {
	componentWillReceiveProps = nextProps =>{
		if (nextProps)
			return this.props.history !== nextProps.history;
	};

	render = () => {
		return(
			<Router history={history}>
				<Route exact path="/" component={MainPage} />
			</Router>
		)
	}
};

export default App;