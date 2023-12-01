before(function(){
    cy.log("before-outside-describe-")
})
after(function(){
    cy.log("after-outside-describe-")
})
describe('suite-1',function(){
    before(function(){
        cy.log("before-inside-describe-suite1")
    })
    it("test-1",function(){
        cy.log("suite-1 test-1");
    })
    it("test-2",function(){
        cy.log("suite-1 test-2");
    })
    after(function(){
        cy.log("after-inside-describe-suite1")
    })
})

describe('suite-2',function(){
    before(function(){
        cy.log("before-inside-describe-suite-2")
    })
    it("test-1",function(){
        cy.log("suite-2 test-1");
    })
    it("test-2",function(){
        cy.log("suite-2 test-2");
    })
    after(function(){
        cy.log("after-inside-describe-suie2")
    })
})