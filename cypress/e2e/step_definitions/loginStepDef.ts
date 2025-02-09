/**
 * import { Given,When,Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from "../page_object/loginPage";
import HomePage from "../page_object/homePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("I visit the login page", () => {
    loginPage.visit();
});

When("I enter valid credentials", () => {
    loginPage.login("particulier@gmail.com", "0000");
});

When("I click the login button", () => {
    loginPage.elements.submitBtn().click();
});

Then("I should be redirected to the dashboard page", () => {

    // Vérification du titre de la page à l'aide de HomePage
    homePage.elements.title().should('exist').and('be.visible');
    homePage.getTitle().should('eq', 'Transporteur nécessaire ?');

});

**/