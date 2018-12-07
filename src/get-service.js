// encapsulates the logic to decide the service and feathersId
module.exports = function getService (feathersApp, path) {
  const pathArray = path
    .replace(/^\//, '') // removes the first / character
    .split(/\//g)

  let feathersId = null
  let service = pathArray.join('/')
  if (!feathersApp.service(service)) {
    feathersId = pathArray.pop()
    service = pathArray.join('/')
  }

  if (!feathersApp.service(service)) {
    service = null
    feathersId = null
  }

  return { service, feathersId }
}
