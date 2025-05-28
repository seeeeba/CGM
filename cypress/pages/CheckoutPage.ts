export class CheckoutPage {
  checkPageTitle() {
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Checkout: Your Information');
  }

  checkFirstNameField() {
    cy.get('#first-name').should('be.visible');
  }

  checkLastNameField() {
    cy.get('#last-name').should('be.visible');
  }

  checkPostalCodeField() {
    cy.get('#postal-code').should('be.visible');
  }

  checkContinueButton() {
    cy.get('#continue').should('be.visible');
  }

  checkCancelButton() {
    cy.get('#cancel').should('be.visible');
  }

  checkCheckoutSection() {
    this.checkPageTitle();
    cy.wait(200)
    this.checkFirstNameField();
    cy.wait(200)
    this.checkLastNameField();
    cy.wait(200)
    this.checkPostalCodeField();
    cy.wait(200)
    this.checkContinueButton();
    cy.wait(200)
    this.checkCancelButton();
    cy.wait(200)
  }

  fillCheckoutForm() {
    cy.get('#first-name').clear().type('Mario');
    cy.get('#last-name').clear().type('Rossi');
    cy.get('#postal-code').clear().type('12345');
    cy.get('#continue').click();
  }
}