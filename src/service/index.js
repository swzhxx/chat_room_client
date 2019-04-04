import userProcessor from './user'
import smsProcessor from './sms'
const processor = t => {
	userProcessor(t)
	smsProcessor(t)
}

export default processor
