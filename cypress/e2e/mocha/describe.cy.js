
describe('suite-1',function(){
   
    it("test-1",function(){
        cy.log("suite-1 test-1");
    })
    it("test-2",function(){
        cy.log("suite-1 test-2");
    })
    it.skip("test-3",function(){
        cy.log("suite-1 test-3");
    })
})
