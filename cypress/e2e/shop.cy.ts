context(`Adding items`, () => {
  it(`add items to the basket`, () => {
    // start from the index page
    cy.visit(`http://localhost:3000/shop`, { timeout: 5000 });

    // new page should contain
    cy.get(`h5`).contains(`categories`);

    // click add button
    cy.get(`[data-cy="add-items"]`).first().click();
    //   items counts turns 1
    cy.get(`[data-cy="items-number"]`).should(`contain`, `1`);
    //   pop-up info window
    cy.get(`div`).contains(`was added to cart`);
    //   repeat
    cy.get(`[data-cy="add-items"]`).last().click();
    cy.get(`[data-cy="items-number"]`).should(`contain`, `2`);
    cy.get(`div`).contains(`was added to cart`);
    //   go cart page
    cy.get(`[data-cy="go-cart"]`).click();
    //   check url
    cy.location(`pathname`).should(`include`, `cart`);
    //   check added items
    cy.get(`h5`).should(`contain`, `Awesome Candle`);
    cy.get(`h5`).should(`contain`, `Soft Pillow`);
  });
  it(`add liked products`, () => {
    cy.visit(`http://localhost:3000/shop`, { timeout: 5000 });
    cy.location(`pathname`).should(`include`, `shop`);

    // adding to liked
    cy.get(`[data-cy="add-liked"]`).first().click();
    cy.get(`div`).contains(`was added to liked products`);
    // removing from added
    cy.get(`[data-cy="add-liked"]`).first().click();
    cy.get(`div`).contains(`was removed from liked products`);

    cy.get(`[data-cy="add-liked"]`).first().click();
    cy.get(`[data-cy="add-liked"]`).last().click();
  });
});

export {};
