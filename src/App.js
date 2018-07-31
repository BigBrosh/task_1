import React from 'react'

import {Router, Route, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import postsApp from './reducers/postsApp'

import MainPage from './views/MainPage'
import ViewPage from './views/ViewPage'
import CommentsPage from './views/CommentsPage'

const history = createBrowserHistory();
const store = createStore(postsApp);

store.subscribe(() => store.getState());

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/:id" component={ViewPage} />
					<Route path="/post/:id" component={CommentsPage} />
				</Switch>
			</Router>
		</Provider>
	)	
};

export default App;