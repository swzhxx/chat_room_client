import * as types from '@/constant/constant'

export const setSmss = (list = []) => {
	return {
		type: types.SET_SMSS,
		payload: list
	}
}

export const addSms = (item = {}) => {
	return {
		type: types.SET_SMSS_ADD_SMS,
		payload: item
	}
}
