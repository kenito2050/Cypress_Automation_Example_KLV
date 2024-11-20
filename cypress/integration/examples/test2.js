/// <reference types="Cypress" />

describe('Test 02 - Select Product, Add to Bag Proceed to Checkout, Confirm that correct values & check marks selected', function()
{

it('Test 02 - Select Prodct, Checkout, Confirm values & check marks',function() {

//cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.visit(Cypress.env('url')+"/seleniumPractise/#/")

cy.get('.search-keyword').type('Ca')
cy.wait(2000)

// Define alias for ".products" Varible
cy.get('.products').as('product_locator')

// Create an array of (4) products & iterate thru these elements
// Find product with specific name
cy.get('@product_locator').find('.product').each(($e1, index, $list) => {

    // Search for the product that has a specific text & click on the ADD TO CART button
    const textVeg=$e1.find('h4.product-name').text()
    if (textVeg.includes('Cashews'))
    {
    cy.wrap($e1).find('button').click()
    }
    })

    // Click Bag
    cy.get('.cart-icon > img').click()

    // Click Proceed to Checkout
    cy.contains('PROCEED TO CHECKOUT').click()

    // Click Place Order
    cy.contains('Place Order').click()

    // Select value from Static Dropdown
    cy.get('select').select('United States').should('have.value','United States')

    // Put Check Mark in Check Box & Assert that Check Box is checked
    cy.get('.chkAgree').check().should('be.checked').and('have.value','on')

    cy.wait(2000)

    // Click Proceed Button
    // Use "force: true"
    cy.contains('Proceed').click({force: true})

} )


} )