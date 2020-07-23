const Adapter = require('./FakeAuthenticator')
const Port = require('../domain/Authenticator.port')

describe('FakeAuthenticator', function(){
    beforeEach(function(){
        this.adapter = Adapter()
    })

    Port()
})