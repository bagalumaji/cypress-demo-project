describe('Avoid delay',function(){
    it("avoid delay test",function(){
        cy.visit("https://www.amazon.in/");
        cy.get("#twotabsearchtextbox").type("abc charts for kids wall large",{delay:0});
    })
})