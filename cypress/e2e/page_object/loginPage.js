/**class LoginPage {

    elements = {
        username: () => cy.get('#exampleInputEmail'), //id utilise "#" ET class utilise "."
        password: () => cy.get('#exampleInputPassword'),
        submitBtn: () => cy.get('.btn-user'),
    }

    // Méthodes direction vers Url
    visit() {
        cy.visit('https://colispo.com/connection'); // Ajoutez l'URL de votre page de login
    }

    //Méthode login
    login(username, password) {
        this.elements.username().type(username);
        this.elements.password().type(password);
        this.elements.submitBtn().click();
    }



}

export default LoginPage;**/