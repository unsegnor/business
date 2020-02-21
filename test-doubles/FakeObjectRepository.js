const sinon = require('sinon')

module.exports = function(){
    return Object.freeze({
        getNew: sinon.stub(),
        get: sinon.stub()
    })
}