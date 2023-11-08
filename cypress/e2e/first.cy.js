describe("first demo test", () => {
  it("demo test", () => {
    cy.visit("https://www.amazon.in");
    console.log(cy.url());
  });
});
