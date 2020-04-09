module.exports = function({objectRepository}){

    var userObjects = {}

    return Object.freeze({
        createObject,
        getAllObjects
    })

    async function createObject({credentials}){
        userObjects[credentials] = ['a']
    }

    async function getAllObjects({credentials}){
        return userObjects[credentials] || []
    }
}