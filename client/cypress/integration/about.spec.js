describe('About', function () {
    it('Tests linkedin link on profile picture', function () {
        cy.viewport(1280, 720);
        cy.visit("/about");
        cy.url().should('include', '/about');
        cy.get('div#AboutPage').should('exist');
    })
});
