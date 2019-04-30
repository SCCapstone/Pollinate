describe('Comments', function () {
    before(function () {
        cy.clearCookies();
    });

    beforeEach(function () {
        Cypress.Cookies.preserveOnce('connect.sid');
    });

    it('Logs in', function () {
        cy.viewport(1280, 720);
        cy.visit("/");
        cy.get("a[href='/login']").click();
        cy.get('input[name="email"]').type('test@email.com');
        cy.get('input[name="password"]').type('test{enter}');

        cy.location('pathname').should('eq', '/');
    });

    it('Posts comment', function () {
        let number = Math.floor(Math.random() * 10000);
        cy.visit("/post/541");
        cy.get('.CodeMirror textarea').type(`test comment ${number}`, {force: true, delay: 0});
        cy.get('#postCommentBtn').click();
        cy.wait(500);
        cy.get('.commentText').last().should('have.text', `test comment ${number}`);
    })
});
