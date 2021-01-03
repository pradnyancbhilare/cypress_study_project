/// <reference types="Cypress"/>

describe("Cypress Web Security", ()=> {

    it("Validate visiting two different domains", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")
    })

    it("Validate visiting two different domains via user actions", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({force: true})
    })

})