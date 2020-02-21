const {expect} = require('chai')
const UseCase = require('./CreateObjectUseCase')
const FakeObjectRepository = require('../test-doubles/FakeObjectRepository')
const FakeObject = require('../test-doubles/FakeObject')

describe('CreateObjectUseCase', function(){
    it('must create a new object', async function(){
        var objectRepository = new FakeObjectRepository()
        var useCase = UseCase({objectRepository})
        await useCase.execute()
        expect(objectRepository.getNew.called).to.equal(true)
    })

    it('must add the object to the application specified', async function(){
        var objectRepository = new FakeObjectRepository()
        var fakeObject = new FakeObject()
        var applicationId = 'applicationId'
        objectRepository.getNew.resolves(fakeObject)
        objectRepository.get.withArgs(applicationId)
        var useCase = UseCase({objectRepository}).resolves(fakeApplication)

        await useCase.execute()

        expect(fakeApplication.add.calledWith('objects', fakeObject))

        //quizá podríamos hacer estos tests de integración con un in memory object repository
    })
})