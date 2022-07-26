describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
  })

  it('Welcome login page is loaded', () => {
    cy.visit('http://localhost:3000/login')
  })

  it("Enter the user name", () => {
    const username = "admin"
    cy.get('#username')
      .type(username)
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

  it("Error text is proper", () => {
    const username = "ad"
    cy.get('#username')
      .type(username)
    cy.get('#usererror')
      .should('have.text', 'Field Username can not be less then 3 chars')
      .wait(3000)
  })

  it("Valid Login", () => {
    const username = "admin"
    const password = "admin123"
    cy.get('#username')
      .type(username)
      .wait(3000)
    cy.get('#password')
      .type(password)
      .wait(3000)
    cy.get('#login')
      .type('{enter}')
    cy.url()
      .should('eq', "http://localhost:3000/")
  })

  it("Invalid Login", () => {
    const username = "admin"
    const password = "admin"
    cy.get('#username')
      .type(username)
      .wait(3000)
    cy.get('#password')
      .type(password)
      .wait(3000)
    cy.get('#login')
      .type('{enter}')
    cy.get('#error')
      .should('have.text', 'Username or Password is wrong')
      .wait(3000)
  })

  it("Disabled Login", () => {
    cy.get('#login')
      .should('be.disabled')
  })

  it("Enable Login", () => {
    const username = "admin"
    const password = "admin123"
    cy.get('#username')
      .type(username)
      .wait(3000)
    cy.get('#password')
      .type(password)
      .wait(3000)
    cy.get('#login')
      .should('be.enabled')
  })

})