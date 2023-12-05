describe("select dropdown test",function(){
    it('select value from select dropdown test',function(){
        cy.visit("https://www.amazon.in/");
        cy.get("#twotabsearchtextbox").type("iPhone");
       cy.get("div").find(">span").contains("15 pro max").click();
    })
   
})