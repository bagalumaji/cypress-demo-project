describe("mouse iver test suite",()=>{
    it('mouse over test - 1', () => {
        cy.visit("https://www.letskodeit.com/practice");
        //  not working due to css selector
        //cy.get("#mousehover").trigger("mouseover");
        cy.get(".mouse-hover-content").invoke("show");
    });
})