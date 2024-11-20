/// <reference types="Cypress" />

describe('Test 09 - Interacting with Calendars', ()=>
{

it('Interacting with Calendars',()=>{

const monthNumber = "6";
const dayNumber = "15";
const yearNumber = "2027";
const expectedList = [monthNumber,dayNumber,yearNumber];

//cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
cy.visit(Cypress.env('url')+"/seleniumPractise/#/offers");

// Interacting with Calendars using Cypress

// Click on Calendar page element
cy.get(".react-date-picker__inputGroup").click();

// Click the naivgation label on calendar (2) times to display the years
cy.get(".react-calendar__navigation__label").click();
cy.get(".react-calendar__navigation__label").click();

// Locate & Cilck on button with Year Value
cy.contains("button",yearNumber).click();

// Click on the Month Number (Note: Index starts at "0" so use -1 need to find correct Month Value)
// Number() function converts MonthNumber string to number
cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click()

// Locate & Cilck on button with Day Value
cy.contains("abbr",dayNumber).click();

// Assert that Date Displays
// iterate thru list using .each
cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
{
    cy.wrap($el).invoke('val').should('eq',expectedList[index]);
})

} )

} )