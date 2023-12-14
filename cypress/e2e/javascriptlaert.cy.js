describe("alert handle",()=>{
    it("alert ok - test",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.contains('Click for JS Alert').click();

        cy.get("#result").should("be.visible");
    })
})