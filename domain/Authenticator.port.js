const FakeActor = require("../test-doubles/FakeActor")

module.exports = function(){
    describe('Authenticator port', function(){
        it('must authenticate users', async function(){
            var actor = FakeActor({login: 'login', password:'pass'})
            //await this.adapter.register({actor: })
            // this.adapter.authenticate({login})
        })
    })
}