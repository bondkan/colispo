import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dashboardelements from '../page_object/dashboard'

Then(`I verified the element in the footer page`, () => {
    // [Then] Describes the expected outcome or result of the scenario.

    // cy.get(dashboardelements.AProposDeNos).should('contain','À propos de nous').should('be.visible');
    // cy.get(dashboardelements.ContactezNous).should('contain', 'Contactez-nous').should('be.visible');
    // cy.get(dashboardelements.EnvoyerEmail).should('contain', 'Envoyer un e-mail').should('be.visible');
    //  cy.log('Dashboard elements has been leaded')

    //isalam
    cy.get(dashboardelements.Aproposdenous).should('contain', 'À propos de nous').should('be.visible');
    cy.get(dashboardelements.EnvoyerUnemail).should('contain', 'Envoyer un e-mail').should('be.visible');
    cy.get(dashboardelements.ContactezNous).should('contain', 'Contactez-nous').should('be.visible');
    cy.log('Dashboard elements are visible');

});