import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@/scss/rest.scss'
import '@/scss/common.scss'
import App from '@/App.js'
import * as serviceWorker from './serviceWorker'

//antd 引入
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import 'antd/dist/antd.css'
import './index.css'

import transfer from '@/utils/transfer'
import serviceProcessor from '@/service/index'
const t = transfer('127.0.0.1', '8899', () => {
	console.log('server connect succes')
})
serviceProcessor(t)

moment.locale('zh-cn')

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
