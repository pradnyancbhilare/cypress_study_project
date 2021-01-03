/// <reference types="Cypress"/>

describe("Verify radiobuttons via webdriver uni", ()=> {

    // beforeEach(()=>{
    //     cy.visit("https://webdriveruniversity.com/")
    // })

    before(() => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
    })

    it("Click and validate radibuttons", ()=>{
        // cypress code
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('#radio-buttons').find('input[value="yellow"]').click()
        cy.get('#radio-buttons').find('input[value="yellow"]').should('be.checked')
        cy.wait(2000)
        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').first().should('be.checked')
        cy.wait(2000)
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(1).should('be.checked')
        cy.wait(2000)
    })

    it("Validate states of specific radibuttons", ()=>{
        // cypress code
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.wait(2000)
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('[value="pumpkin"]').should('not.be.checked')
    })

})