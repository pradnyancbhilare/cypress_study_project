/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/")
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true })
    })

    it("calculate and assert total age of all users", () => {
        var userDetails = [];
        let totalAge = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index]  = $el.text()
        })
        .then(() => {
            var i
            for(i=0; i < userDetails.length; i++){
                if(Number(userDetails[i])) {
                    totalAge += Number(userDetails[i])
                }
            }
            cy.log("The users total age is " + totalAge)
            expect(totalAge).to.eq(322)
        })
    })

    it("Find and assert age of a specific user last name", () => {

        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const lname = $el.text()
            if(lname.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then( age => {
                    const userAge = age.text()
                    expect(userAge).to.equal('80')
                })
            }
        })

    })
  

  })
  