describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/register')
  })

  it('Welcome Register page is loaded', () => {
    cy.visit('http://localhost:3000/register')
  })

  it("Enter the user name", () => {
    const username = "admin"
    cy.get('#username')
      .type(username)
      .wait(3000)
  })

  it("Enter the email", () => {
    const email = "admin@gmail.com"
    cy.get('#email')
      .type(email)
      .wait(3000)
  })

  it("Enter the password", () => {
    const password = "admin123"
    cy.get('#password')
      .type(password)
      .wait(3000)
  })

  it("Error if username is smaller", () => {
    const username = "ad"
    cy.get('#username')
      .type(username)
    cy.get('#usererror')
      .should('be.visible')
      .wait(3000)
  })

  it("Error Username is proper", () => {
    const username = "ad"
    cy.get('#username')
      .type(username)
    cy.get('#usererror')
      .should('have.text', 'Field Username can not be less then 3 chars')
      .wait(3000)
  })

  it("Error Email is proper", () => {
    const email = "ad"
    cy.get('#email')
      .type(email)
    cy.get('#emailerror')
      .should('have.text', 'Field Email is invalid')
      .wait(3000)
  })

  it("Error Password is proper", () => {
    const password = "admin"
    cy.get('#password')
      .type(password)
    cy.get('#passworderror')
      .should('have.text', 'Field Password can not be less then 6 chars')
      .wait(3000)
  })

  it("Valid Register", () => {
    const username = "admin"
    const email = "admin@gmail.com"
    const password = "admin123"
    cy.get('#username')
      .type(username)
      .wait(3000)
    cy.get('#email')
      .type(email)
      .wait(3000)
    cy.get('#password')
      .type(password)
      .wait(3000)
    cy.get('#register')
      .type('{enter}')
    cy.url()
      .should('eq', "http://localhost:3000/login")
  })

  it("Disabled Login", () => {
    cy.get('#register')
      .should('be.disabled')
  })

  it("Enable Register", () => {
    const username = "admin"
    const email = "admin123@gmail.com"
    const password = "admin123"
    cy.get('#username')
      .type(username)
      .wait(3000)
    cy.get('#email')
      .type(email)
      .wait(3000)
    cy.get('#password')
      .type(password)
      .wait(3000)
    cy.get('#register')
      .should('be.enabled')
  })

})