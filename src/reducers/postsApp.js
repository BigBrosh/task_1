import { combineReducers } from 'redux'
import users from './users'
import posts from './posts'

const postsApp = combineReducers({
  users,
  posts
});

export default postsApp;