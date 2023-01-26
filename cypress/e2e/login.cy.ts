describe(`Login page`, () => {
  before(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit(`http://localhost:3000`, { timeout: 5000 });
  });
  it(`Login with Google`, () => {
    const username = Cypress.env(`googleUser`);
    const password = Cypress.env(`googlePassword`);
    const loginUrl = Cypress.env(`siteName`);
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      isPopup: true,
      loginSelector: `a[href="${Cypress.env(
        `SITE_NAME`,
      )}/api/auth/signin/google"]`,
      postLoginSelector: `.unread-count`,
    };

    return cy.task(`GoogleSocialLogin`, socialLoginOptions).then(() => {
      cy.clearCookies();
    });
  });
});
export {};
