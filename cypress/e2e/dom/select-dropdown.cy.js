describe("select dropdown test",function(){
    it('select value from select dropdown test',function(){
        cy.visit("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
        cy.get("#select-demo").select("Monday").should("have.value","Monday");
        cy.wait(3000);
        cy.get("#select-demo").select(6);
        cy.get("#select-demo option:selected").should("have.text","Friday");
    })
    it.only('select value from select dropdown test',function(){
        cy.visit("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
        cy.get("#multi-select").select([1,3,5]).should("have.values",['Florida',"New York","Texas"]);
        cy.wait(3000);

        //cy.get("#select-demo option:selected").should("have.value","Friday");
    })
})