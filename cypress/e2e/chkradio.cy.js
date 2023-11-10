describe("Demo test for checkbox and radio button", () => {
  it("check box and radio button test", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.get("#column-right a[href*='register']").click();
    cy.get("#input-newsletter-yes").scrollIntoView().check({ force: true });
    cy.get("#input-agree").check({ force: true });
    cy.wait(5000);
  });
});
