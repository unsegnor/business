const {expect} = require('chai')
const Thing = require('./Thing')

describe('Thing', function(){
    it('must do stuff', async function(){
        var thing = Thing()
        var result = await thing.doStuff()
        expect(result).to.equal('stuff done')
    })
})