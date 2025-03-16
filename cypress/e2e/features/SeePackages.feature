Feature: See packages
    Background: User can login
        Given I visit the login page
        When I enter valid credentials
        And I click the login button
        #Then I should be redirected to the dashboard page

    Scenario: See a packege
     
        When I click on the see packages button
       // Then I must verify the maps and packages
        And I capture a screen shot