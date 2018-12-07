const FeathersMethod = {
  FIND: 'find',
  GET: 'get',
  CREATE: 'create',
  UPDATE: 'update',
  PATCH: 'patch',
  REMOVE: 'remove'
}

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
}

function getFeathersMethod (httpMethod, feathersId) {
  if (httpMethod === HttpMethod.GET) {
    return feathersId
      ? FeathersMethod.GET
      : FeathersMethod.FIND
  }

  return {
    [HttpMethod.POST]: FeathersMethod.CREATE,
    [HttpMethod.PUT]: FeathersMethod.UPDATE,
    [HttpMethod.PATCH]: FeathersMethod.PATCH,
    [HttpMethod.DELETE]: FeathersMethod.REMOVE
  }[httpMethod]
}

module.exports = {
  FeathersMethod,
  HttpMethod,
  getFeathersMethod
}
