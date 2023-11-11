describe("Select drop down", () => {
  it("select dropdown value test", () => {
    cy.visit("https://the-internet.herokuapp.com/dropdown");
    cy.get("#dropdown").select("Option 1");
    cy.wait(3000);
    cy.get("#dropdown").select("2");
    cy.wait(3000);
    cy.get("#dropdown").select(1);
    cy.wait(3000);
    cy.get("#dropdown").select(2);
    cy.wait(3000);
  });
});
