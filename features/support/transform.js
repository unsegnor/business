const {defineParameterType} = require('cucumber')

defineParameterType({
  regexp: /increment|decrement/,
  transformer: function (operationId) {
    switch (operationId) {
      case 'increment':
        return this.incrementBy
      case 'decrement':
        return this.decrementBy
      default:
        throw new Error(`Operation ${operationId} not supported`)
    }
  },
  name: 'operation'
})

defineParameterType({
  name: 'actor',
  regexp: /Jhon|Lily|Unknown/,
  transformer: function (actorId) {
    var actor = this.actors[actorId]
    if(!actor) throw new Error(`Actor ${actorId} not registered`)
    return actor
  }
})
