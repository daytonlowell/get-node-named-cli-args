# get-node-named-cli-args
![Tests](https://github.com/daytonlowell/get-node-named-cli-args/actions/workflows/node.js.yml/badge.svg)

# Install
`npm i get-node-named-cli-args`
```js
const getNamedArgs = require('get-node-named-cli-args')
```

# Example Usage
CLI: `node my-app.js foo=true bar=123 baz=cool`

JS:
```js
const getNamedArgs = require('get-node-named-cli-args')

const myArgs = getNamedArgs()// { foo: true, baz: 123: baz: 'cool' }
```
