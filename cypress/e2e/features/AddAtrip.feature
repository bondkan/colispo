Feature: Add a trip
    Background: User can login
        Given I visit the login page
        When I enter valid credentials
        And I click the login button
        #Then I should be redirected to the dashboard page

    Scenario: Add a trip
     
        When I click on the add trip button
        And I enter the trip details
        Then I should see the trip added