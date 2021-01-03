class contactUsPage_PO {

    contactUsDataEntry(firstName, lastName, email, comments){
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comments)
    }
}

export default contactUsPage_PO