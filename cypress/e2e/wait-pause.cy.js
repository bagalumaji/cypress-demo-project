describe("wait and pause demo", () => {
  it("wait commmand test", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("a[href='/horizontal_slider']").click();
    //cy.wait(() => cy.get("h4").contains("Horizontal Slider"));
    cy.wait(3000);
    cy.get("h3").contains("Horizontal Slider");
    cy.pause(1);
    cy.get("a").contains("Elemental Selenium");
  });
});
