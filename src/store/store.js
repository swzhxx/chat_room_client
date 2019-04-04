import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '@/reducer/index'

let store
if (process.env.NODE_ENV != 'production') {
	store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))
} else {
	store = createStore(rootReducer, applyMiddleware(thunk))
}

export default store
