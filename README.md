## feathersjs-serverless

> feathersjs connector to the Serverless framework ⚡️

Have you ever imagined building an application with [feathersjs](https://feathersjs.com/) and deploying it using the [Serverless Framework](https://serverless.com/)?

``` javascript
const feathers = require('@feathersjs/feathers')
const serverless = require('feathersjs-serverless')

const Todos = {
  async find () => ([{
    description: 'Build a nice application'
  }, {
    description: 'Deploy it using Serverless'
  }])
}

const app = serverless(feathers())
  .use('todos', Todos)

module.exports.handler = app.handler()
```
