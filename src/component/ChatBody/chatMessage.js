import React, { useContext } from 'react'

import { Context } from './context.js'
import './chatMessage.scss'

const electron = window.require('electron')
const app = electron.remote.app

const ChatMessage = props => {
	let message = props.message || {}

	let compare = useContext(Context)

	if (typeof compare != 'function') {
		compare = () => {}
	}
	return (
		<div className={['flex chat-message', compare(message)].join(' ')}>
			<img className="chat-message-icon" src={app.getAppPath() + '/build/static/images/if_aunt_3231118.png'} alt="" />
			<div className="chat-message-content">{message.data}</div>
		</div>
	)
}
export default ChatMessage
