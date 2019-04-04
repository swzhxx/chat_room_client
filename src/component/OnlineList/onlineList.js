import React from 'react'
import { connect } from 'react-redux'

import './onlineList.scss'

const electron = window.require('electron')
const app = electron.remote.app

const OnlineList = props => {
	return (
		<div className="online-list">
			<div>
				当前在线人数:<b>{props.list.length}</b>
			</div>
			{props.list.map(item => {
				return (
					<div class="flex">
						<img alt="" className="user-icon" src={app.getAppPath() + '/build/' + '/static/images/if_aunt_3231118.png'} />
						<div>{item.usernickname}</div>
					</div>
				)
			})}
		</div>
	)
}

const mapToProps = state => {
	return {
		list: state.users
	}
}
export default connect(mapToProps)(OnlineList)
