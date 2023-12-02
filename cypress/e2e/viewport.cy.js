describe("view port tests",()=>{
    it("tc-1-viewport test",()=>{
        cy.visit("https://www.amazon.in");
        cy.wait(5000);
        cy.viewport(400,393);
    })

    it.only("tc-2-viewport test for iPhone SE",()=>{
        cy.visit("https://www.amazon.in");
        cy.wait(5000);
        cy.viewport("iphone-x");
    })
})