import contactUsPage_PO from '../../support/pageObjects/webdriver-uni/ContactUSPage_PO'
import HomePage_PO from '../../support/pageObjects/webdriver-uni/HomePage_PO'
/// <reference types="Cypress"/>

describe("Test contact us form on  the webdriver university page", () => {
    const homepage_PO = new HomePage_PO()
    const contactuspage_PO = new contactUsPage_PO()

    beforeEach(() => {
        //cy.visit(Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html")
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })

        homepage_PO.visitHomePage()
        homepage_PO.clickOn_ContactUs_Button() 
    })

    before(() => {
        cy.fixture('example').then(data => {
            // this.data = data
            globalThis.data = data
        })
    })

    it("Should be able to submit the successfully the contact us form", () => {
        // cypress code
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contactuspage_PO.contactUsDataEntry(Cypress.env('first_name'), data.last_name, data.email, data.comments)
        //cy.webdriverUniContactUsFormSubmission(Cypress.env('first_name'), data.last_name, data.email, data.comments)
        cy.wait(1000)
        cy.get('[type="reset"]').click()
        cy.wait(1000)
    })

    it("Should fail to submit the contact us form as all field are required", () => {
        // cypress code       
        contactuspage_PO.contactUsDataEntry(data.first_name, data.last_name, data.email, data.comments)
        //cy.webdriverUniContactUsFormSubmission(data.first_name, data.last_name, data.email, data.comments)
        cy.wait(1000)
        cy.get('[type="submit"]').click()
        cy.wait(1000)
        cy.get('body').should('have.text', '\n\n\n Error: Invalid email address\n\n\n')
        cy.get('body').contains('Error: Invalid email address')
    })

})