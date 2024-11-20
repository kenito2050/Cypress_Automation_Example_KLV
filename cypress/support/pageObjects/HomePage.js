import ProductPage from '../../support/pageObjects/ProductPage'

class HomePage
{

goTo(url)
{
    cy.visit(url)
}

login(username,password)
{
// username field
cy.get("#username").type(username)

// password field
cy.get("#password").type(password)

// Click on Sign On Button
cy.contains("Sign In").click()

return new ProductPage()

}

}
export default HomePage;