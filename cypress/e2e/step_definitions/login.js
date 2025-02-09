import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginelements from '../page_object/login'

Given(`I visit the login page`, () => {
    // [Given] Sets up the initial state of the system.

    cy.visit('https://www.colispo.com/connection');
    cy.wait(2000);
    cy.get(loginelements.connexionasert).should('contain', 'Connexion').should('be.visible');

});

When(`I enter valid credentials`, () => {
    // [When] Describes the action or event that triggers the scenario.

    cy.get(loginelements.InputEmail).type('particulier@gmail.com');
    cy.get(loginelements.InputPassword).type('0000');

});

When(`I click the login button`, () => {
    // [When] Describes the action or event that triggers the scenario.

    cy.get(loginelements.ButtonSubmit).click();
});

Then(`I should be redirected to the dashboard page`, () => {
    // [Then] Describes the expected outcome or result of the scenario.

    cy.title().should('eq', 'Colispo');

});

When(`I enter invalid credentials`, () => {
    // [When] Describes the action or event that triggers the scenario.

    cy.get(loginelements.InputEmail).type('particulier9999@gmail.com');
    cy.get(loginelements.InputPassword).type('00000000');
    cy.get(loginelements.ButtonSubmit).click();

});


When(`I should see an error message`, () => {
    // [When] Describes the action or event that triggers the scenario.
    cy.wait(1000);
    cy.get(loginelements.EmailIncorrect).should('contain', 'Aucun compte trouvé avec cette adresse e-mail.Veuillez vérifier votre e-mail.').should('be.visible');

});