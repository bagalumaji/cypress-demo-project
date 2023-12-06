describe('contains with ignore case',function(){
    it("contains with ignore case",function(){
        cy.visit("https://www.amazon.in/");
        cy.contains("mobile",{matchCase:false}).click({force:true});
        //cy.wait(6000);
         })
})