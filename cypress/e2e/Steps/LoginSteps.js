import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I access to login page', ()=>{
  cy.visit("https://thinking-tester-contact-list.herokuapp.com")
})

When('Incorrect User and password are typed', ()=>{
  cy.get('#email').should("be.visible").clear();
  cy.get('#email').type("test@test.com");
  cy.get('#password').clear();
  cy.get('#password').type("123456789");
  cy.get('#submit').should("be.visible").click() ;
  
})

When('Incorrect User {string} and Password {string} are typed', (user, password)=>{
  cy.get('#email').should("be.visible").clear();
  cy.get('#email').type(user);
  cy.get('#password').clear();
  cy.get('#password').type(password);
  cy.get('#submit').should("be.visible").click() ;
  
})

Then('Error Message is displayed', ()=>{
  cy.get('#error').should('contain',"Incorrect username or password")
})

When('Incorrect User and password are not typed', ()=>{
  cy.get('#email').clear();
  cy.get('#password').clear();

  cy.get('#submit').should("be.visible").click() ;
})

When('Correct User and password are typed', ()=>{
  cy.get('#email').clear();
  cy.get('#email').should('be.empty');
  cy.get('#email').type("didiermauricio@gmail.com");
  cy.get('#password').clear();
  cy.get('#password').type("1032386452");

  cy.get('#submit').should("be.visible").click() ; 
})

Then('Contact List is Displayed', ()=>{
  cy.get('h1').should('contain',"Contact List");
  cy.get('#add-contact').should("exist");
  cy.get('#logout').should("exist");
})
