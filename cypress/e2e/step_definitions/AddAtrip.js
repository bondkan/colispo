import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dashboardelements from '../page_object/dashboard'
import tripeelmets from '../page_object/addAtrip'


beforeEach(()=>{
    cy.intercept('POST','/t_trajets').as('Route_creation');
});

When(`I click on the add trip button`, () => {
    cy.wait(2000)
    cy.get(dashboardelements.navAddAtrip).click()
    cy.wait(2000)

});

When(`I enter the trip details`, () => {
    cy.wait(2000)

    cy.get(tripeelmets.departureCity).eq(0).type('Paris, France', { delay: 100 });
    cy.wait(1000);
    cy.get(tripeelmets.clickDepartureCity).first().click();

    cy.get(tripeelmets.ArrivalCity).should('be.visible').type('Lyon, France', { delay: 100 });
    cy.wait(1000);
    cy.get(tripeelmets.clickArrivalCity).first().click();

    cy.get(tripeelmets.DepartureDate).eq(0).type('2025-03-01')
    cy.get(tripeelmets.AmDepartureDate).click();

    cy.get(tripeelmets.ArrivalDtae).eq(1).type('2025-03-07')
    cy.get(tripeelmets.PmArrivalDtae).click();

    cy.get(tripeelmets.avion).should('be.visible').click();
    cy.wait(1000);

    cy.get(tripeelmets.PNR).should('be.visible')     
        .clear()                 
        .type('123')           
    cy.wait(1000);

    cy.get(tripeelmets.Flight_number).should('exist').type('150');
    cy.wait(1000);


    cy.get(tripeelmets.max_Length).should('exist').type('150');
    cy.wait(1000);

    cy.get(tripeelmets.max_width).should('exist').type('150');
    cy.wait(1000);

    cy.get(tripeelmets.max_height).should('exist').type('150');
    cy.wait(1000);


    cy.get(tripeelmets.Between_5KG_and_30KG).should('exist').click();
    cy.wait(1000);

    cy.get(tripeelmets.Drop_off_hand_to_hand).check().should('be.checked');

    cy.get(tripeelmets.Drop_off_in_relay_point).check().should('be.checked');

    cy.get(tripeelmets.Pick_up_hand_to_hand).check().should('be.checked');

    cy.get(tripeelmets.Pick_up_in_relay_point).check().should('be.checked');

    cy.get(tripeelmets.Add_Trip).click();
    cy.wait(2000);

});

Then(`I should see the trip added`, () => {
   cy.wait('@Route_creation').then((interception)=>{
    expect(interception.response.statusCode).to.eq(201);
   });

   
});

