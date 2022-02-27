// features/support/world.js
const { setWorldConstructor } = require('cucumber')
const Authenticator = require('../../adapters/FakeAuthenticator')
const FakeActor = require('../../test-doubles/FakeActor')
const Application = require('../../domain/application')

class CustomWorld {
  constructor () {
    this.variable = 0
    this.create_actors()
    this.authenticator = Authenticator()
    this.authenticator.register({actor:this.actors.Jhon})
    this.authenticator.register({actor:this.actors.Lily})
    this.application = Application({authenticator})
  }

  create_actors(){
    this.actors = {
      Jhon: FakeActor({application, login: 'jhon', password: 'jhonpassword'}),
      Lily: FakeActor({application, login: 'lily', password: 'lilypassword'}),
      Unknown: FakeActor({application, login: 'unknown', password: 'unknown'})
    }
  }
}

setWorldConstructor(CustomWorld)
