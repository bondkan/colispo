import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dashboardelements from '../page_object/dashboard'
import seePackagesElement from '../page_object/seePackages'

beforeEach(() => {
    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/js*').as('mapsApi');
   // cy.intercept('GET', 'https://api.colispo.com/colis/trajet?trajet=67d1bb5542ef92169de36c09').as('trajetApi');
});

When(`I click on the see packages button`, () => {
    cy.wait(3000)
    cy.get(seePackagesElement.seePackages).should('be.visible').click();
    cy.log('Clicked on "See packages" button');
    cy.wait(3000);
    //cy.get(seePackagesElement.seePackages).should('be.visible');
   // cy.wait(3000)

});

/**Then('I must verify the maps and packages', () => {
    cy.wait(5000)
    //cy.wait('@mapsApi').then((interception) => {
        cy.wait('@mapsApi', { timeout: 10000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200); // Vérifier le code 200 (OK)
    });

    cy.wait(5000)
   // cy.wait('@trajetApi').then((interception) => {
       // expect(interception.response.statusCode).to.eq(200); 
    //});

}); **/

And(`I capture a screen shot`, () => {
    const screenshotName = 'ma_capture_d_ecran'; // Nom personnalisé pour la capture

    // Options de capture d'écran (facultatif)
    const screenshotOptions = {
        // blackout: ['.element-a-masquer'], // Masquer des éléments spécifiques (facultatif)
        // clip: { x: 10, y: 20, width: 200, height: 150 }, // Rogner la capture (facultatif)
        // padding: 10, // Ajouter un espace autour de l'élément capturé (facultatif)
    };

    // 1. Capture d'écran de la page entière
    cy.screenshot(screenshotName, screenshotOptions);

    // 2. Capture d'écran d'un élément spécifique (si nécessaire)
    // cy.get('.element-a-capturer').screenshot('nom_element', screenshotOptions);

    // 3. Assertion pour vérifier que la capture a été prise (facultatif mais recommandé)
    const screenshotPath = `cypress/screenshots/${screenshotName}.png`;
    cy.readFile(screenshotPath).should('exist');

    // 4. (Optionnel) Ajouter des logs pour plus de clarté
    cy.log(`Capture d'écran enregistrée : ${screenshotPath}`);



});