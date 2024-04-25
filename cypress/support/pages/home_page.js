/// <reference types="cypress" />

export default {
    acessRegisterPage() {

        cy.visit ('https://automationpratice.com.br/register').get('.logo')
        cy.get('.fa-lock').click()
        cy.get('#user').should('be.visible')
    
    }

}