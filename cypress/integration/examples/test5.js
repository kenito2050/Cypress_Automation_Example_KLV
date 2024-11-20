/// <reference types="Cypress" />

describe('Test 05 - Handling Child Tab with Cypress & JQuery', function()
{

it('Handling Child Tab with Cypress & JQuery',function() {

//cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.visit(Cypress.env('url')+"/AutomationPractice/")

// Handling Child Tab with combination of Cypress & Jquery

// Click Open Tab, Invoke Jquery "remove attribute" so HREF launches in existing window not in a new window
cy.get('#opentab').invoke('removeAttr','target').click();

// Next section uses "cy.origin" wrapper to allow domain switching; otherwise, navigation to new HREF will fail
cy.origin("https://www.qaclickacademy.com/",()=>
{
   // Next line will fail without the "cy.origin" wrapper statement (above) because Cypress does not allow cross domain navigation
cy.get("#navbarSupportedContent a[href*='about']").click(); 

// Assert that "Welcome to QAClick Academy" Displays
cy.get(".mt-50 h2").should('contain','QAClick Academy');

})

} )

} )