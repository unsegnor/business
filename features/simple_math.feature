# features/simple_math.feature
Feature: Simple maths
  In order to do maths
  As a developer
  I want to increment variables

  Scenario: increment
    Given a variable set to 1
    When I increment the variable by 1
    Then the variable should contain 2

  Scenario Outline: much more complex increment stuff
    Given a variable set to <var>
    When I increment the variable by <increment>
    Then the variable should contain <result>

    Examples:
      | var | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |

  Scenario: decrement
    Given a variable set to 1
    When I decrement the variable by 1
    Then the variable should contain 0

  Scenario Outline: much more complex decrement stuff
    Given a variable set to <var>
    When I decrement the variable by <decrement>
    Then the variable should contain <result>

    Examples:
      | var | decrement | result |
      | 100 |         5 |     95 |
      |  99 |      1234 |  -1135 |
      |  12 |         5 |      7 |
