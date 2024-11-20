/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

// Use the following statement to download cypress-iframe plugin
// npm install -D cypress-iframe

describe('Test 08 - Handling Frames with Cypress', function()
{

it('Handling Frames with Cypress',function() {

//cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.visit(Cypress.env('url')+"/AutomationPractice/")

// Handling Frames with Cypress

// Navigate to iframe
// Note: You must download cypress-iframe plugin first, then, 'frameLoaded' method will be available
cy.frameLoaded("#courses-iframe")

// Script runs successfully after inserting wait statements
cy.wait(2000)

// Switch to "iframe" mode
// find the href using eq() method
cy.iframe().find("a[href*='mentorship']").eq(0).click()

// Script runs successfully after inserting wait statements
cy.wait(2000)

// Assert that only (2) packages display
cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

} )

} )