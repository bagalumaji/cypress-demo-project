describe("view port tests",()=>{
    it("tc-1-viewport test",()=>{
        cy.visit("https://www.amazon.in");
        cy.wait(2000);
        cy.viewport(400,393);
    })
    it("tc-2-viewport test",()=>{
        cy.visit("https://www.amazon.in");
        cy.wait(2000);
        cy.viewport("iphone-x");
    })

    it("tc-3-viewport test for iPhone SE",()=>{
        cy.visit("https://www.amazon.in");
        cy.wait(2000);
        cy.viewport("iphone-x","landscape");
    })
    
})