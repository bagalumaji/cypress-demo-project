describe("Data driven test", () => {
    it("data driven test", function () {
        cy.visit("https://demo.testfire.net/login.jsp");
        cy.fixture("login.json").then((data) => {
            cy.get("#uid").type(data.username);
            cy.get("#passw").type(data.password);
        });
        cy.get("input[value='Login']").click();
        cy.get("input[value='Login']").should("be.visible")
    })
})