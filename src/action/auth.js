import * as types from '@/constant/constant'
export const setAuth = (authInfo = {}) => {
	return {
		type: types.SET_AUTH,
		payload: authInfo
	}
}
