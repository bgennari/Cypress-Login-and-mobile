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
    
}

}

// Acoes/Metodos/Funcoes

export default { 

    saveRegister() {
        cy.get(element.buttons.register).click()
    },
    
    fillname(name) {
        cy.get(element.Fields.name).type(name)
    
    },
    
    fillemail(email) {
        cy.get(element.Fields.email).type(email)
        
    },
    
    fillpassword(password) {
        cy.get(element.Fields.password).type(password)
        
    },
    
    checkmessage(message) {
        cy.get (element.messages.error).should('have.text', message)
        
    },
    
     checkRegisterSuccess(name) {
        
         cy.get(element.messages.successtitle, {timeout: 3000})
         .should('have.text','Cadastro realizado!')
        
         cy.get(element.messages.successsubtitle, {timeout: 3000})
         .should('have.text',`Bem-vindo ${name}`)

}

}
