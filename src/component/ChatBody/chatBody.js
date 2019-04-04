import React from 'react'
import ChatMessage from './chatMessage'

import { Context } from './context.js'

const ChatBody = props => {
	let { leftOrRight } = props

	return (
		<div style={{ positive: 'relative', padding: '0 10px' }}>
			<Context.Provider value={leftOrRight}>{props.children}</Context.Provider>
		</div>
	)
}

ChatBody.ChatMessage = ChatMessage

export default ChatBody
