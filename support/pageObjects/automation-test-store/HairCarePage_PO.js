class HairCarePage_PO {
    addProductsToBasket() {
        globalThis.data.productName.forEach(product=>{
            cy.addProductToBasket(product)
        })
         cy.wait(1000)
         cy.get('.dropdown-toggle > .fa').click() 
    }
}

export default HairCarePage_PO