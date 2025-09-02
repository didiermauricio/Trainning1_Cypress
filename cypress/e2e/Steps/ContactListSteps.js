import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const selectors = {
  contactListHeader: 'h1',
  addContactButton: '#add-contact',
  logoutButton: '#logout'
};


Then('Contact List is Displayed', ()=>{
  cy.get(selectors.contactListHeader).should('contain',"Contact List");
  cy.get(selectors.addContactButton).should("exist");
  cy.get(selectors.logoutButton).should("exist");
})
