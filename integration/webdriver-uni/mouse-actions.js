/// <reference types="Cypress"/>

describe("Test and Verify mouse action via webdriver uni", ()=> {

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/")
    })

    it("Scroll element into view", ()=>{
        // cypress code
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.wait(1000)
    })

    it("I should be able to drag and drop a draggable item", ()=>{
        // cypress code
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.wait(1000)
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
        cy.wait(1000)
    })

    it("I should be able to perform double mouse click", ()=>{
        // cypress code
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.wait(1000)
        cy.get('#double-click').dblclick()
        cy.wait(1000)
    })

    it("I should be able to hold down left mouse button", ()=>{
        // cypress code
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force: true})
        cy.wait(1000)
        cy.get('#click-box').trigger('mousedown', {which: 1}).then($el => {
            expect($el.text()).contains('Well done')
        })
        cy.wait(3000)
        cy.get('#click-box').trigger('mouseup')
    })

})