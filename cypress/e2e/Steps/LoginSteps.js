import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const selectors = {
  emailInput: '#email',
  passwordInput: '#password',
  submitButton: '#submit',
  errorMessage: '#error',
  contactListHeader: 'h1',
  addContactButton: '#add-contact',
  logoutButton: '#logout'
};

Given('I access to login page', ()=>{
  cy.visit("https://thinking-tester-contact-list.herokuapp.com")
})

When('Incorrect User and password are typed', ()=>{
  cy.get(selectors.emailInput).should("be.visible").clear();
  cy.get(selectors.emailInput).type("test@test.com");
  cy.get(selectors.passwordInput).clear();
  cy.get(selectors.passwordInput).type("123456789");
  cy.get(selectors.submitButton).should("be.visible").click() ;
  
})

When('Incorrect User {string} and Password {string} are typed', (user, password)=>{
  cy.get(selectors.emailInput).type(user);
  cy.get(selectors.emailInput).should("be.visible").clear();
  cy.get(selectors.passwordInput).clear();
  cy.get(selectors.passwordInput).type(password);
  cy.get(selectors.submitButton).should("be.visible").click() ;
  
})

Then('Error Message is displayed', ()=>{
  cy.get(selectors.errorMessage).should('contain',"Incorrect username or password")
})

When('Incorrect User and password are not typed', ()=>{
  cy.get(selectors.emailInput).clear();
  cy.get(selectors.passwordInput).clear();

  cy.get(selectors.submitButton).should("be.visible").click() ;
})

When('Correct User and password are typed', ()=>{
  cy.get(selectors.emailInput).clear();
  cy.get(selectors.emailInput).should('be.empty');
  cy.get(selectors.emailInput).type("didiermauricio@gmail.com");
  cy.get(selectors.passwordInput).clear();
  cy.get(selectors.passwordInput).type("1032386452");

  cy.get(selectors.submitButton).should("be.visible").click() ; 
})


