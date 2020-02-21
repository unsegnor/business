const ObjectRepository = require('persistent-programming/adapters/InMemoryObjectRepository')

describe('CreateObject', function(){
    let business, user1, user2, objectRepository

    beforeEach(function(){
        user1 = {credentials: 'user1Credentials'}
        user2 = {credentials: 'user2Credentials'}
        objectRepository = ObjectRepository()
        business = Business({objectRepository})
    })

    it('must create objects in the user space', async function(){
        await business.CreateObject({credentials: user1.credentials})
        var objects = await business.GetAllObjects({credentials: user1.credentials})
        expect(objects.length).to.equal(1)
    })

    it('must not create objects in other users space', async function(){
        await business.CreateObject({credentials: user2.credentials})
        var objects = await business.GetAllObjects({credentials: user1.credentials})
        expect(objects.length).to.equal(0)
    })

    //Should we have a selectObject use case
    //and then if we do not specify the object in the use case addField
    //we suppose it is the selected object which is being modified??

    //I think that's the way to avoid exposing the "artificial" id
    //in fact this is what we do when we develop with the concept of a "client" in mind

    //it is like if the concepts of "session" and "request" where present from the very beginning of the development
    //that is why we classify the actions in use cases that never include "select"
    //but it does not mean that this logic is not there
    //we still have to implement it but on every client

    //so we may include the concepts of session and request in the logic
    //consider this case:
    //  the user selects an object using a client, lets say the laptop
    //  then the user gets another device, the mobile, and selects another object

    //maybe the second step should be impossible
    //I mean if the user selected an object in the laptop
    //whe opening the application on the mobile that same object should be selected
    //that would mean that the "session" concept is IN the business logic
    //and in this particular case there is only one session
    //if we wanted to let the user use different sessions we should enable it with a use case
    //this allows us to control de sessions independently from any infrastructure
    //I mean, we could maybe create a new session on the same device or share it among devices
    //the session would then be part of the business logic :)

    //clients should then ask for the state of the application to show it
    //continuously, without implementing any logic
    //they will become just "views"

    //the logic generates events that must be listened by the views in order to update themselves

    //with this approach we have to develop every use case steps in the logic
    //every path, exactly as we would have done in the client, but once and for all the views

    //I can imagine then the view as a list of possible actions given the user state
    //given we are in the initial state we could have differente actions available
    //all of them determined with buttons? is there way for more complex interfaces?
    //how will they work? those dashboards with lots of quick buttons to make things...
    //we have to think how could that work over a business logic centered application (with events)

    //in the case we wanted to create a "select object" use case and if we wanted later to stick to the REST architecture
    //we should somehow configure the state so that some of the information is not stored in the server
    //but in the token sent to the client or in a cache
    //would it be possible to configure that with the current state interface??
    //well we would need to somehow determine the data that is actually storing client state
    //so that we could store it in the client... is it actually the client state that we want to store in the clien??
    //or is it the session specific data? that concept of session is the one we may want to store in the client
    //because the data about the user such as the username or the accessing permissions could change between different requests
    //so what is the minimum data that we should store in the client according to REST?
    //nothing? could we just send the credentials and the desired use case on every call and then use the state to get the rest of the information
    //in fact we are doing that also in rest, when we make call to add a relation between two elements we send their ids
    //so that is not all the information needed to perform the request
    //you need to query the application state in order to know wether that elements actually exist and if they are already related
    //that information is part of the state and it is not sent with the request
    //so what is the difference between doing that and making what we would make on a usable interface:
    //execute the usecase "list teachers" or "find teacher"
    //execute the usecase "select teacher"
    //execute the usecase "set the teacher as the tutor of a student"
    //execute the usecase "list students" or "find student" or "create student"
    //execute the usecase "select a student" (won't be necessary with "create student")

    //then the last usecase: "select a student" will actually be the one that completes the operation of setting a teacher as its tutor
    //but if we close the application and open it again we should stay in the same step, for example listing the students

    //this approach implies codifying in the business logic all the possible use cases with their interactions with the user
    //you could say that is too much but... you will have to think on them and test them and code them on the client anyway
    //moreover with this approach you can simplify any client development
    //it will be able to query the available actions in the current state
    //and show a button or whatever visual element for each of the available actions

    //and what if I want to make a new use case that is not registered on the business logic??
    //you can't XD
    //if there is a new use case, if there is a new way of interacting with the system you must reflect it on the business logic
    //but what if I just want to have the business logic agnostic of the specific interactions of the use cases?
    //aren't there abstraction layers such as they are in the business logic?
    //yes, but the abstraction layer that is exposed is the one where the use cases are
    //you would not expose any of the internal layers so why are we doing that with the apis?

    //we should only expose whole and controlled use cases with their interactions
    
    //and what if I want to have a dashboard with lots of information and buttons to make things?
    //each of the parts of the dashboard showing information should use one of the use cases for getting the information
    //each of the buttons should be related with an existing use case

    //then if the user says... yes but I would like this button to be shown only when bla bla bla
    //that requires a modification in the business logic, not in the client because you want to block some functionality under some specific conditions
    //if it is a matter of visualization then you can stick to css or any other visual configuration of the client which is not part of the business logic

    //thus the client will just be asking for the possible actions to be taken from the current state
    //and allowing the user to select the one they want or to answer the questions that the system requires
    //like a console application

    //then the design of the use cases gets more heavy as we should think on the interactions with the system and the possible paths that could happen

    //for example: create an object
    
    //if I call to create an object (or any other use case) the system would need to authenticate the user
    //so you call with some kind of credentials... 

    //now I have a question... what is the initial state??
    //that question also arises when you are actually designing the clien, what do we show in the main page?

    //the initial state for the user is unauthenticated
    //so the unique use case to be shown unless there are some services for unauthenticated users should be "authenticate"

    //then.. how do I control that the user is not executing any use case that is not allowed from its state??
    //we should have some function to query the possible actions from the current state
    //and that function will be used by all the use cases in order to know whether they can continue being executed or not

    //in fact the only use case that needs to be always available to everyone is the one to show the available use cases
    //the "ask for what can I do now?" use case

    //and in the definition of the use cases we would have questions to the user that have to be handled by the client
    //in fact the "select teacher" will be one of that requests

    //but users may not want to navigate all the state machine to find everything that they can do
    //so it would be useful to show also the possible actions to take that could be reached from the current state
    //so that the user then can have a true vision of its capabilities

    //then for example every user could be able to call the "what can I do" use case
    //and it should always show the "create an object" use case
    //because it is possible but the first step on this path would be "authenticate"
    //and after that it could be that the state has changed in a way that the requested action is not available anymore
    //in fact it could happen on every step of the path
    //well we could always cancel the current use case and return to the initial state

    //let's imagine that some users can not create objects
    //then the use case won't be available for the user after authenticating
    //and then the use case will throw an error
    //and notify the user that the use case coud not be completed because of the lack of permissions or whatever
    //and what now? the use case will led the system to the initial state

    //in fact it should show any available use case and let the user know why it cannot be accessed
    //imagine there is a use case that is only available on tuesday
    //the user should know why... somehow...
    //would it be better to let the user try to execute the use case and receive the error message?
    //or let the user ask why the use case is not available and receive the reason?

    //and how to perform that dialog? the system needs an interface with the user, something to notify the user
    //so when instantiating the system we should provide that interface
    //that interface will ask the implementation to have one method for each question that the system can ask to the user
    //that way you will be able to build the dialogs or whatever other format to show that questions to the user
    //you could even use other systems like telegram or any other messaging without changing the business logic
    
    //this way the system will have defined both:
    //the requests that the user can make to it
    //and the requests that it can make to the user... at any time

    //each method will have their own parameters, for example
    //the select teacher method will receive a list of the available teachers

    //what if I just want to select a bunch of teachers and then see what to do with them?
    //then it should exist the use case "select some teachers" and some other use cases following that


})