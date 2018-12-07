const feathers = require('@feathersjs/feathers')
const getService = require('../src/get-service')

const dummyService = { find: () => [] }
const feathersApp = feathers()
  .use('people', dummyService)
  .use('people/shirts', dummyService)

test('unknown service', () => {
  const { feathersId, service } = getService(feathersApp, '/foo')
  expect(feathersId).toEqual(null)
  expect(service).toBe(null)
})

test('people service', () => {
  const { feathersId, service } = getService(feathersApp, '/people')
  expect(feathersId).toEqual(null)
  expect(service).toBe('people')
})

test('people service with id', () => {
  const { feathersId, service } = getService(feathersApp, '/people/1234')
  expect(feathersId).toEqual('1234')
  expect(service).toBe('people')
})

test('people/shirts service', () => {
  const { feathersId, service } = getService(feathersApp, '/people/shirts')
  expect(feathersId).toEqual(null)
  expect(service).toBe('people/shirts')
})

test('people/shirts service with id', () => {
  const { feathersId, service } = getService(feathersApp, '/people/shirts/1234')
  expect(feathersId).toEqual('1234')
  expect(service).toBe('people/shirts')
})
