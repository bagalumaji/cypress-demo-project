describe("type and click scenario", () => {
  it("type and click test", () => {
    cy.visit(
      "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
    );
    cy.get("a[href*='login']").last().click();
    cy.get("#input-email").type("umajibagal23@gmail.com");
    cy.get("#input-password").type("Umaji@123");
    cy.get("input[value='Login']").click();
    cy.contains("My Account");
  });
});
