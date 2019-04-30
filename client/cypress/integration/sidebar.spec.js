
/*
        This test...

        1. Clicks on the first post on the home page
        2. Loads in the sidebar once redirected to the product's page
        3. Grabs the posts loaded into the sidebar
        4. Finds the title in the first post
        5. Clicks on that post
        6. Loads the new URL and the product's page
        7. Compares the title of that post with selected post that was clicked

        If match = PASS TEST, if no match = FAIL TEST
 */

describe('Sidebar', function () {
    it('Navigates to correct post when it is clicked on in the sidebar', function () {
        cy.viewport(1280, 720);
        cy.visit("/");
        cy.get(".post").first().click();
        cy.get(".sidebar").should("exist");
        cy.get(".sidebar .sidebar-post a span").first().invoke("text").then((text)=> {
            cy.get(".sidebar .sidebar-post a").first().click();
            cy.get(".Name").first().should("have.text", text);
        })
    })
});