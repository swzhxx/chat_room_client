import { Route, HashRouter as Router, Redirect, Switch } from 'react-router-dom'
import React from 'react'
import Login from '@/component/Login/login'
import ChatRoom from '@/component/ChatRoom/chatRoom'
const Routes = props => {
	return (
		<Router>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/chat-room" component={ChatRoom} />
				<Redirect to="/login" />
			</Switch>
		</Router>
	)
}

export default Routes
