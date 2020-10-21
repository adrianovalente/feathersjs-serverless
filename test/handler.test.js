const feathers = require('@feathersjs/feathers')
const serverlessApp = require('../src')

test('set/get api express-like', () =>
  expect(serverlessApp()
    .set('foo', 'bar')
    .get('foo'))
    .toEqual('bar')
)

test('integration test: happy path', async () => {
  const cb = jest.fn()
  const fooBar = [{ foo: 'bar' }]
  const app = serverlessApp(feathers())
    .use('hello', {
      find: async () => fooBar
    })
    .handler()

  await app({ resource: 'hello', httpMethod: 'GET' }, null, cb)

  expect(cb).toHaveBeenCalledWith(null, { body: JSON.stringify({ data: fooBar }) })
})
