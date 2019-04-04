const net = require('net')
const { StringDecoder } = require('string_decoder')
const decoder = new StringDecoder('utf8')
var globalTransfer

var queue = []
let writePromises = []
class Transfer {
	constructor(path, port, callback) {
		let conn
		if (typeof callback === 'function') conn = net.connect(port, path, callback)
		conn = net.connect(port, path)
		this.conn = conn
		this.path = path
		this.port = port
		this.data = []

		conn.on('data', thunk => {
			let pkgs = decoder.write(thunk)
			pkgs.split(`"||||||"`).forEach(pkg => {
				if (!pkg) return
				const { path, data, code } = JSON.parse(pkg)
				var i = 0
				var context = {}
				//报错
				if (code == 500) {
					console.error(data.err)
					return
				}
				let findItem = writePromises.find(item => {
					return item.path === path
				})
				writePromises = writePromises.filter(item => {
					if (item === findItem) {
						item.defer.resolve(data)
						return false
					}
					return true
				})
				if (findItem) {
					return
				}
				function next() {
					if (i >= queue.length) return
					let item = queue[i]
					i++
					if (item.path == path) {
						item.callback(data, context, next)
					} else {
						next()
					}
				}
				setTimeout(() => {
					next()
				})
			})
		})
	}
	listen(path, callback) {
		if (typeof callback != 'function') {
			console.warn('transfer listen callback must be a function')
			return
		}
		queue.push({
			path,
			callback
		})
	}
	write(path, data) {
		let defer = {}
		var promise = new Promise((resolve, reject) => {
			defer.resolve = resolve
			defer.reject = reject
		})
		let protocl = {
			path,
			data: JSON.stringify(data)
		}
		let mes = Buffer.from(JSON.stringify(protocl))
		this.conn.write(mes)
		let obj = {
			path,
			promise,
			defer
		}
		setTimeout(() => {
			defer.reject()
			writePromises = writePromises.filter(item => {
				return item !== obj
			})
		}, 1500)
		writePromises.push(obj)
		return promise
	}
}

const transfer = (...args) => {
	if (globalTransfer === undefined) globalTransfer = new Transfer(...args)
	else if (args.length != 0 && globalTransfer) {
		throw new Error('the transfer is created ! the global only hava a transfer')
	}
	return globalTransfer
}

export default transfer
