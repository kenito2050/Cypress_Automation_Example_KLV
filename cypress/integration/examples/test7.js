/// <reference types="Cypress" />

describe('Test 07 - Handling Child Windows', function()
{

it('Handling Child Windows',function() {

//cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.visit(Cypress.env('url')+"/AutomationPractice/")

// Handling Child windows using Cypress

// get is a cypress method and .prop is a Jquery method.
// So, need to resolve promise with .then function

cy.get('#opentab').then(function(e1)
{
    const url=e1.prop('href')
    cy.visit(url) // qaclickacademy.com
    cy.origin(url, ()=>
    {
        cy.get("div.sub-menu-bar a[href*='about']").click()
    })
})


} )

} )