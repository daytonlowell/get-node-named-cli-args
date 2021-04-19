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

test('everything after the first equal is the val', () => {
	assert.equal(getNamedArgs([ '', '', 'foo=2+2=1' ]), { foo: '2+2=1' })
})

test('no val args are given an undefined val', () => {
	assert.equal(getNamedArgs([ '', '', 'foo' ]), { foo: undefined })
})

test.run()
