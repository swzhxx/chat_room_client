import * as types from '@/constant/constant'

const oriState = Object.freeze([])

const sms = (state = oriState, action = {}) => {
	switch (action.type) {
		case types.SET_SMSS:
			return action.list
		case types.SET_SMSS_ADD_SMS:
			return [...state, action.payload]
		default:
			return state
	}
}

export default sms
