// features/support/world.js
const { setWorldConstructor } = require('cucumber')
const FakeAuthenticator = require('../../adapters/FakeAuthenticator')
const Authenticator = require('../../adapters/FakeAuthenticator')
const FakeActor = require('../../test-doubles/FakeActor')
const Application = require('../../domain/application')

class CustomWorld {
  constructor () {
    this.variable = 0
    this.authenticator = Authenticator()
    this.authenticator.register({login: 'jhon', password:'jhonpassword', userId: 'jhon'})
    this.authenticator.register({login: 'lily', password:'lilypassword', userId: 'lily'})
    this.application = Application({authenticator});
    this.create_users()
  }

  create_users(){
    this.actors = {
      Jhon: FakeActor({application, login: 'jhon', password: 'jhonpassword'}),
      Lily: FakeActor({application, login: 'lily', password: 'lilypassword'}),
      Unknown: FakeActor({application, login: 'unknown', password: 'unknown'})
    }
  }

  setTo (number) {
    this.variable = number
  }

  incrementBy (number) {
    this.variable += number
  }

  decrementBy (number) {
    this.variable -= number
  }
}

setWorldConstructor(CustomWorld)
