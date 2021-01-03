import HomePage_PO from '../../support/pageObjects/automation-test-store/HomePage_PO'
import HairCarePage_PO from '../../support/pageObjects/automation-test-store/HairCarePage_PO'
/// <reference types="Cypress"/>

describe("Add multiple items to basket", () => {
    const homepage_PO = new HomePage_PO()
    const haircarepage_PO = new HairCarePage_PO()

    before(() => {
        cy.fixture('products').then(data => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        //cy.visit("https://automationteststore.com/")
        //cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        homepage_PO.visitHomePage()
        homepage_PO.clickOn_HairCare_Button()
    })

    it("Add specific item to basket", () => {
        // cypress code
        // globalThis.data.productName.forEach(product=>{
        //     cy.addProductToBasket(product)
        // })
        //  cy.wait(1000)
        //  cy.get('.dropdown-toggle > .fa').click()  
        haircarepage_PO.addProductsToBasket()    
    })

})