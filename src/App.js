import React from 'react';

import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import MainPage from './views/MainPage';
import ViewPage from './views/ViewPage';

const history = createBrowserHistory();

class App extends React.Component {
	componentWillReceiveProps = nextProps =>{
		if (nextProps)
			return this.props.history !== nextProps.history;
	};

	render = () => {
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/:id" component={ViewPage} />
				</Switch>
			</Router>
		)
	}
};

export default App;