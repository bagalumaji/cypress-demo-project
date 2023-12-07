describe("file upload ",function (){

    it('file upload test', () => {
        cy.visit("https://document-editor.pdffiller.com/pdf-document-editor?gad_source=1&gclid=EAIaIQobChMIuqS3jNz9ggMV4V4PAh27HAHPEAAYAiAAEgKOL_D_BwE");
        cy.contains("Select from device").selectFile("testdata.txt",{action:"drag-drop"});
    });

})
