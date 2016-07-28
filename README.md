#logical-xor
Exclusive or, which returns true only when the inputs differ.

##install
```bash
npm install logical-xor
```

##usage
Pass in 1 parameter, and it evaluates the truthiness of it.

Pass in 2 parameters, and it returns true only if the inputs evaluate to different booleans.

Pass in more than 2 and it will walk down the chain, left to right, evaluating each set as it goes.

```js
const xor = require('logical-xor');

xor(true, true) // returns false
xor(true, false) // returns true
xor(true) // returns true
xor(true, true, true, false) // return true
```

##tests
```bash
npm test
```
