context(`Navigation`, () => {
  it(`should navigate to the about page`, () => {
    // start from the index page
    cy.visit(Cypress.env(`siteName`), { timeout: 5000 });

    // find the link with a href attribute containing shop and click it
    cy.get(`a[href*="shop"]`).click();

    // new url should include /shop
    cy.url().should(`include`, `/shop`);

    // new page should contain
    cy.get(`h5`).contains(`categories`);

    // get back to previous page
    cy.go(`back`);
    cy.location(`pathname`).should(`not.include`, `shop`);
    cy.go(`forward`);
    cy.location(`pathname`).should(`include`, `shop`);
  });
});
export {};
