/// <reference types="Cypress" />

describe('Test 04 - Handle Alert Window, Compare strings w/ Mocha', function()
{

it('Handle Alert Window, Compare strings w/ Mocha',function() {

//cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.visit(Cypress.env('url')+"/AutomationPractice/")

// CLick Alert Button
//cy.get('#alertbtn').click()
cy.get('[value="Alert"]').click()

// Verify that Text on Window Alert displays
cy.on('window:alert',(str)=>
{
    // Use Mocha to compare strings
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.wait(2000)

// Click Confirm Button
//cy.get('#confirmbtn').click()
cy.get('[value="Confirm"]').click()

// Verify that Text on Window Confirm displays
cy.on('window:confirm',(str)=>
{
    // Use Mocha to compare strings
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

} )
} )