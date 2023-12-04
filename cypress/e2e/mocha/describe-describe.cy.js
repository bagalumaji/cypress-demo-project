before("setup",()=>{
    cy.log("outside before");
})
describe('suite-1',function(){
    
   describe('suite-2',function(){
    beforeEach("setup",()=>{
        cy.log("inside before");
    })
    it("test-2",function(){
        cy.log("suite-2 test-2");
    })
   });

   it("test-1",function(){
    cy.log("suite-1 test-1");
});

it("test-2",function(){
    cy.log("suite-1 test-2");
});

})
