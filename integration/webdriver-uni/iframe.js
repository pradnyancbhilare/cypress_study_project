/// <reference types="Cypress"/>

describe("Handling iFrame and Modals", ()=> {

    beforeEach(()=>{
        cy.navigateTo_WebdriverUni_HomePage()
        //cy.visit("https://webdriveruniversity.com/")
    })

    it("Handle webdriver univ iframe and modal", ()=>{
        // cypress code
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@modal').should($expectedText => {
            const text = $expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com ')
        })

        cy.get('@modal').contains('Close').click();
    })
})