Feature: Creating objects
  In order to model my domain
  As a user
  I want to be able to create objects on the system

  Scenario: Creating an object without any other info
    Given Jhon created an object
    When Jhon asks for their objects
    Then Jhon must receive an object

  Scenario: Objects are not shared between different users
    Given Jhon created an object
    When Lily asks for their objects
    Then Lily must receive no objects

  Scenario: Objects can't be created by unauthenticated users
    When Unknown creates an object
    And Unknown asks for their objects
    Then Unknown must receive no objects
    And Unknown must receive an error message saying that "Unauthenticated users cannot create objects"
  