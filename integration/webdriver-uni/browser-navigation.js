/// <reference types="Cypress"/>

describe("Validate webdriver uni home page links", ()=> {

    it("Confirm links redirect to the correct pages", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(3000)
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'contactus')
        cy.wait(1000)
        
        cy.go('back')
        cy.reload()
        //cy.reload(true) // reloads without using cache
        cy.url().should('include', 'https://webdriveruniversity.com/')
        cy.wait(1000)
        
        cy.go('forward')
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.wait(1000)

        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true})
        cy.wait(1000)
        cy.url().should('include', 'Login-Portal')
        cy.go('back')
        cy.wait(1000)

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
        cy.wait(1000)
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.wait(1000)
    })

})