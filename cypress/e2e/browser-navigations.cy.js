describe('browser navigations test',function(){
    it("navigation test",function(){
        cy.visit("https://naveenautomationlabs.com/opencart/");
        cy.contains("Software").click();
        cy.contains('There are no products to list in this category.')
        cy.go("back");
        cy.go("forward");
        cy.contains("There are no products to list in this category.");
        cy.go(-1);
        cy.go(1);
        cy.contains("There are no products to list in this category.");

    })
})