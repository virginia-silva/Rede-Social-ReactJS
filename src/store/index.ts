import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import reducerUser from './ducks/user/reducer'
import reducerPost from './ducks/post/reducer'

const createRootReducer = () => combineReducers({
  user: reducerUser,
  post: reducerPost
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }