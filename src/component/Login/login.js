import React from 'react'
import './login.scss'
import { Form, Icon, Input, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import transfer from '@/utils/transfer'
import { connect } from 'react-redux'
import { setAuth } from '@/action/auth'

const electron = window.require('electron')
const Login = props => {
	const getFieldDecorator = props.form.getFieldDecorator
	const submit = e => {
		e.preventDefault()
		props.form.validateFields((err, values) => {
			if (err) return
			else {
				transfer()
					.write('user/login', values)
					.then(data => {
						props.setAuth(data)
						props.history.push('/chat-room')
						electron.ipcRenderer.send('sys', { size: { width: 800, height: 600 } })
					})
			}
		})
	}

	const exit = () => {
		electron.ipcRenderer.send('sys', { close: true })
	}

	return (
		<div className="login">
			<div className="login-header">
				<div no-drag className="login-header-close">
					<Icon type="close" onClick={exit} />
				</div>
			</div>
			<div className="login-form">
				<Form onSubmit={submit}>
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [{ required: true, message: 'Please input your username!' }]
						})(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="帐号" />)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('userpwd', {
							rules: [{ required: true, message: 'Please input your Password!' }]
						})(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />)}
					</Form.Item>
					<Form.Item>
						<Button size="large" style={{ width: '100%' }} type="primary" icon="safety-certificate" htmlType="submit">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	)
}

export default connect(
	null,
	{
		setAuth
	}
)(withRouter(Form.create({ name: 'login' })(Login)))
