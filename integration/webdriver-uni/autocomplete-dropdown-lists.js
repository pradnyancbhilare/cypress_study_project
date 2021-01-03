/// <reference types="Cypress"/>

describe("Verify automcomplete dropdowns lists via webdriver uni", ()=> {

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/")
    })

    it("Select and validate autocomplete dropdowns lists", ()=>{
        // cypress code
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force: true})
        const productName = 'Almond'
        cy.get('#myInput').type('alm')
        
        .then(() => {
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()                
                if(prod === productName) {
                    $el.click()                 
                }
            })
            return 0
        })
        cy.get('#submit-button').click()
        cy.url().should('include', 'Almond')

        .then(() => {
            const newProductName = 'Grapes'
            cy.get('#myInput').type('gr')
            
            .then(() => {
                cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                    const newProd = $el.text()                
                    if(newProd === newProductName) {
                        $el.click()         
                    }
                })
                return 0
            })
            cy.get('#submit-button').click()
            cy.url().should('include', newProductName)
        })
    })

})