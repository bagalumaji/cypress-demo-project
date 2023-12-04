
describe('element test', () => {
    it("click on first test", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/");
        cy.get('.image').first().click();
    })
    it("click on last test", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/");
        cy.get('.image').last().click();
    })
    it("eq test to click based on index", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/");
        cy.get('.image').eq(2).click();
    })
    
    
})