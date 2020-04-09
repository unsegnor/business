const {expect} = require('chai')
const ObjectRepository = require('persistent-programming/adapters/InMemoryObjectRepository')
const Business = require('../domain/Business')
const FakeRequest = require('../test-doubles/FakeObject')
const FakeResponse = require('../test-doubles/FakeObject')

describe('CreateObject', function(){
    let business,
    user1, user2, notAuthenticatedUser,
    objectRepository,
    createObjectRequest, createObjectResponse,
    getAllObjectsRequest, getAllObjectsResponse

    beforeEach(function(){
        user1 = {credentials: 'user1Credentials'}
        user2 = {credentials: 'user2Credentials'}
        notAuthenticatedUser = {credentials: 'invalidCredentials'}
        objectRepository = ObjectRepository()
        business = Business({objectRepository})
        createObjectRequest = FakeRequest()
        createObjectResponse = FakeResponse()
        getAllObjectsRequest = FakeRequest()
        getAllObjectsResponse = FakeRequest()
    })

    it('must create objects in the user space', async function(){
        await business.createObject()
        await business.getAllObjects({getAllObjectsRequest, getAllObjectsResponse})
        var result = await getAllObjectsResponse.get("result")
        expect(result.length).to.equal(1)
    })

    it('must not create objects in other users space', async function(){
        await createObjectRequest.set("user", user2)
        await business.createObject({createObjectRequest, createObjectResponse})
        await business.getAllObjects({getAllObjectsRequest, getAllObjectsResponse})
        var result = await getAllObjectsResponse.get("result")
        expect(result.length).to.equal(0)
    })

    it('must notify an error if the user could not be authenticated', async function(){
        await createObjectRequest.set("user", notAuthenticatedUser)
        await business.createObject({createObjectRequest, createObjectResponse})
        var errors = await getAllObjectsResponse.get("errors")
        expect(errors).to.contain("User could not be authenticated")
    })
})