Feature: prueba validation

Scenario Outline: Login Page invalid credentials
    Given I access to login page
    When Incorrect User <user> and Password <password> are typed
    Then Error Message is displayed
    
    Examples:
        | user           | password |
        | 'Rose'         | '345@/'  |
        | 'Mery'         | '12345'  |
        | 'Jane'         | 'Testing'|
    
Scenario: Login Page empty credentials
    Given I access to login page
    When Incorrect User and password are not typed
    Then Error Message is displayed

Scenario: Login Page valid credentials
    Given I access to login page
    When Correct User and password are typed
    Then Contact List is Displayed