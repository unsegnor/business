const Adapter = require('./Adapter')
const Port = require('../domain/Thing.port')

describe('Thing adapter', function(){
    beforeEach(function(){
        this.adapter = Adapter()
    })

    Port()
})