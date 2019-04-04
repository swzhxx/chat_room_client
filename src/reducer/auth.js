import * as types from '@/constant/constant'

const oriState = Object.freeze({})

const auth = (state = oriState, action = {}) => {
	switch (action.type) {
		case types.SET_AUTH:
			return action.payload
		default:
			return state
	}
}

export default auth
