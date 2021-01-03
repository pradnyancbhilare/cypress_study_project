class HomePage_PO {
    visitHomePage() {
        cy.visit("https://automationteststore.com/")
    }

    clickOn_HairCare_Button() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    }
}

export default HomePage_PO