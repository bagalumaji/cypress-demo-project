
describe('suite-1',function(){
    beforeEach(function(){
        cy.log("before-each-inside-describe-")
    })
    it("test-1",function(){
        cy.log("suite-1 test-1");
    })
    it("test-2",function(){
        cy.log("suite-1 test-2");
    })
    this.afterEach(function(){
        cy.log("after-each-inside-describe-")
    })
})

describe('suite-2',function(){
    it("test-1",function(){
        cy.log("suite-2 test-1");
    })
    it("test-2",function(){
        cy.log("suite-2 test-2");
    })
})