module.exports = (args = process.argv) => {
	const parsedArgs = args.slice(2).map(arg => {
		let key, val
		const splitPosition = arg.indexOf('=')

		if (splitPosition > -1) {
			key = arg.substring(0, splitPosition)
			val = arg.substring(splitPosition + 1)
		} else {
			key = arg
			val = void 0
		}

		try {
			val = JSON.parse(val)
		} catch (err) {
			//
		}

		return [ key, val ]
	})

	return Object.fromEntries(parsedArgs)
}
