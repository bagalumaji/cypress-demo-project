const testData = [{"name": "test1", "context": "1"}, {"name": "test1", "context": "1"}];

describe("data driven test demo",function (){
    testData.forEach(function(testDataFixture){
       describe(testDataFixture.context,function (){
           before(function (){
               cy.fixture(testDataFixture.name).then(function (data){
                   this.data = data;
               })
           })
           it('data driven test : '+testDataFixture.context, function ()  {
               cy.log(this.data.firstname);
               cy.log(this.data.lastname);
               cy.log(this.data.age);
           })
       })
    })
})