module.exports = function({objectRepository}){
    return Object.freeze({
        execute
    })

    async function execute(){
        await objectRepository.getNew()
    }
}