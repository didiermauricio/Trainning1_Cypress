Feature: prueba validation

Background:
    Given I access to login page

Scenario: Login Page invalid credentials
    When Incorrect User and password are typed
    Then Error Message is displayed
    
    
Scenario: Login Page empty credentials
    When Incorrect User and password are not typed
    Then Error Message is displayed

Scenario: Login Page valid credentials
    When Correct User and password are typed
    Then Contact List is Displayed