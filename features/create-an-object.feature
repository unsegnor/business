Feature: Creating objects
  In order to model my domain
  As a user
  I want to be able to create objects on the system

  Scenario: Creating an object without any other info
    Given Jhon created an object
    When Jhon asks for their objects
    Then an object must be returned

  Scenario: Objects are not shared between different users
    Given Jhon created an object
    When Lily asks for their objects
    Then no objects must be returned

  Scenario: Objects can't be created by unauthenticated users
    When Unknown creates an object
    And Unknown asks for their objects
    Then no objects must be returned
    And Unkown must receive an error message saying that "Unauthenticated users cannot create objects"