module.exports = function(){
    return Object.freeze({
        doStuff
    })

    async function doStuff(){
        return 'stuff done'
    }
}