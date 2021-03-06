describe('Post', function () {
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

  let title;
  it('Posts new deal', function () {
    cy.get('#postDealBtn').click();
    cy.fixture('create_post_data').then(post => {
      title = post.title;
      cy.get('input[name="title"]').type(post.title, {delay: 0});
      cy.get('input[name="price"]').type(post.price, {delay: 0});
      cy.get('input[name="imageUrl"]').type(post.imageUrl, {delay: 0});
      cy.get('input[name="link"]').type(post.link, {delay: 0});
      cy.get('.CodeMirror textarea').type(post.description, {force: true, delay: 0});
      cy.get('select[name="category"]').select('technology');
      cy.get('#NewPostForm').submit();

      cy.get('#recentPosts .post').first().should('contain', post.title);
    })
  });

  it('Delete new deal', function () {
    cy.get('#recentPosts .post').first().click();
    cy.get('.details .Name').should('contain', title);
    cy.get('#deletePostBtn').click();
    cy.get('#recentPosts .post').first().should('not.contain', title);
  })
});
