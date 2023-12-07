describe("Data driven test",()=>{
    it("data driven test",()=>{
     cy.visit("https://demo.testfire.net/login.jsp");
        cy.get("#uid").type("asdc");
        cy.get("#passw").type("test123");
        cy.get("input[value='Login']").click();
        cy.get("input[value='Login']").should("be.visible")
    })
})