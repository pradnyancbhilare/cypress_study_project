/// <reference types="Cypress"/>

describe("Verifying variables, cypress commands and JQuery commands", ()=> {

    it("Navigating to specific product pages", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/")
        // Works but not recommended
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")        
        // skincareLink.click()

        // Recommended approach.
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare") .click()
    })


    it("Navigating to specific product Makeup", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        //const header = cy.get("//span[@class='maintext']")
        cy.get(".maintext").then((headerText)=>{
            const headerTxt = headerText.text()
            cy.log("Found header text: " + headerTxt)
            expect(headerTxt).is.eq('Makeup')
        })
    })

    it("Validate properties of the contact us page", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        // JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then((text)=>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            // Embedded commands (Closures)
            cy.get('#field_11').then((fnText) => {
                cy.log(fnText.text())
            })

        })

    })


})