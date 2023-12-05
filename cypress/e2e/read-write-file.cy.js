describe('read-write-file',()=>{
    it('write file test',function(){
        cy.writeFile("testdata.txt","hello cypress");
    })
    it('append file test',function(){
        cy.writeFile("testdata.txt","\nhello world of javascript ",{flag:"a+"});
    })
    it.only('write json file test',function(){
        cy.writeFile("testdata.json",{data1:"data1",data2:"data2"});
    })
    
})