module.exports = function(){
    return Object.freeze({
        createObject,
        getObjects,
        hasReceivedAnObject
    })

    async function createObject(){}
    async function getObjects(){}
    async function hasReceivedAnObject(){ return true}
}