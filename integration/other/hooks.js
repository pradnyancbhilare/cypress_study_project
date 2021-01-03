beforeEach(() => {
    cy.log("This is before each runs before every test")
})

afterEach(() => {
    cy.log("This is after each runs after every test")
})

describe('Hooks', () => {
    before(() => {
        // runs once before all tests in the block
        cy.log("runs once before all tests in the block")
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log("runs before each test in the block")
    })

    afterEach(() => {
        // runs after each test in the block
        cy.log("runs after each test in the block")
    })

    after(() => {
        // runs once after all tests in the block
        cy.log("runs once after all tests in the block")
    })

    it("This is a first test", () => {
        cy.log("Test 1")
    })

    it("This is a second test", () => {
        cy.log("Test 2")
    })
})