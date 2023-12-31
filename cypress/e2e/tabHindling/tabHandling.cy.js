describe("tab handling suite",()=>{
    it.skip('should have href attr', () => {
        cy.visit("https://www.letskodeit.com/practice")
        cy.get("#opentab")
            .should("have.attr","href")
            .and("include","/courses");

    });
    it.skip('click on new tab test', () => {
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#opentab")
            .invoke("removeAttr","target")
            .click()
            .url()
            .should("include","/courses");
        cy.go(-1)
            .url()
            .should("contains","practice")
    });
    it.skip('click on new tab test -2', () => {
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#opentab")
            .invoke("attr","target","_self")
            .click()
            .url()
            .should("include","/courses");
    });
    it('click on new tab test 2', () => {
        cy.visit("https://www.letskodeit.com/practice");
        cy.get("#opentab").then((tab)=>{
            const newTab = tab.prop("href");
            cy.visit(newTab)
                .url()
                .should("include","/courses");
        })
        cy.go(-1)
            .url()
            .should("include","practice");
    });
})