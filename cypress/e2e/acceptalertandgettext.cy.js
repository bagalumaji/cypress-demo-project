describe("alert handle",()=>{
    it("alert ok - test",()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.contains('Click for JS Alert').click();
        cy.on("window:alert",function (msg){
           expect(msg).to.be.equal("I am a JS Alert");
        });

    })
})