describe('Tutorial', function () {
    it('Clicks tutorial button to navigate to tutorial page', function () {
        cy.viewport(1280, 720);
        cy.visit("/");
        cy.get("a[href='/tutorial']").click();
        cy.url().should('include', '/tutorial');
        cy.get('div#root').should('exist');
    })
});