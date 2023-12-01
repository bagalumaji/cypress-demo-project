
describe('suite-1',function(){
   
    it.only("test-1",function(){
        cy.log("suite-1 test-1");
    })
    it.only("test-2",function(){
        cy.log("suite-1 test-2");
    })
    it("test-3",function(){
        cy.log("suite-1 test-3");
    })
})
