 /// <reference types="Cypress" />

describe('Test 01 - Validate Elements on Page', function()
{

it('Validate Elements on Page',function() {

//cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.visit(Cypress.env('url')+"/seleniumPractise/#/")

cy.screenshot()

cy.get('.search-keyword').type('Ca')
cy.wait(2000)

cy.screenshot()

// Assert that there are (5) Elements on Page - 4 visible + 1 invisible
cy.get('.product').should('have.length',5)
cy.screenshot()

// Assert that there are (4) visible Elements on Page
cy.get('.product:visible').should('have.length',4)
cy.screenshot()

// Use Parent-Child Chaining to Find only the (4) elements that start with "Ca"

// Define alias for ".products" Varible
cy.get('.products').as('product_locator')
cy.screenshot()

// Assert that there are (4) Products
cy.get('@product_locator').find('.product').should('have.length',4)
cy.screenshot()

// Out of 4 products, get 2nd & click ADD TO CART
cy.get('@product_locator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
{
// Output Text to Console in Chrome Developer Tools
console.log('XX')
cy.screenshot()
})

// Find product with specific name
// Create an array of (4) products & iterate thru these elements
cy.get('@product_locator').find('.product').each(($e1, index, $list) => {

// Search for the product that has a specific text & click on the ADD TO CART button
const textVeg=$e1.find('h4.product-name').text()
if (textVeg.includes('Cashews'))
{
cy.wrap($e1).find('button').click()
cy.screenshot()
}
})

// assert if logo text is correctly displayed
// Note: .should does not require handling promise
cy.get('.brand').should('have.text','GREENKART')

// Verify that Green Cart Logo Displays
// However, you need to manually handle promise using .then() method

// This is to print in logs
cy.get('.brand').then(function(logo_element)
{
    cy.log(logo_element.text())
})
//cy.log(logo.text())

} )

} )