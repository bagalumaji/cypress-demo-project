describe("Navigation Commands", () => {
  it("Navigation Commands test", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("a").last().click();
    cy.go("back");
    cy.wait(3000);
    cy.go("forward");
    cy.wait(3000);
  });
});
