/// <reference types="Cypress"/>

describe("IAlias and Invoke", ()=> {

    it("Validate specific Hair Care Product", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('ProductName')
        cy.get('@ProductName').its('length').should('be.gt', 5)
        cy.get('@ProductName').should('include', 'Seaweed Conditioner')
    })

    it("Validate Product Thumbnail", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/")

        cy.get('.thumbnail').as('ProductThumbnail')
        cy.get('@ProductThumbnail').should('have.length', '16')
        cy.get('@ProductThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it.only("Calculate total of normal and sale products", ()=> {
        // cypress code
        cy.visit("https://automationteststore.com/")

        cy.get('.thumbnail').as('ProductThumbnail')
        cy.get('@ProductThumbnail').find('.oneprice').each(($el, index, $list) => {
            cy.log($el.text())
        })
        
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('ProductPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('SaleProductPrice')

        var itemsTotal = 0
        cy.get('@ProductPrice').then($linkText => {
            var itemPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var index
            for(index = 0; index < itemPrice.length; index++){
                cy.log("The index " +index+ " Product Price is " + itemPrice[index])
                itemPriceTotal += Number(itemPrice[index])
            }
            cy.log("The total item price is " + itemPriceTotal)
            itemsTotal += itemPriceTotal
        })

        cy.get('@SaleProductPrice').then($linkText => {
            var saleItemPriceTotal = 0
            var saleItemPrice = $linkText.split('$')
            var index
            for(index = 0; index < saleItemPrice.length; index++){
                cy.log("The index " +index+ " Sale Product Price is " + saleItemPrice[index])
                saleItemPriceTotal += Number(saleItemPrice[index])
            }
            cy.log("The total sale item price is " + saleItemPriceTotal)
            itemsTotal += saleItemPriceTotal
        })

        .then(()=>{
            cy.log("Total of all the products prices: " + itemsTotal)
            expect(itemsTotal).to.equal(652.6)
        })

    })


})