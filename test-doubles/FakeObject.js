const sinon = require('sinon')

module.exports = function(){
    let values = {}
    let settedProperties = []

    return Object.freeze({
       set,
       get
    })

    async function set(property, value){
        settedProperties.push(property)
        values[property] = value
    }

    async function get(property){
        if(settedProperties.indexOf(property) == -1)
            throw new Error(`property "${property}" was not setted`)
        return values[property]
    }
}