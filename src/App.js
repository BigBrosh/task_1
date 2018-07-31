import React from 'react';

import {Router, Route, Switch} from 'react-router-dom';
import { withRouter } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';

import MainPage from './views/MainPage';
import ViewPage from './views/ViewPage';

const history = createBrowserHistory();

function App ()  {
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/:id" component={ViewPage} />
				</Switch>
			</Router>
		)
	
};

export default App;