describe('Avoid delay',function(){
    it("avoid delay test",function(){
        cy.visit("https://www.amazon.in/");
        cy.contains("mobile",{matchCase:false}).click({force:true});
        //cy.wait(6000);
         })
})