import React from 'react'

import {Router, Route, Redirect, Switch} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import postsApp from './reducers/postsApp'

import MainLayout from './views/MainLayout'
import CommentsPage from './views/CommentsPage'

const history = createBrowserHistory();
const store = createStore(postsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route path="/post/:id" component={CommentsPage} />
					<Route path="/" component={MainLayout} />
				</Switch>
			</Router>
		</Provider>
	)	
};

export default App;