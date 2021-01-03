// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("navigateTo_WebdriverUni_HomePage", () => {
    cy.visit(("/"))
})

Cypress.Commands.add("selectProduct", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text().includes(productName)) {
            // wrap this element so we can
            // use cypress commands on it
            cy.log("Index: " + index + " -> " + $el.text())
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add("addProductToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log("Index: " + index + " -> " + $el.text())
            cy.get('.productcart').eq(index).click()
        }
    })
})

Cypress.Commands.add("webdriverUniContactUsFormSubmission", (firstName, lastName, email, comments) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('textarea.feedback-input').type(comments)
})
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload'
