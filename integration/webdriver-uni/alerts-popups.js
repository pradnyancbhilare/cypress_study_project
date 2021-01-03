/// <reference types="Cypress"/>

describe("Handle JS Alerts", ()=> {

    it("Confirm JS Alerts contains the correct text", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(3000)
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Validate JS confirm alert box works correctly when clicked OK", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(3000)
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press a button!')
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')

        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it("Validate JS confirm alert box works correctly when clicked OK", ()=>{
        // cypress code
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.window().then(($win)=>{
            cy.stub($win, 'prompt').returns('Hello World!')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').contains('You entered: Hello World!')
        cy.get('#result').should('have.text', 'You entered: Hello World!')
    })

    it("Validate JS confirm alert box cancels correctly when clicked CANCEL", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(3000)
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return false;
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })

    it.only("Validate JS confirm alert using stub", ()=>{
        // cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.wait(3000)
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        })

        .then(()=>{
            return true;
        })

        .then(()=>{
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
        })
    })

})