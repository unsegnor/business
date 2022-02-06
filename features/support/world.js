// features/support/world.js
const { setWorldConstructor } = require('cucumber')
const FakeAuthenticator = require('../../adapters/FakeAuthenticator')
const Authenticator = require('../../adapters/FakeAuthenticator')
const FakeActor = require('../../test-doubles/FakeActor')

class CustomWorld {
  constructor () {
    this.variable = 0
    this.authenticator = Authenticator()
    this.create_users()
  }

  create_users(){
    this.actors = {
      Jhon: FakeActor(),
      Lily: FakeActor(),
      Unknown: FakeActor()
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
