module.exports = (args = process.argv) => {
	const parsedArgs = args.slice(2).map(arg => {
		let [ key, val ] = arg.split('=', 2)
		try {
			val = JSON.parse(val)
		} catch (err) {
			//
		}

		return [ key, val ]
	})

	return Object.fromEntries(parsedArgs)
}
