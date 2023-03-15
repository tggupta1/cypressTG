// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('LoginSwagLabs', (username, password, title)=>{
    cy.log("username is ",username)
    cy.log("password is ",password)
    cy.visit("https://www.saucedemo.com/")
    cy.get("input#user-name").type('standard_user')
    cy.get("input#password").type(password)
    cy.get("input#login-button").click()
    cy.title().should('eq',title)
})