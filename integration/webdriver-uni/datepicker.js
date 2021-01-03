/// <reference types="Cypress" />
describe("Test datepicker via webdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/")
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true })
    })

    it("Select date from the datepicker", () => {
        // let date = new Date()
        // date.setDate(date.getDate()) // get current day 
        // cy.log("Current date: " + date.getDate())

        // date = new Date()
        // date.setDate(date.getDate() + 5) // get current day + 5
        // cy.log("New Current date: " + date.getDate())

        var date = new Date()
        date.setDate(date.getDate() + 422)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default", {month: "long"})
        var futureDay = date.getDate()
        cy.log("Future year: " + futureYear)
        cy.log("Future month: " + futureMonth)
        cy.log("Future day: " + futureDay)

        cy.get('.input-group-addon').click()

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()
    })

  })
  