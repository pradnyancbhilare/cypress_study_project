/// <reference types="Cypress"/>

describe("Verify dropdowns lists via webdriver uni", ()=> {

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/")
    })

    it("Select and validate dropdowns lists", ()=>{
        // cypress code
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('#dropdowm-menu-1').select('SQL')
        cy.get('#dropdowm-menu-1').should('have.value', 'sql')
        cy.wait(2000)
        cy.get('#dropdowm-menu-2').select('junit')
        cy.get('#dropdowm-menu-2').should('have.value', 'junit')
        cy.wait(2000)
        cy.get('#dropdowm-menu-3').select('CSS')
        cy.get('#dropdowm-menu-3').contains('CSS')
        cy.wait(2000)
    })

})