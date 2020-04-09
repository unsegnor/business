const {expect} = require('chai')
const expectToThrow = require('expect-to-throw')
const FakeObject = require('./FakeObject')

describe('FakeObject', function(){
    it('get must return the previously setted value', async function(){
        var fakeObject = FakeObject()
        var value = "value"
        await fakeObject.set("property", value)
        var objectValue = await fakeObject.get("property")
        expect(objectValue).to.equal(value)
    })

    it('get must be able to save different values for different properties', async function(){
        var fakeObject = FakeObject()
        var value1 = "value1"
        var value2 = "value2"
        await fakeObject.set("property1", value1)
        await fakeObject.set("property2", value2)
        var objectValue1 = await fakeObject.get("property1")
        var objectValue2 = await fakeObject.get("property2")
        expect(objectValue1).to.equal(value1)
        expect(objectValue2).to.equal(value2)
    })

    it('get must throw when the value has not been setted', async function(){
        var fakeObject = FakeObject()
        await expectToThrow('property "property" was not setted', async function(){
            await fakeObject.get("property")
        })
    })
})