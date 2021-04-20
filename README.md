# get-node-named-cli-args
![Tests](https://github.com/daytonlowell/get-node-named-cli-args/actions/workflows/node.js.yml/badge.svg)

> Requires Node 12 or later

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

const myArgs = getNamedArgs()// { foo: true, bar: 123, baz: 'cool' }
```

> If you need more advanced features, check out [mri by @lukeed](https://github.com/lukeed/mri)
