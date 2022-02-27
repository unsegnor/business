const {defineParameterType} = require('cucumber')

defineParameterType({
  name: 'actor',
  regexp: /Jhon|Lily|Unknown/,
  transformer: function (actorId) {
    var actor = this.actors[actorId]
    if(!actor) throw new Error(`Actor ${actorId} not registered`)
    return actor
  }
})
