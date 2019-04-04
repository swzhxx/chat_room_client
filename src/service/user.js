import { setAuth } from '@/action/auth.js'
import { setUsers, addUser, delUser } from '@/action/userlist.js'
import store from '@/store/store'

const userProcessor = t => {
	t.listen('user/lists', (data, context, next) => {
		let auth = store.getState().auth
		let list = [auth, ...data]
		store.dispatch(setUsers(list))
		next()
	})
	t.listen('user/lists/adduser', (data, context, next) => {
		store.dispatch(addUser(data))
		next()
	})
	t.listen('user/lists/deluser', (data, context, next) => {
		store.dispatch(delUser(data))
		next()
	})
}

export default userProcessor
