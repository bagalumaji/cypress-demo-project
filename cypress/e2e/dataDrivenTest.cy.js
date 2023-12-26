const data = [
    {
        "context": "1",
        "name": "test1.json"
    },
    {
        "context": "2",
        "name": "test2.json"
    }
]
describe("data driven test demo",function (){
    data.forEach(function (testDataFixture){
        describe(testDataFixture.context,function (){
            before(function (){
                cy.fixture(testDataFixture.name).then((data)=>{this.data =data;});
            })
            it('data driven test ', function ()  {
                cy.log(this.data.firstname);
                cy.log(this.data.lastname);
                cy.log(this.data.age);
            });
        })
    })
})