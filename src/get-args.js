const { FeathersMethod } = require('./methods')

module.exports = function getArgs (feathersMethod, { query, feathersId, body }) {
  return {
    [FeathersMethod.FIND]: [{ query }],
    [FeathersMethod.GET]: [feathersId],
    [FeathersMethod.CREATE]: [body],
    [FeathersMethod.UPDATE]: [feathersId || null, body, { query }],
    [FeathersMethod.PATCH]: [feathersId || null, body, { query }],
    [FeathersMethod.REMOVE]: [feathersId || null, { query }]
  }[feathersMethod]
}
