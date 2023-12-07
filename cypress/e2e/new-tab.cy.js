describe('new tab',function(){
    it("new tab test",function(){
        cy.visit("https://selectorshub.com/xpath-practice-page/");
        cy.contains("user role",{matchCase:false}).invoke("removeAttr","target").click({force:true});
    })
})