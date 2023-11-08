describe("first demo test", () => {
  it("demo test", () => {
    cy.visit("https://www.amazon.in");
    cy.url().should("include", "amazon");
    cy.title().should("include", "Online Shopping");
  });
});
