Feature: Add a package
    Background: User can login
        Given I visit the login page
        When I enter valid credentials
        And I click the login button
        Then I should be redirected to the dashboard page

    Scenario: Add a package
        #Given I am on the dashboard
        When I click on the add package button
        And I enter the package details

        Then I should see the package added