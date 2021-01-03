/// <reference types="Cypress"/>

describe("Test contact us form on  the automation test store page", ()=> {

    before(()=>{
        cy.fixture('userDetails').as('user')
    })

    it("Should be able to submit the successfully the contact us form", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5) > a').click({force: true})
        //cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click({force: true})
        cy.xpath("//a[contains(@href, 'contact')]").click({force: true}).then((linkText)=>{
            cy.log('Selected contact us link: ' + linkText.text())
        })
        cy.wait(2000)
        cy.get('.heading3').should('have.text', 'Contact Us Form')
        cy.get('@user').then(user=>{
            cy.get('#ContactUsFrm_first_name').type(user.email)
            cy.get('#ContactUsFrm_email').type(user.first_name)
        })
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional support?")
        cy.get('button[type="reset"]').click()
        cy.wait(2000)
        cy.get('.heading3').should('have.text', 'Contact Us Form')
    })

})