describe('Search', function () {
    it('Searches through search function trying to find drill', function () {
        cy.viewport(1280, 720);
        cy.visit("/");
        cy.get("#headerSearch").type('Drill{enter}');
        cy.url().should('include', '/search?keyword=Drill');
        cy.get('.post').contains('Drill').its('length').should('be.gte',1);
    })
});