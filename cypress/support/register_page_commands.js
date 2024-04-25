/// <reference types="cypress" />



//Elementos

const botaocadastrar  = '#btnRegister'


const element = {

buttons: {
    register: '#btnRegister'
},

Fields: {

    name:'#user',
    email:'#email',
    password: '#password',

},

messages: {
    
    error: '.errorLabel',
    successtitle: '#swal2-title',
    successsubtitle: `#swal2-html-container`,
    
},

}

// Acoes/Metodos/Funcoes

Cypress.Commands.add('saveRegister',() => {
    cy.get(element.buttons.register).click()
})  

Cypress.Commands.add('fillname',(name) => {
    cy.get(element.Fields.name).type(name)

})

Cypress.Commands.add('fillemail',(email) => {
    cy.get(element.Fields.email).type(email)
    
})    

Cypress.Commands.add('fillpassword',(password) => {
    cy.get(element.Fields.password).type(password)
    
})

 Cypress.Commands.add('checkmessage',(message) => {
    cy.get (element.messages.error).should('have.text', message)
    
}) 

 Cypress.Commands.add('checkRegisterSuccess',(name) => {
    
     cy.get(element.messages.successtitle, {timeout: 3000})
     .should('have.text','Cadastro realizado!')
    
     cy.get(element.messages.successsubtitle, {timeout: 3000})
     .should('have.text',`Bem-vindo ${name}`)
   
}) 

    //Cypress.Commands.add('clickok',() => {
    //cy.get('.swal2-confirm.swal2-styled').click(),should('have.text', 'OK')
    
//}) 