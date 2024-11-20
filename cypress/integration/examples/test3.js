/// <reference types="Cypress" />

describe('Test 03 - Place Check Marks & Confirm check marks', function()
{

it('Place Check Marks & Confirm Check Marks',function() {

//cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
cy.visit(Cypress.env('url')+"/AutomationPractice/")

// Put Check Mark in Option 1 Check Box & Assert that Check Box is checked
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

// Put Check Mark in Multiple check boxes at a time (Option2, Option3)
cy.get('input[type="checkbox"]').check(['option2', 'option3'])

cy.wait(2000)

// Select Dynamic Drop Down
// Type the following characters "ind"
cy.get('#autocomplete').type('ind')

cy.wait(2000)

// Iterate thru Dynamic Drop Down options until locate "India" using each method
cy.get('.ui-menu-item div').each(($e1, index, $list) => {

    // Search the menu item with text "India"
    if($e1.text()==="India")
    {
        $e1.click()
        //cy.wrap($el).find('button').click()
    }

    })

// Assert that "India" is selected from Dynamic Drop Down
cy.get('#autocomplete').should('have.value','India')

//Static Dropdown
cy.get('select').select('option2').should('have.value','option2')

// Assert that Displayed Text is visible
cy.get('#displayed-text').should('be.visible')

// Select HIDE button
cy.get('#hide-textbox').click()

// Assert that Displayed Text is NOT displayed
cy.get('#displayed-text').should('not.be.visible')

// Select SHOW Button
cy.get('#show-textbox').click()

// Assert that Displayed Text is visible
cy.get('#displayed-text').should('be.visible')

// Radio Buttons

// Check radio button 1 & Assert that radio button is selected
cy.get('[for="radio1"] > .radioButton').check().should('be.checked')

// Check radio button 2 & Assert that radio button is selected
cy.get('[value="radio2"]').check().should('be.checked')

} )


} )