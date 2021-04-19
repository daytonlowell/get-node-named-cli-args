module.exports = (args = process.argv) => {
	return Object.fromEntries(args.slice(2).map(arg => {
		let key = arg
		let val = void 0
		const pos = arg.indexOf('=')

		if (pos > -1) {
			key = arg.substring(0, pos)
			val = arg.substring(pos + 1)
		}

		try {
			val = JSON.parse(val)
		} catch (e) { /**/ }

		return [ key, val ]
	}))
}
