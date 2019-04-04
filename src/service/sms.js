import { setSmss, addSms } from '@/action/sms'
import store from '@/store/store'
const smsProcessor = t => {
	t.listen('sms/list', (data, context, next) => {
		store.dispatch(setSmss(data))
		next()
	})
	t.listen('sms/receive', (data, context, next) => {
		store.dispatch(addSms(data))
		next()
	})
}

export default smsProcessor
