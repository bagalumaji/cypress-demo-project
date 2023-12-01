before(function(){
    cy.log("before-outside-describe-")
})
after(function(){
    cy.log("after-outside-describe-")
})
describe('suite-1',function(){
    // before1(function(){
    //     cy.log("before-inside-describe-")
    // })
    it("test-1",function(){
        cy.log("suite-1 test-1");
    })
    it("test-2",function(){
        cy.log("suite-1 test-2");
    })
    // after1(function(){
    //     cy.log("after-inside-describe-")
    // })
})

describe('suite-2',function(){
    it("test-1",function(){
        cy.log("suite-2 test-1");
    })
    it("test-2",function(){
        cy.log("suite-2 test-2");
    })
})