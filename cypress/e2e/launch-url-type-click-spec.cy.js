describe("type and click scenario", () => {
  it("type and click test", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.get("a[href*='login']").last().click();
  });
});
