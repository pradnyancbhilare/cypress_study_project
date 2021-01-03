/// <reference types="Cypress"/>

describe("Verify checkboxes via webdriver uni", ()=> {

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    })

    it("Check-Uncheck and validate checkbox", ()=>{
        // cypress code
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        // cy.get('#checkboxes > :nth-child(1) > input').check()
        // cy.get('#checkboxes > :nth-child(1) > input').should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').should('be.checked')
        cy.wait(3000)
        cy.get('@option-1').uncheck()
        cy.get('@option-1').should('not.be.checked')
    })

    it("Check-Uncheck  multiple checkboxes", ()=>{
        // cypress code
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})

        cy.get('input[type="checkbox"]').as('checkboxes')
        cy.get('@checkboxes').check(["option-1", "option-2", "option-4"])
        cy.wait(3000)
        cy.get('@checkboxes').uncheck(["option-1", "option-2", "option-4"])
    })
})