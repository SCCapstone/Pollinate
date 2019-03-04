describe('Header Links', function () {
  it('Clicks login button to navigate to login page', function () {
    cy.viewport(1280, 720);
    cy.visit("/");
    cy.get("a[href='/login']").click();
    cy.url().should('include', '/login');
    cy.get('div#LoginPage').should('exist');
  })
});
