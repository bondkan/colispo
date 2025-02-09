const dashboardelements = {
    // AProposDeNos: () => cy.contains(/À propos de nous|About us/), //langue anglais et francais
    // ContactezNous: () => cy.contains('Contactez-nous'),
    // EnvoyerEmail: () => cy.contains('Envoyer un e-mail'),

    //isalam
    Aproposdenous: '.fs-4', 
    EnvoyerUnemail: '.pb-1', 
    ContactezNous: '.pb-1',

    AjouterColis: ".nav-link:contains('Expédier un colis')",
    //navpackage: 'a[href="/ajouterColis"]',

    navAddAtrip: 'a[href="/proposerTrajet"]',

    seePackages: 'a[href="/voirColis"]:contains("Voir les annonces")',
};
export default dashboardelements;