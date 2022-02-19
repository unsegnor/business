module.exports = function(){
    describe('Authenticator port', function(){
        it('must authenticate users', async function(){
            await this.adapter.register
            this.adapter.authenticate({login})
        })
    })
}