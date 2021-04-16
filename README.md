# get-node-named-cli-args

# Example
CLI: `node my-app.js foo=true bar=123 baz=cool`

JS:
```js
const getNamedArgs = require('get-node-named-cli-args')

const myArgs = getNamedArgs()// { foo: true, baz: 123: baz: 'cool' }
```
