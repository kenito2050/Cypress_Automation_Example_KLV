/// <reference types="Cypress" />

describe('Test 06 - Handling Mouse hover popups', function()
{

it('Handling Mouse hover popups',function() {

//cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.visit(Cypress.env('url')+"/AutomationPractice/")

// Handling Mouse hover popups using Cypress

// Jquery has show method which opens mouse over

// Invoke Show method to display elements
cy.get('.mouse-hover-content').invoke('show')

// use "cy.contains" to find the 'Top' element
cy.contains('Top').click()

// Assert that url contains 'top'
cy.url().should('include', 'top')

} )

} )