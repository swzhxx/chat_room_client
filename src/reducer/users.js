import * as types from '@/constant/constant'
const oriState = Object.freeze([])
const users = (state = oriState, action = {}) => {
	switch (action.type) {
		case types.SET_USERS:
			return action.payload
		case types.SET_USERS_ADD_ITEM:
			return [...state, action.payload]
		case types.SET_USERS_DEL_ITEM:
			let arr = state.filter(item => {
				return item.username != action.payload.username
			})
			return arr
		default:
			return state
	}
}

export default users
