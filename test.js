const { test } = require('uvu')
const assert = require('uvu/assert')
const getNamedArgs = require('./index.js')

test('get arguments as object with string values', () => {
	assert.equal(getNamedArgs([ '', '', 'foo=bar', 'baz=hi', 'butts=lulz' ]), { foo: 'bar', baz: 'hi', butts: 'lulz' })
})

test('numbers are parsed correctly', () => {
	assert.equal(getNamedArgs([ '', '', 'myNumber=123' ]), { myNumber: 123 })
})

test('booleans are parsed correctly', () => {
	assert.equal(getNamedArgs([ '', '', 'hi=true', 'bye=false' ]), { hi: true, bye: false })
})

test('JSON is parsed correctly', () => {
	assert.equal(getNamedArgs([ '', '', 'hi={ "hello": true }' ]), { hi: { hello: true } })
})

test('no args', () => {
	assert.equal(getNamedArgs([]), {})
})

test.run()
