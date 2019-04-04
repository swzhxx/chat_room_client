import React, { useState } from 'react'
import { connect } from 'react-redux'
import './chatRoom.scss'
import { Input, Button } from 'antd'
import Chat from '@/component/ChatBody/chatBody'
import OnlineList from '@/component/OnlineList/onlineList'
import transfer from '@/utils/transfer'
import { addSms } from '@/action/sms'

const { TextArea } = Input

const ChatRoom = props => {
	const leftOrRight = message => {
		return message.source.username === props.auth.username ? 'self' : ''
	}

	const [mes, setMes] = useState('')

	const send = () => {
		if (!mes) {
			return
		}
		let sendMes = { source: { username: props.auth.username }, data: mes }
		transfer()
			.write('sms/add', sendMes)
			.then(data => {
				props.addSms(sendMes)
				setMes('')
			})
	}

	return (
		<div className="chat-room">
			<div className="chat-room-header">聊天室</div>
			<div className="chat-room-body">
				<div className="chat-room-content">
					<div className="fl1">
						<Chat leftOrRight={leftOrRight}>
							{props.sms.map(item => {
								return <Chat.ChatMessage message={item} />
							})}
						</Chat>
					</div>
					<div className="chat-room-send-form">
						<TextArea
							rows={5}
							value={mes}
							onChange={e => {
								setMes(e.target.value)
							}}
						/>
						<Button onClick={send}>发送</Button>
					</div>
				</div>
				<div className="chat-room-users">
					<OnlineList />
				</div>
			</div>
		</div>
	)
}
const mapToProps = state => {
	return {
		auth: state.auth,
		sms: state.sms
	}
}
export default connect(
	mapToProps,
	{ addSms }
)(ChatRoom)
