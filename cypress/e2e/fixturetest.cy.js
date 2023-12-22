describe("data driven test",()=>{

    before(function (){
        cy.fixture("login").then((data)=>{this.data =data;});
    })
    it('data driven test ', function ()  {
        cy.log(this.data.username);
        cy.log(this.data.password);
        cy.log(this.data.data);
    });
})