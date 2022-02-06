// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('{actor} created an object', async function (actor) {
  await actor.createObject()
});

When('{actor} creates an object', async function (actor) {
  await actor.createObject()
});

When('{actor} asks for their objects', async function (actor) {
  await actor.getObjects()
});

Then('{actor} must receive an object', async function (actor) {
  expect(await actor.hasReceivedAnObject()).to.equal(true)
});

Then('{actor} must receive no objects', async function (actor) {
  expect(await actor.hasReceivedAnObject()).to.equal(false)
});

Then('{actor} must receive an error message saying that {string}', async function (actor, expectedMessage) {
  expect(await actor.hasReceivedError(expectedMessage)).to.equal(true)
});
