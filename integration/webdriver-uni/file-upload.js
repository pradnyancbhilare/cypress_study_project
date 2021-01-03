/// <reference types="Cypress"/>

describe("Test file upload via webdriver uni", ()=> {

    beforeEach(()=>{
        cy.visit("https://webdriveruniversity.com/")
    })

    it("upload a file", ()=>{
        // cypress code
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})

        cy.fixture("sky.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile({
                fileContent, fileName: "sky.png", mimeType: "image/png"
            },
            {
                uploadType: "input"
            })
        })

        cy.get('#submit-button').click()
        cy.wait(1000)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })
    })

    it("No upload a file", ()=>{
        // cypress code
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true})

        cy.get('#submit-button').click()
        cy.wait(1000)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })
    })

})