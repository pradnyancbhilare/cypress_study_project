/// <reference types="Cypress"/>

describe("Iterate over Elements", ()=> {

    beforeEach(()=>{
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click() 
    })

    it("Log information of all Hair Care Products", ()=> {
        // cypress code
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {

            cy.log("Index: " + index + " -> " + $el.text())

        })
    })


    it("Add specific product to basket", ()=> {
        // cypress code
        cy.selectProduct('Pantene')
    })

    it("Add another specific product to basket", ()=> {
        // cypress code
        cy.selectProduct('Seaweed Conditioner')
    })

    it("Add one another specific product to basket", ()=> {
        // cypress code
        cy.selectProduct('Curls to straight Shampoo')
    })

})