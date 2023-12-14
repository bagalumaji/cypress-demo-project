
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
    it("contains command test", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/");
        cy.contains('MacBook').click();
    })
    it("find command test", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/");
        //cy.get('div').find(">a>img[alt='MacBook']").click();
        cy.get('div').find('>h4>a').contains('MacBook').click();
    })
    it("filter command test", () => {
        cy.visit("https://naveenautomationlabs.com/opencart/");
        //cy.get('div').find(">a>img[alt='MacBook']").click();
        cy.get('div').find('>h4>').filter('a').contains('MacBook').click();
    })
    
})