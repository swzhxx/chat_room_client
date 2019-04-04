import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store/store.js'
import Routes from '@/router/router.js'

const App = () => {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	)
}

export default App
