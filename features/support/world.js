// features/support/world.js
const { setWorldConstructor } = require('cucumber')
const Authenticator = require('../../adapters/FakeAuthenticator')

class CustomWorld {
  constructor () {
    this.variable = 0
    this.authenticator = Authenticator();
    create_users();
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

  create_users(){
    this.users.push({name: 'Jhon'})
  }
}

setWorldConstructor(CustomWorld)
