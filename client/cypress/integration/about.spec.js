describe('About', function () {
    it('It goes to the about page ', function () {
        cy.viewport(1280, 720);
        cy.visit("/");
        cy.get("a[href='/about']").click();
        cy.url().should('include', '/about');
        cy.get('div#AboutPage').should('exist');

    })
});