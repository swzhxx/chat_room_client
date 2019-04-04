import * as types from '@/constant/constant'

export const setUsers = (list = []) => {
	return {
		type: types.SET_USERS,
		payload: list
	}
}

export const addUser = (user = {}) => {
	return {
		type: types.SET_USERS_ADD_ITEM,
		payload: user
	}
}
export const delUser = (user = {}) => {
	return {
		type: types.SET_USERS_DEL_ITEM,
		payload: user
	}
}
