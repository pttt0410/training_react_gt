describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Dashboard Loaded', () => {
      cy.visit('http://localhost:3000/')
      cy.url('eq','http://localhost:3000/login')
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
        .should('eq',"http://localhost:3000/")
    })
})