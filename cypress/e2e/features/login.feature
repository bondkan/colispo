Feature: User login

    Background: Background name
        Given I visit the login page
    Scenario: User can login with valid credentials

        When I enter valid credentials
        And I click the login button
        Then I should be redirected to the dashboard page

    Scenario: User cannot login with invalid credentials

        When I enter invalid credentials 
        Then I should see an error message

 
